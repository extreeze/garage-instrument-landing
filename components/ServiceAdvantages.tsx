import { BadgeCheck, Clock3, LineChart, ShieldCheck, Truck, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const advantages = [
  {
    icon: BadgeCheck,
    title: "Профессиональный подбор",
    text: "Оборудование подбирается под размеры постов, массу автомобилей, набор услуг и ожидаемую нагрузку, а не продается как отдельные позиции каталога."
  },
  {
    icon: Truck,
    title: "Поддержка доставки",
    text: "Мы координируем доставку так, чтобы крупное оборудование прибыло в правильной последовательности для монтажа и запуска."
  },
  {
    icon: Wrench,
    title: "Помощь с монтажом",
    text: "Рекомендации по установке, пусковые проверки и инструкции для операторов помогают команде начать работу с меньшими задержками."
  },
  {
    icon: ShieldCheck,
    title: "Гарантийная поддержка",
    text: "Гарантийные и постгарантийные процессы учитываются при подборе, чтобы у ключевого оборудования был понятный путь поддержки."
  },
  {
    icon: Clock3,
    title: "Сервисное обслуживание",
    text: "Профилактика и диагностика помогают подъемникам, компрессорам, шиномонтажным станкам и инструменту работать в реальных условиях сервиса."
  },
  {
    icon: LineChart,
    title: "Расчет бюджета",
    text: "Мы сравниваем базовые, профессиональные и премиальные комплектации, а затем расставляем приоритеты с учетом окупаемости и пропускной способности."
  }
];

export default function ServiceAdvantages() {
  return (
    <section id="advantages" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Преимущества сервисного центра"
            title="Поставка оборудования с технической поддержкой"
            description="Мастерской нужны надежное оборудование, логика монтажа и поддержка после запуска. Garage Instrument связывает эти решения уже с первой консультации."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <Reveal key={advantage.title} delay={index * 0.03}>
                <article className="h-full bg-white p-7 transition hover:bg-neutral-50">
                  <Icon className="h-7 w-7 text-amber-700" aria-hidden="true" />
                  <h3 className="mt-7 text-xl font-semibold text-neutral-950">{advantage.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{advantage.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
