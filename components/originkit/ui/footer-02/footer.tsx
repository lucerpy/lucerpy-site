// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Logo from "@/components/Logo/Logo";
import NewsletterForm from "@/app/blog/NewsletterForm";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Footer sits in the root layout, so it hydrates on every page's initial
// load - but Tetris's board setup (scatterInitialStack) runs a real
// synchronous grid-packing loop on mount, and it's decorative content in
// the footer, below the fold on first paint. Same dynamic + idle-defer
// pattern as the hero's DottedBackground: keep it off the critical path.
const Tetris = dynamic(
  () => import("@/components/originkit/ui/footer-02/tetris"),
  { ssr: false }
);

function asset(file: string) {
  return `/originkit/footer-02/${file}`;
}

const LINK_COLUMNS = [
  {
    title: "Páginas",
    links: [
      { label: "Home", href: "/" },
      { label: "Serviços", href: "/servicos" },
      { label: "Projetos", href: "/projetos" },
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "lucerpy@lucerpy.com.br", href: "mailto:lucerpy@lucerpy.com.br", external: true, icon: "envelope.svg" },
      { label: "+55 19 93629-6268", href: buildWhatsAppUrl(), external: true, icon: "whatsapp.svg" },
      { label: "@lucerpy.agencia", href: "https://www.instagram.com/lucerpy.agencia/", external: true, icon: "instagram.svg" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "/privacidade" },
    ],
  },
] as const;

export function Footer() {
  // Footer sits in the root layout, so it's in the DOM on every page from
  // first paint - but nobody sees it (or the Tetris board inside it) until
  // they actually scroll near the bottom. Mounting Tetris only once the
  // footer is close to the viewport means its setup cost (a real
  // synchronous grid-packing loop) never competes with anything above the
  // fold at all, on any page.
  const [showTetris, setShowTetris] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showTetris) return;
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTetris(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [showTetris]);

  return (
    <footer
      ref={footerRef}
      aria-label="Lucerpy"
      className="relative isolate mx-auto w-full overflow-hidden bg-[var(--color-bg-light)]"
    >
      {/*
        Mobile (Figma 2168:524): stacked brand → 1-col links (all stacked)
        iPad   (Figma 2168:264): stacked brand → 3-col links
        Desktop (Figma 2168:5):  brand | links side-by-side
      */}
      <div className="relative z-10 flex flex-col gap-8 px-8 pt-10 pb-[280px] ipad:gap-12 ipad:px-12 ipad:pt-12 ipad:pb-[290px] desktop-sm:px-16 desktop-sm:pt-[72px] desktop-sm:pb-[280px]">
      {/* 5-column grid on desktop: Brand | Newsletter | Páginas | Contato |
          Legal. Each track has its own min/max rule (grid-template-columns
          below) so the browser computes every width and gap on its own -
          no more manually budgeting fixed pixel widths per breakpoint. */}
      <div className="flex flex-col gap-8 ipad:gap-12 desktop-sm:grid desktop-sm:grid-cols-[minmax(180px,220px)_minmax(240px,440px)_repeat(3,minmax(120px,170px))] desktop-sm:items-start desktop-sm:justify-between desktop-sm:gap-x-10">
        {/* Brand */}
        <div className="flex w-full flex-col gap-8 ipad:gap-10">
          <div className="flex flex-col gap-2 ipad:gap-4">
            <Logo />
            <p className="font-sans text-[14px] leading-[1.4] text-[#c2c2c2]">
              Agência digital focada em UX/UI, desenvolvimento web e automações que entregam resultado real.
            </p>
          </div>
        </div>

        {/* Newsletter - fills the horizontal gap that otherwise sits empty
            between the narrow brand column and the link columns on desktop.
            Reuses the blog CTA's existing HubSpot-backed form
            (app/blog/NewsletterForm.js) instead of a new one. Named as a
            container so NewsletterForm's compact CSS can switch to a
            side-by-side row based on this column's own real width, not the
            viewport - see the @container rule in app/blog/page.module.css. */}
        <div className="flex w-full flex-col gap-3 desktop-sm:[container-type:inline-size] desktop-sm:[container-name:newsletterCol]">
          <div className="flex flex-col gap-2">
            <p className="font-outfit text-[18px] leading-normal text-white">
              Receba novidades
            </p>
            <p className="font-sans text-[14px] leading-[1.4] text-[#c2c2c2]">
              Dicas de UX, performance e conversão direto no seu e-mail. Sem spam.
            </p>
          </div>
          <NewsletterForm compact />
        </div>

        {/* Link columns - `contents` on desktop drops this <nav> out of the
            box tree so its 3 children become direct items of the outer
            grid (one grid track each), while keeping the element itself
            for its aria-label landmark. Below desktop it's a real grid
            container again for the 2/3-col mobile/tablet layout. */}
        <nav
          aria-label="Rodapé"
          className="grid w-full grid-cols-1 gap-y-8 ipad:grid-cols-3 ipad:gap-8 desktop-sm:contents"
        >
          {LINK_COLUMNS.map((column) => (
            <div
              key={column.title}
              className="flex min-w-0 flex-col gap-4"
            >
              <p className="font-outfit text-[18px] leading-normal text-white">
                {column.title}
              </p>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => {
                  const isExternal = "external" in link && link.external;
                  const icon = "icon" in link ? link.icon : undefined;
                  const linkClassName =
                    "relative inline-flex max-w-full items-start gap-2 break-words font-sans text-[16px] leading-normal text-white/80 touch-manipulation transition-opacity duration-200 ease before:absolute before:-inset-y-2 before:-inset-x-1 before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white desktop-sm:text-[14px] [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:text-white";

                  const content = (
                    <>
                      {icon && (
                        <img
                          src={asset(icon)}
                          alt=""
                          width={20}
                          height={20}
                          loading="lazy"
                          className="mt-[1px] size-5 shrink-0 opacity-80"
                          aria-hidden="true"
                        />
                      )}
                      <span className="break-words">{link.label}</span>
                    </>
                  );

                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                          tabIndex={0}
                          aria-label={link.label}
                          className={linkClassName}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          scroll={false}
                          tabIndex={0}
                          aria-label={link.label}
                          className={linkClassName}
                        >
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Sits above the Tetris decoration (which is absolutely positioned
          within this same z-10 container, pinned to its bottom edge) rather
          than as a separate bar below it. */}
      <p className="font-sans text-[13px] text-white/50">
        © {new Date().getFullYear()} Lucerpy Digital. Todos os direitos reservados.
      </p>

      {/* Tetris board — decorative stack along the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[200px] overflow-hidden"
      >
        {showTetris && (
          <Tetris
            boardColor="#16181F"
            colors={["#CCEC7B"]}
            cellSize={20}
            gap={0}
            rounded={20}
            dropSpeed={1}
            movement={2}
            startFilled={true}
          />
        )}
      </div>
      </div>
    </footer>
  );
}
