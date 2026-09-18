import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { CustomCursor } from "@/components/custom-cursor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://revplusmultisolutionsllc.com"),
  title: { default: "Revplus Multisolutions LLC | BPO & IT Solutions", template: "%s | Revplus" },
  description:
    "Revplus Multisolutions LLC provides business process outsourcing and practical technology solutions for growing U.S. businesses.",
  keywords: ["BPO services", "IT solutions", "software development", "outsourcing", "Houston technology services"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Revplus Multisolutions LLC",
    title: "Revplus Multisolutions LLC | BPO & IT Solutions",
    description: "Better operations. Smarter technology. One accountable partner.",
    images: [{ url: `${basePath}/logo.png`, width: 1024, height: 1024, alt: "Revplus Multisolutions LLC logo" }],
  },
  twitter: { card: "summary", title: "Revplus Multisolutions LLC", description: "BPO and IT solutions for modern business." },
  icons: { icon: `${basePath}/favicon.svg`, apple: `${basePath}/logo.png` },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Revplus Multisolutions LLC",
  url: "https://revplusmultisolutionsllc.com",
  telephone: ["+1-832-942-9484", "+1-832-942-9040"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4065 S Braeswood Blvd",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77025",
    addressCountry: "US",
  },
  areaServed: "US",
  serviceType: ["Business Process Outsourcing", "IT Solutions", "Software Development"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${space.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <CustomCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
