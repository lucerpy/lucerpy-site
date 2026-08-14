import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/originkit/footer-02";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import Preloader from "@/components/Preloader/Preloader";
import { LogoRevealProvider } from "@/components/Logo/LogoRevealContext";

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
  --iconColor: #CCEC7B;
  --iconBackgroundColor: #0C0D11;
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
    "https://www.instagram.com/lucerpy.agencia/",
    "https://linkedin.com/company/lucerpy"
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
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.css"
          integrity="sha384-EdMq+R+YOnsbelo08wPenoTlnxbAyxI11NMIxzugx/qAsbh64KcOkqxYqq6pfvO/"
          crossOrigin="anonymous"
        />
        <style
          id="silktide-consent-manager-overrides"
          dangerouslySetInnerHTML={{ __html: SILKTIDE_THEME_CSS }}
        />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
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

