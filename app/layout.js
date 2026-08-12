import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/originkit/footer-02";

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
    "https://instagram.com/lucerpy",
    "https://linkedin.com/company/lucerpy"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "lucerpy@lucerpy.com.br",
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
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

