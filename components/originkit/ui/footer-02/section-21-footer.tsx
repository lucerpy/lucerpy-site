// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

"use client";

import { Footer } from "@/components/originkit/ui/footer-02/footer";

/** Section 21 footer shell from https://github.com/diip3sh/sections */
export function Section21Footer() {
  return (
    <section
      id="contato"
      aria-label="Rodapé Lucerpy"
      className="relative isolate flex w-full flex-col items-center overflow-hidden bg-[var(--color-bg)] pt-16 ipad:pt-24 desktop-sm:pt-32"
    >
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </section>
  );
}
