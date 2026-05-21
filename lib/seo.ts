import { absoluteUrl, siteConfig } from "@/lib/siteConfig";
import { faqs } from "@/lib/siteData";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": absoluteUrl("/#business"),
      name: siteConfig.name,
      url: absoluteUrl("/"),
      image: absoluteUrl(siteConfig.heroImagePath),
      description:
        "Поставщик профессионального оборудования для автосервиса: автомобильные подъемники, шиномонтажное оборудование, компрессоры, диагностика, гаражный инструмент, доставка, монтаж, поддержка запуска и сервисное обслуживание.",
      areaServed: "США",
      makesOffer: [
        "Автомобильные подъемники для автосервисов",
        "Шиномонтажное оборудование",
        "Компрессоры для мастерских",
        "Диагностическое оборудование",
        "Гаражный инструмент и аксессуары",
        "Монтаж оборудования для автосервиса",
        "Сервисное обслуживание оборудования для мастерских"
      ]
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/#service"),
      name: "Подбор, монтаж и обслуживание оборудования для автосервиса",
      provider: {
        "@id": absoluteUrl("/#business")
      },
      serviceType: "Поставка и сервисное обслуживание оборудования для мастерских",
      description:
        "Профессиональное оборудование для автосервиса с доставкой, монтажом, поддержкой запуска и сервисным обслуживанием для мастерских, шиномонтажей, детейлинг-центров и сервисных точек автопарков."
    },
    {
      "@type": "FAQPage",
      "@id": absoluteUrl("/#faq"),
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ]
};
