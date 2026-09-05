"use client";

/* Features Bento — adapted from 21st.dev (features-8.tsx). Kept the
   asymmetric bento grid concept, dropped everything fabricated in the
   original demo: fake person avatars/names, generic SaaS copy ("100%
   Customizable", "Faster than light"), and the hand-drawn chart/curve
   SVG illustrations that had nothing to do with this site. Real
   differentiators, lucide-react icons already used across the site
   instead of new custom SVGs, plain divs instead of shadcn's Card. */

import * as React from "react";
import { Palette, Zap, MessageSquare, Search, Users } from "lucide-react";

const CARD = "relative overflow-hidden rounded-2xl border border-white/5 bg-[#16181F] p-6 ipad:p-8";
const ICON_WRAP = "mb-5 flex size-11 items-center justify-center rounded-full border border-white/10";

export function FeaturesBento() {
  return (
    <div className="grid grid-cols-1 gap-4 ipad:grid-cols-6">
      <div className={`${CARD} ipad:col-span-3`}>
        <div className={ICON_WRAP}>
          <Palette size={20} className="text-primary" />
        </div>
        <h3 className="font-outfit text-[1.5rem] font-bold text-white">Design sob medida</h3>
        <p className="mt-2 font-inter text-[1rem] leading-[1.6] text-[#A1A1AA]">
          Nada de template genérico com a cor trocada. Cada interface é desenhada pensando na sua marca, no seu público e no que precisa converter.
        </p>
      </div>

      <div className={`${CARD} ipad:col-span-3`}>
        <div className={ICON_WRAP}>
          <Zap size={20} className="text-primary" />
        </div>
        <h3 className="font-outfit text-[1.5rem] font-bold text-white">Performance real</h3>
        <p className="mt-2 font-inter text-[1rem] leading-[1.6] text-[#A1A1AA]">
          Código enxuto, sem plugin acumulado. Medimos Core Web Vitals de verdade, não só prometemos "site rápido" na conversa de venda.
        </p>
      </div>

      <div className={`${CARD} ipad:col-span-2`}>
        <div className={ICON_WRAP}>
          <MessageSquare size={20} className="text-primary" />
        </div>
        <h3 className="font-outfit text-[1.5rem] font-bold text-white">Automação com IA</h3>
        <p className="mt-2 font-inter text-[1rem] leading-[1.6] text-[#A1A1AA]">
          Chatbot de atendimento no WhatsApp e integrações que conectam suas ferramentas de vendas.
        </p>
      </div>

      <div className={`${CARD} ipad:col-span-2`}>
        <div className={ICON_WRAP}>
          <Search size={20} className="text-primary" />
        </div>
        <h3 className="font-outfit text-[1.5rem] font-bold text-white">SEO técnico nativo</h3>
        <p className="mt-2 font-inter text-[1rem] leading-[1.6] text-[#A1A1AA]">
          Metadados, sitemap e dados estruturados desde a primeira linha de código — sem depender de plugin de SEO.
        </p>
      </div>

      <div className={`${CARD} ipad:col-span-2`}>
        <div className={ICON_WRAP}>
          <Users size={20} className="text-primary" />
        </div>
        <h3 className="font-outfit text-[1.5rem] font-bold text-white">Suporte direto</h3>
        <p className="mt-2 font-inter text-[1rem] leading-[1.6] text-[#A1A1AA]">
          Você fala com quem constrói, não com um atendente terceirizado lendo script.
        </p>
      </div>
    </div>
  );
}

export default FeaturesBento;
