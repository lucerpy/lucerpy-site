import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/originkit/footer-02";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import Preloader from "@/components/Preloader/Preloader";
import { LogoRevealProvider } from "@/components/Logo/LogoRevealContext";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg/ConsoleEasterEgg";

// Re-enabled as a real loading gate rather than a fixed decorative delay:
// the Preloader now waits for the hero's own "ready" signal (see
// Preloader.js) before wiping away, capped at a max wait so it can't hang.
// Known trade-off: PageSpeed/Lighthouse measures paint timestamps
// regardless of what's covering them, and this component's own hydration
// still competes for main-thread time with the hero - so this intentionally
// costs some PSI score in exchange for the reveal never looking premature
// for a real visitor. Flip back to false if that trade stops being worth it.
const PRELOADER_ENABLED = true;

// Overrides Silktide's default theme with the site's own palette.
const SILKTIDE_THEME_CSS = `
#stcm-wrapper {
  --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
  --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
  --primaryColor: #ccec7b;
  --backgroundColor: #0c0d11;
  --textColor: #FFFFFF;
  --backdropBackgroundColor: #00000033;
  --backdropBackgroundBlur: 0px;
  /* Silktide's naming is swapped from what it implies: --iconColor actually
     drives the button's own background, and --iconBackgroundColor drives
     the cookie glyph's fill - confirmed empirically via computed styles,
     not documented anywhere. */
  --iconColor: #E8A659;
  --iconBackgroundColor: #000000;
}

#stcm-icon {
  bottom: 45px !important;
}
`;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://lucerpy.com.br"),
  title: {
    default: "Lucerpy | Agência Digital",
    template: "%s | Lucerpy",
  },
  description: "Desenvolvimento de sites, landing pages e automações construídas com estratégia para transformar visitantes em clientes reais.",
  keywords: ["agência digital", "desenvolvimento web", "UX/UI design", "landing pages", "automações", "Next.js", "sites de alta conversão"],
  authors: [{ name: "Lucerpy Digital", url: "https://lucerpy.com.br" }],
  creator: "Lucerpy Digital",
  publisher: "Lucerpy Digital",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Lucerpy | Agência Digital",
    description: "Desenvolvimento de sites, landing pages e automações construídas com estratégia para transformar visitantes em clientes reais.",
    url: "https://lucerpy.com.br",
    siteName: "Lucerpy",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucerpy Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucerpy | Agência Digital",
    description: "Desenvolvimento de sites, landing pages e automações construídas com estratégia para transformar visitantes em clientes reais.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Lucerpy Digital",
  "url": "https://lucerpy.com.br",
  "logo": "https://lucerpy.com.br/favicon.ico",
  "description": "Agência digital focada em UX/UI, desenvolvimento web de alta performance e automações para negócios.",
  "sameAs": [
    "https://www.instagram.com/lucerpy.agencia/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "lucerpy@lucerpy.com.br",
    "telephone": "+55-19-93629-6268",
    "contactType": "customer service"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs synchronously before the body paints, so the preloader's
            visibility is decided (and set as a DOM attribute) before the
            first frame - otherwise the SSR'd page paints first and the
            preloader only appears after hydration, flashing the real site. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var s=sessionStorage.getItem('lucerpy-intro-shown');if(r||s){document.documentElement.setAttribute('data-preloader','skip');}else{document.documentElement.setAttribute('data-preloader','show');sessionStorage.setItem('lucerpy-intro-shown','1');}}catch(e){document.documentElement.setAttribute('data-preloader','skip');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* media="print" + onLoad swap is the standard non-blocking stylesheet
            trick: browser fetches it at low priority without blocking first
            paint, then flips to "all" once it's actually loaded. Cookie
            banner isn't needed for the first frame anyway. */}
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.css"
          integrity="sha384-EdMq+R+YOnsbelo08wPenoTlnxbAyxI11NMIxzugx/qAsbh64KcOkqxYqq6pfvO/"
          crossOrigin="anonymous"
          media="print"
          suppressHydrationWarning
        />
        {/* JSX onLoad on a <link> must be a real function, which requires a
            client component - a plain string attribute (what actually works
            in raw HTML) gets rejected by React. This inline script is the
            server-safe equivalent of that same trick. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById('silktide-consent-manager-css');if(l)l.onload=function(){l.media='all';};})();`,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.css"
            integrity="sha384-EdMq+R+YOnsbelo08wPenoTlnxbAyxI11NMIxzugx/qAsbh64KcOkqxYqq6pfvO/"
            crossOrigin="anonymous"
          />
        </noscript>
        <style
          id="silktide-consent-manager-overrides"
          dangerouslySetInnerHTML={{ __html: SILKTIDE_THEME_CSS }}
        />
      </head>
      <body suppressHydrationWarning>
        <ConsoleEasterEgg />
        {PRELOADER_ENABLED && <Preloader />}
        <CookieConsent />
        <LogoRevealProvider>
          <Navbar />
          <main><PageTransition>{children}</PageTransition></main>
          <Footer />
          <WhatsAppButton />
        </LogoRevealProvider>
      </body>
    </html>
  );
}

