import type { Metadata, Viewport } from "next";
import { jsonLd, site } from "@/lib/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/brand/mark.svg" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Stalwyn Workforce | UK Staffing & Recruitment",
    description: site.shortDescription,
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    images: [
      {
        url: "/images/warehouse.webp",
        alt: "Warehouse operative on a distribution floor",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1d2c26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
