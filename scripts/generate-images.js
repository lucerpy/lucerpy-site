#!/usr/bin/env node
/**
 * Roda em lote os jobs definidos em scripts/image-jobs.json,
 * gerando cada imagem via Mystic (Magnific) e salvando no destino indicado.
 *
 * Uso:
 *   MAGNIFIC_API_KEY=xxx node scripts/generate-images.js
 *   MAGNIFIC_API_KEY=xxx node scripts/generate-images.js --id case-consultoria-financeira
 */

const path = require('path');
const { generateImage } = require('./generate-image');

async function main() {
  const onlyId = process.argv.includes('--id')
    ? process.argv[process.argv.indexOf('--id') + 1]
    : null;

  const jobs = require(path.resolve(__dirname, 'image-jobs.json'));
  const toRun = onlyId ? jobs.filter((j) => j.id === onlyId) : jobs;

  if (toRun.length === 0) {
    console.error(`Nenhum job encontrado${onlyId ? ` para id "${onlyId}"` : ''}.`);
    process.exit(1);
  }

  for (const job of toRun) {
    process.stdout.write(`Gerando "${job.id}" -> ${job.out} ... `);
    try {
      await generateImage({
        prompt: job.prompt,
        outputPath: job.out,
        aspectRatio: job.aspect,
        resolution: job.resolution,
        model: job.model,
      });
      console.log('OK');
    } catch (err) {
      console.log('FALHOU');
      console.error(`  ${err.message}`);
    }
  }
}

main();
