// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { preload } from "react-dom";

const TECH_STACK = [
  { name: "Next.js", file: "nextdotjs.svg" },
  { name: "React", file: "react.svg" },
  { name: "Figma", file: "figma.svg" },
  { name: "HubSpot", file: "hubspot.svg" },
  { name: "RD Station", file: "rdstation-icon.png" },
  { name: "WhatsApp", file: "whatsapp.svg" },
  { name: "Vercel", file: "vercel.svg" },
];

const EDGE_MASK =
  "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)";

function maskStyle(file) {
  return {
    maskImage: `url(/logos/${file})`,
    WebkitMaskImage: `url(/logos/${file})`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
  };
}

export const LogoMarquee = () => {
  // The logos are painted via a CSS mask-image, not an <img> — the browser's
  // preload scanner doesn't discover mask-image URLs from the initial HTML
  // the way it does <img src>, so on a real network (unlike local dev) they
  // can still be mid-fetch by the time the marquee scrolls them into view,
  // leaving a blank gap until they pop in. Preloading forces an early,
  // high-priority fetch for all of them.
  TECH_STACK.forEach(({ file }) => {
    preload(`/logos/${file}`, { as: "image" });
  });

  return (
  <div
    className="relative w-full overflow-hidden"
    style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
  >
    <div className="flex w-max animate-logo-marquee items-center will-change-transform">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center"
          aria-hidden={copy === 1}
        >
          {TECH_STACK.map(({ name, file }) => (
            <span
              key={`${copy}-${name}`}
              className="group flex h-[38px] w-[150px] shrink-0 items-center justify-center gap-2 ipad:w-[170px] desktop-sm:h-[52px] desktop-sm:w-[210px]"
            >
              <span
                aria-hidden="true"
                className="h-[18px] w-[18px] shrink-0 bg-[#646568] transition-colors duration-300 ease group-hover:bg-[var(--color-primary)] desktop-sm:h-[22px] desktop-sm:w-[22px]"
                style={maskStyle(file)}
              />
              <span className="font-outfit text-[14px] font-semibold tracking-[-0.28px] whitespace-nowrap text-[#646568] transition-colors duration-300 ease group-hover:text-[var(--color-primary)] desktop-sm:text-[16px]">
                {name}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};
