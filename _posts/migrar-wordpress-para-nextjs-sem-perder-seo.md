---
title: "Como migrar seu site de WordPress para Next.js sem perder SEO"
description: "Redirecionamentos, dados estruturados, sitemap e o que checar antes de trocar de tecnologia sem jogar fora anos de posicionamento no Google."
date: "2026-08-24"
tag: "TECNOLOGIA"
image: "/blog/migrar-wordpress-para-nextjs.jpg"
gradient: "linear-gradient(45deg, #1a2438, #0C0D11)"
---

Depois de decidir trocar de tecnologia — como detalhamos em [Next.js vs WordPress: qual a melhor escolha para a sua empresa?](/blog/nextjs-vs-wordpress-qual-escolher) — vem a parte que trava a maioria das migrações: o medo real de perder posições que levaram anos pra conquistar. Esse medo é legítimo. Migração malfeita derruba tráfego de fato. Mas migração bem planejada não é sobre torcer para o Google reconhecer seu site novo — é sobre entregar a ele os sinais certos, na ordem certa.

## 1. Mapear cada URL antes de tocar em qualquer coisa

Antes de escrever uma linha de código no site novo, exporte a lista completa de URLs indexadas do site atual — via Google Search Console, sitemap.xml existente e um crawler. Toda URL que recebe tráfego orgânico ou tem backlink precisa de um destino claro no site novo, mesmo que a estrutura de rotas mude.

## 2. Redirecionamentos 301, não 302, e nunca em cadeia

Cada URL antiga que muda de endereço precisa de um redirecionamento 301 (permanente) direto para o novo endereço — nunca um 302 (temporário), que não transfere a mesma autoridade de SEO, e nunca uma cadeia de redirecionamentos (A → B → C), que perde força a cada salto e deixa o rastreamento mais lento. No Next.js, isso se configura de forma nativa no `next.config`, sem depender de plugin.

## 3. Recriar metadados e dados estruturados um a um

Título, meta description, Open Graph e JSON-LD de cada tipo de página (posts, produtos, páginas institucionais) precisam existir no site novo com paridade real — não uma versão genérica aplicada a tudo. Como comentamos em [Next.js vs WordPress](/blog/nextjs-vs-wordpress-qual-escolher), a vantagem do Next.js é gerar isso nativamente via `generateMetadata`, mas essa vantagem só aparece se cada rota realmente receber seus próprios metadados — migrar sem preencher isso é jogar fora um dos maiores ganhos da troca.

## 4. Sitemap novo, submetido no dia do lançamento

Gere o sitemap.xml do site novo e submeta no Google Search Console assim que o DNS apontar pro ar — quanto antes o Google rastrear a nova estrutura com os redirecionamentos já ativos, mais rápido a transferência de autoridade se consolida. Não espere o tráfego cair pra agir.

## 5. Preservar conteúdo e imagens que já rankeiam

Página com bom desempenho orgânico não deve ser reescrita do zero só porque a tecnologia mudou — o texto, os títulos internos e as imagens que já geram tráfego devem ser migrados como estão, com no máximo ajustes de formatação. Reescrever conteúdo que já funciona ao mesmo tempo em que muda toda a base técnica é somar duas variáveis de risco numa migração só.

## 6. Medir performance antes e depois

Registre as métricas de [Core Web Vitals](/blog/core-web-vitals-performance) do site antigo antes da migração — LCP, INP, CLS — e compare com o site novo nas mesmas páginas, no mesmo tipo de dispositivo. Esse antes/depois é o que comprova, em número, que a migração trouxe ganho real e não só uma cara nova.

## Conclusão

Migrar de WordPress para Next.js sem perder SEO não é sobre sorte — é sobre não pular nenhuma das etapas de transferência de sinal que o Google usa pra entender que o site novo é a continuação do antigo, não um site diferente. Feito com esse cuidado, a migração costuma trazer ganho de posição no médio prazo, não perda.

Na **Lucerpy**, já conduzimos essa migração para negócios que precisavam de mais performance sem arriscar o histórico de SEO — veja [cases reais](/projetos) ou [fale com a nossa equipe](/contato) para planejar a sua.
