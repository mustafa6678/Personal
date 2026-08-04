import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site-config";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Phone, Tablet & Laptop Repair in Preston`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'phone repair Preston',
    'iPhone screen repair Preston',
    'Samsung repair Preston',
    'laptop repair Preston',
    'sell my phone Preston',
    'The Phone Shop Express',
  ],
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Phone, Tablet & Laptop Repair in Preston`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Phone, Tablet & Laptop Repair in Preston`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bricolage.variable} font-sans antialiased text-slate-900`}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
