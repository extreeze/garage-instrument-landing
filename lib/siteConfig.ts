const fallbackUrl = "https://garage-instrument.com";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (rawSiteUrl || fallbackUrl).replace(/\/+$/, "");

export const siteConfig = {
  name: "Garage Instrument",
  url: siteUrl,
  locale: "ru_RU",
  title: "Garage Instrument | Профессиональное оборудование для автосервиса",
  description:
    "Оборудование для автосервиса и мастерских: автомобильные подъемники, шиномонтажное оборудование, компрессоры, диагностика, гаражный инструмент, доставка, монтаж, запуск и сервисное обслуживание.",
  shortDescription:
    "Профессиональное оборудование для автосервиса с доставкой, монтажом, запуском и сервисным обслуживанием.",
  heroImagePath: "/images/garage-instrument-hero-poster.jpg"
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
