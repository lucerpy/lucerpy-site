// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import Tetris from "@/components/originkit/ui/footer-02/tetris";

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
      { label: "+55 19 93629-6268", href: "https://wa.me/5519936296268", external: true, icon: "whatsapp.svg" },
      { label: "@lucerpy.agencia", href: "https://www.instagram.com/lucerpy.agencia/", external: true, icon: "instagram.svg" },
      { label: "Lucerpy Digital", href: "https://linkedin.com/company/lucerpy", external: true, icon: "linkedin.svg" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "/privacidade" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5519936296268",
    icon: "whatsapp.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lucerpy.agencia/",
    icon: "instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/lucerpy",
    icon: "linkedin.svg",
  },
] as const;

const SOCIAL_SHADOW =
  "0px 17px 2.5px rgba(0,0,0,0), 0px 11px 2px rgba(0,0,0,0.01), 0px 6px 2px rgba(0,0,0,0.05), 0px 3px 1.5px rgba(0,0,0,0.09), 0px 1px 1px rgba(0,0,0,0.1)";

export function Footer() {
  return (
    <footer
      aria-label="Lucerpy"
      className="relative isolate mx-auto w-full overflow-hidden bg-[var(--color-bg-light)]"
    >
      {/*
        Mobile (Figma 2168:524): stacked brand → 2-col links (Legal wraps)
        iPad   (Figma 2168:264): stacked brand → 3-col links
        Desktop (Figma 2168:5):  brand | links side-by-side
      */}
      <div className="relative z-10 flex flex-col gap-8 px-6 pt-10 pb-[240px] ipad:gap-12 ipad:px-12 ipad:pt-12 ipad:pb-[250px] desktop-sm:flex-row desktop-sm:items-stretch desktop-sm:justify-between desktop-sm:gap-0 desktop-sm:px-16 desktop-sm:pt-[72px] desktop-sm:pb-[240px]">
        {/* Brand */}
        <div className="flex w-full flex-col gap-6 ipad:gap-8 desktop-sm:w-[220px] desktop-sm:shrink-0 desktop-sm:justify-between desktop-sm:gap-0">
          <div className="flex flex-col gap-2 ipad:gap-4">
            <Logo />
            <p className="font-sans text-[14px] leading-[1.4] text-[#c2c2c2]">
              Agência digital focada em UX/UI, desenvolvimento web e automações que entregam resultado real.
            </p>
          </div>

          <ul className="flex items-center gap-4" aria-label="Redes sociais">
            {SOCIAL_LINKS.map((social, index) => (
              <li
                key={social.label}
                className="animate-social-slide-up will-change-transform"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  tabIndex={0}
                  className="relative inline-flex size-10 touch-manipulation items-center justify-center rounded-full bg-[#292929] transition-opacity duration-200 ease before:absolute before:inset-[-6px] before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-80"
                  style={{ boxShadow: SOCIAL_SHADOW }}
                >
                  <span className="relative size-5 overflow-clip">
                    <img
                      src={asset(social.icon)}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      className="size-full"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Rodapé"
          className="grid w-full grid-cols-2 gap-x-8 gap-y-8 ipad:grid-cols-3 ipad:gap-8 desktop-sm:flex desktop-sm:w-[680px] desktop-sm:shrink-0 desktop-sm:gap-14"
        >
          {LINK_COLUMNS.map((column) => (
            <div
              key={column.title}
              className="flex min-w-0 flex-col gap-4 desktop-sm:flex-1"
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
                          width={16}
                          height={16}
                          loading="lazy"
                          className="mt-[3px] size-4 shrink-0 opacity-80"
                          aria-hidden="true"
                        />
                      )}
                      <span className="desktop-sm:whitespace-nowrap">{link.label}</span>
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

      {/* Tetris board — decorative stack along the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[200px] overflow-hidden"
      >
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
      </div>
    </footer>
  );
}
