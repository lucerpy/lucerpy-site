// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

// RD Station's asset is already a horizontal lockup (icon + wordmark), so it
// doesn't need a separate text label like the icon-only marks below.
const TECH_STACK = [
  { name: "Next.js", file: "nextdotjs.svg", wordmark: false },
  { name: "React", file: "react.svg", wordmark: false },
  { name: "Figma", file: "figma.svg", wordmark: false },
  { name: "HubSpot", file: "hubspot.svg", wordmark: false },
  { name: "RD Station", file: "rdstation.png", wordmark: true },
  { name: "WhatsApp", file: "whatsapp.svg", wordmark: false },
  { name: "Vercel", file: "vercel.svg", wordmark: false },
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
          {TECH_STACK.map(({ name, file, wordmark }) => (
            <span
              key={`${copy}-${name}`}
              className="group flex h-[38px] w-[150px] shrink-0 items-center justify-center gap-2 ipad:w-[170px] desktop-sm:h-[52px] desktop-sm:w-[210px]"
            >
              {wordmark ? (
                <span
                  role="img"
                  aria-label={name}
                  className="h-[22px] w-[130px] bg-[#646568] transition-colors duration-300 ease group-hover:bg-[var(--color-primary)] desktop-sm:h-[26px] desktop-sm:w-[150px]"
                  style={maskStyle(file)}
                />
              ) : (
                <>
                  <span
                    aria-hidden="true"
                    className="h-[18px] w-[18px] shrink-0 bg-[#646568] transition-colors duration-300 ease group-hover:bg-[var(--color-primary)] desktop-sm:h-[22px] desktop-sm:w-[22px]"
                    style={maskStyle(file)}
                  />
                  <span className="font-outfit text-[14px] font-semibold tracking-[-0.28px] whitespace-nowrap text-[#646568] transition-colors duration-300 ease group-hover:text-[var(--color-primary)] desktop-sm:text-[16px]">
                    {name}
                  </span>
                </>
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
