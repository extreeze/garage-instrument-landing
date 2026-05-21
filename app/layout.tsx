import type { Metadata, Viewport } from "next";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "оборудование для автосервиса",
    "оборудование для мастерской",
    "подъемники для автосервиса",
    "купить подъемник для мастерской",
    "шиномонтажное оборудование",
    "гаражное оборудование",
    "оборудование для СТО",
    "монтаж оборудования для автосервиса",
    "сервисное обслуживание оборудования для мастерской"
  ],
  openGraph: {
    title: siteConfig.title,
    description:
      "Автомобильные подъемники, шиномонтажное оборудование, компрессоры, диагностика и гаражный инструмент с доставкой, монтажом, запуском и сервисным обслуживанием.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.heroImagePath),
        width: 1600,
        height: 900,
        alt: "Профессиональная автомастерская с автомобильным подъемником и промышленным освещением"
      }
    ],
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [absoluteUrl(siteConfig.heroImagePath)]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#151617"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
