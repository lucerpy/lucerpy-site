---
title: "Core Web Vitals: o que são e por que sua nota no PageSpeed afeta vendas"
description: "LCP, INP e CLS explicados sem economês técnico: o que cada métrica mede, por que o Google se importa, e como isso afeta a conversão do seu site."
date: "2026-08-14"
tag: "PERFORMANCE"
image: "/blog/core-web-vitals-performance.jpg"
gradient: "linear-gradient(45deg, #123524, #0C0D11)"
---

Rodar o site no PageSpeed Insights e ver uma nota vermelha é frustrante — principalmente quando ninguém na equipe sabe exatamente o que aquelas siglas significam. LCP, INP, CLS: parecem economês técnico, mas na prática medem uma coisa muito simples: **o quanto a experiência de usar o seu site é frustrante ou fluida**. E isso afeta direto quantas pessoas ficam até o final e convertem.

## As três métricas, sem economês

**LCP (Largest Contentful Paint)** mede quanto tempo leva até o maior elemento visível da página (geralmente uma imagem grande ou o título principal) aparecer na tela. Se o LCP é alto, o visitante fica olhando pra uma tela em branco ou incompleta por tempo demais — e boa parte desiste antes mesmo de ver do que se trata o site.

**INP (Interaction to Next Paint)** mede quanto tempo o site demora para reagir depois que alguém clica em algo — um botão, um menu, um campo de formulário. INP alto é aquela sensação de "cliquei e não aconteceu nada", que faz a pessoa clicar de novo, ou simplesmente ir embora achando que o site travou.

**CLS (Cumulative Layout Shift)** mede o quanto os elementos da página "pulam" de lugar enquanto carregam — aquele clássico botão que muda de posição bem na hora em que você ia clicar, e você acaba clicando em outra coisa por engano. Isso não é só irritante, é a causa mais comum de cliques acidentais em anúncios ou links errados.

Juntas, essas três métricas formam os [Core Web Vitals](https://web.dev/articles/vitals) — o conjunto de sinais de experiência de página que o Google usa como parte do algoritmo de busca desde 2021.

## Por que o Google se importa com isso

O objetivo declarado do Google é entregar os melhores resultados possíveis pra quem busca — e um site que demora, trava ou pula na tela é uma má experiência, independente de quão bom seja o conteúdo. Sites com boas métricas de Core Web Vitals têm uma vantagem competitiva real no ranqueamento, especialmente quando concorrem com páginas de qualidade de conteúdo parecida.

## O que costuma derrubar a nota

Na prática, os vilões mais comuns são sempre os mesmos: imagens não otimizadas (peso grande demais para o que realmente aparece na tela), scripts de terceiros carregando de forma bloqueante (pixels de rastreamento, chats, banners que competem com o conteúdo principal pelo processamento do navegador), fontes customizadas carregando tarde e fazendo o texto "pular" de posição, e falta de espaço reservado para imagens e vídeos antes deles carregarem completamente.

A escolha da própria tecnologia por trás do site também pesa bastante nisso — como já comparamos em [Next.js vs. WordPress](/blog/nextjs-vs-wordpress-qual-escolher), plataformas com dezenas de plugins acumulam esse tipo de gargalo com muito mais facilidade do que uma stack pensada para performance desde a base.

## Como medir de verdade

O [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) do próprio Google é o ponto de partida mais direto — gratuito, sem cadastro, mostra tanto dados de laboratório (uma simulação controlada) quanto dados de campo (o que usuários reais estão vivenciando de verdade no seu site, quando há volume suficiente de tráfego). Vale rodar o teste tanto na versão mobile quanto desktop, porque os resultados costumam ser bem diferentes entre os dois.

## O impacto real na conversão

Não é coincidência que sites lentos tenham taxa de rejeição mais alta — já é praticamente senso comum que a paciência do usuário despenca conforme o tempo de carregamento sobe, como descrevemos em [por que o seu site afasta clientes](/blog/por-que-seu-site-afasta-clientes). Performance técnica não é um detalhe de bastidor: é parte do design da experiência, tão importante quanto a cor do botão ou o texto do CTA.

## Conclusão

Core Web Vitals não é sobre perseguir uma nota perfeita por vaidade — é sobre garantir que ninguém desista do seu site antes de conhecer o que você oferece. As métricas existem justamente para tornar mensurável algo que antes era só "sensação" de lentidão.

Na **Lucerpy**, tratamos performance como parte do processo de design, não como um ajuste de última hora. Se o seu site está tirando nota baixa e você não sabe por onde começar, [fale com a gente](/contato) ou veja como trabalhamos em [desenvolvimento web](/servicos).
