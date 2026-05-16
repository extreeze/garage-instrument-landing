import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://garage-instrument.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Garage Instrument | Профессиональное оборудование для автосервиса",
  description:
    "Оборудование для автосервиса и мастерских: автомобильные подъемники, шиномонтажное оборудование, компрессоры, диагностика, гаражный инструмент, доставка, монтаж, запуск и сервисное обслуживание.",
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
    title: "Garage Instrument | Профессиональное оборудование для автосервиса",
    description:
      "Автомобильные подъемники, шиномонтажное оборудование, компрессоры, диагностика и гаражный инструмент с доставкой, монтажом, запуском и сервисным обслуживанием.",
    url: siteUrl,
    siteName: "Garage Instrument",
    images: [
      {
        url: "/images/garage-instrument-hero-poster.jpg",
        width: 1600,
        height: 900,
        alt: "Профессиональная автомастерская с автомобильным подъемником и промышленным освещением"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Instrument | Профессиональное оборудование для автосервиса",
    description:
      "Профессиональное оборудование для автосервиса с доставкой, монтажом, запуском и сервисным обслуживанием.",
    images: ["/images/garage-instrument-hero-poster.jpg"]
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
