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
  metadataBase: new URL("https://rjcrownline.com"),

  title: {
    default: "RJCrownLine | Agricultural & Food Commodity Exporter from India",
    template: "%s | RJCrownLine",
  },

  description:
    "RJCrownLine is an India-based exporter and supplier of premium spices, dry fruits, fresh fruits, vegetables, pulses, and millets for global B2B markets.",

  keywords: [
    "RJCrownLine",
    "RJCrownLine exports",
    "agricultural commodity exporter",
    "agricultural exporter India",
    "food commodity exporter India",
    "agricultural products exporter",
    "spice exporter India",
    "spices exporter",
    "dry fruits exporter India",
    "fresh fruits exporter India",
    "vegetable exporter India",
    "millet exporter India",
    "pulses exporter India",
    "Indian food exporter",
    "Indian agricultural products",
    "B2B food exports",
    "India global exports",
    "agricultural commodities",
    "food ingredients supplier",
    "bulk food supplier India",
  ],

  authors: [
    {
      name: "RJCrownLine",
      url: "https://rjcrownline.com",
    },
  ],

  creator: "RJCrownLine",
  publisher: "RJCrownLine",

  alternates: {
    canonical: "https://rjcrownline.com",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rjcrownline.com",
    siteName: "RJCrownLine",

    title: "RJCrownLine | Agricultural & Food Commodity Exporter from India",

    description:
      "Exporting premium spices, dry fruits, fresh fruits, vegetables, pulses, and millets from India to global B2B markets.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RJCrownLine - Agricultural and Food Commodity Exporter from India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "RJCrownLine | Agricultural & Food Commodity Exporter from India",

    description:
      "Premium spices, dry fruits, fresh fruits, vegetables, pulses, and millets exported from India to global B2B markets.",

    images: ["/images/og-image.jpg"],

    creator: "@rjcrownline",
  },

  category: "Agriculture & Food Export",
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
