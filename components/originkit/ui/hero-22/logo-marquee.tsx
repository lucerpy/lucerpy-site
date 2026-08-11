// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

const TECH_STACK = [
  "Next.js",
  "React",
  "Figma",
  "HubSpot",
  "RD Station",
  "WhatsApp API",
  "Vercel",
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
          {TECH_STACK.map((name) => (
            <span
              key={`${copy}-${name}`}
              className="flex h-[52.5px] w-[140px] shrink-0 items-center justify-center ipad:w-[160px] desktop-sm:h-[70px] desktop-sm:w-[200px]"
            >
              <span className="font-outfit text-[14px] font-semibold tracking-[-0.28px] whitespace-nowrap text-[#646568] desktop-sm:text-[16px]">
                {name}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
