// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

const TECH_STACK = [
  { name: "Next.js", file: "nextdotjs.svg" },
  { name: "React", file: "react.svg" },
  { name: "Figma", file: "figma.svg" },
  { name: "HubSpot", file: "hubspot.svg" },
  { name: "RD Station", file: "rdstation.png" },
  { name: "WhatsApp", file: "whatsapp.svg" },
  { name: "Vercel", file: "vercel.svg" },
];

const EDGE_MASK =
  "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)";

export const LogoMarquee = () => (
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
              className="flex h-[38px] w-[140px] shrink-0 items-center justify-center ipad:w-[160px] desktop-sm:h-[52px] desktop-sm:w-[200px]"
            >
              <span
                role="img"
                aria-label={name}
                className="h-[22px] w-[110px] bg-[#646568] transition-colors duration-300 ease hover:bg-[var(--color-primary)] desktop-sm:h-[26px] desktop-sm:w-[130px]"
                style={{
                  maskImage: `url(/logos/${file})`,
                  WebkitMaskImage: `url(/logos/${file})`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
