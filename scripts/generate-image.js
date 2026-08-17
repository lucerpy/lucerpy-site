#!/usr/bin/env node
/**
 * Gera uma imagem via API Mystic (Magnific, ex-Freepik) e salva em disco.
 *
 * Uso via CLI:
 *   MAGNIFIC_API_KEY=xxx node scripts/generate-image.js \
 *     --prompt "descricao da imagem" \
 *     --out public/cases/exemplo.jpg \
 *     [--aspect widescreen_16_9] [--resolution 2k] [--model realism]
 *
 * Uso como modulo:
 *   const { generateImage } = require('./generate-image');
 *   await generateImage({ prompt, outputPath, aspectRatio, resolution, model });
 *
 * Docs: https://docs.magnific.com/api-reference/mystic/post-mystic
 */

const fs = require('fs');
const path = require('path');

const API_BASE = 'https://api.magnific.com';
const POLL_INTERVAL_MS = 3000;
const POLL_TIMEOUT_MS = 5 * 60 * 1000;

function getApiKey() {
  const key = process.env.MAGNIFIC_API_KEY;
  if (!key) {
    throw new Error(
      'MAGNIFIC_API_KEY nao definida. Crie uma conta em https://www.magnific.com/developers/dashboard, ' +
      'gere uma chave e exporte-a (ex: adicione MAGNIFIC_API_KEY=xxx no .env.local).'
    );
  }
  return key;
}

async function generateImage({
  prompt,
  outputPath,
  aspectRatio = 'widescreen_16_9',
  resolution = '2k',
  model = 'realism',
}) {
  const apiKey = getApiKey();

  const createRes = await fetch(`${API_BASE}/v1/ai/mystic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-magnific-api-key': apiKey,
    },
    body: JSON.stringify({ prompt, aspect_ratio: aspectRatio, resolution, model }),
  });

  if (!createRes.ok) {
    throw new Error(`Falha ao criar tarefa (${createRes.status}): ${await createRes.text()}`);
  }

  const created = await createRes.json();
  const taskId = created.data?.task_id;
  if (!taskId) {
    throw new Error(`Resposta sem task_id: ${JSON.stringify(created)}`);
  }

  const deadline = Date.now() + POLL_TIMEOUT_MS;
  let imageUrl;

  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));

    const statusRes = await fetch(`${API_BASE}/v1/ai/mystic/${taskId}`, {
      headers: { 'x-magnific-api-key': apiKey },
    });
    if (!statusRes.ok) {
      throw new Error(`Falha ao consultar tarefa (${statusRes.status}): ${await statusRes.text()}`);
    }

    const statusBody = await statusRes.json();
    const status = statusBody.data?.status;

    if (status === 'COMPLETED') {
      imageUrl = statusBody.data.generated?.[0];
      break;
    }
    if (status === 'FAILED') {
      throw new Error(`Geracao falhou para task ${taskId}: ${JSON.stringify(statusBody)}`);
    }
    // CREATED / IN_PROGRESS -> continua o polling
  }

  if (!imageUrl) {
    throw new Error(`Timeout aguardando task ${taskId} (${POLL_TIMEOUT_MS / 1000}s).`);
  }

  const imageRes = await fetch(imageUrl);
  if (!imageRes.ok) {
    throw new Error(`Falha ao baixar imagem gerada (${imageRes.status}).`);
  }
  const buffer = Buffer.from(await imageRes.arrayBuffer());

  const destination = path.resolve(process.cwd(), outputPath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, buffer);

  return destination;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, '');
    args[key] = argv[i + 1];
  }
  return args;
}

if (require.main === module) {
  const args = parseArgs(process.argv.slice(2));
  if (!args.prompt || !args.out) {
    console.error('Uso: node scripts/generate-image.js --prompt "..." --out public/caminho.jpg [--aspect ...] [--resolution ...] [--model ...]');
    process.exit(1);
  }

  generateImage({
    prompt: args.prompt,
    outputPath: args.out,
    aspectRatio: args.aspect,
    resolution: args.resolution,
    model: args.model,
  })
    .then((dest) => console.log(`OK: imagem salva em ${dest}`))
    .catch((err) => {
      console.error(`Erro: ${err.message}`);
      process.exit(1);
    });
}

module.exports = { generateImage };
