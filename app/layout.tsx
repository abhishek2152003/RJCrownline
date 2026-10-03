import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalspiceexports.com"),
  title: {
    default: "Global Spice Exports | Premium Agricultural Commodities",
    template: "%s | Global Spice Exports",
  },
  description: "Leading exporters of premium quality spices, dry fruits, fresh fruits, vegetables, and millets from India to the world.",
  keywords: [
    "export", "spices", "dry fruits", "fresh fruits", "vegetables", 
    "millets", "pulses", "india", "agriculture", "global trade", "B2B exports"
  ],
  authors: [{ name: "Global Spice Exports" }],
  creator: "Global Spice Exports",
  publisher: "Global Spice Exports",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globalspiceexports.com",
    title: "Global Spice Exports | Premium Agricultural Commodities",
    description: "Leading exporters of premium quality spices, dry fruits, fresh fruits, vegetables, and millets from India to the world.",
    siteName: "Global Spice Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Spice Exports | Premium Agricultural Commodities",
    description: "Leading exporters of premium quality spices, dry fruits, fresh fruits, vegetables, and millets from India to the world.",
    creator: "@globalspiceexports",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
