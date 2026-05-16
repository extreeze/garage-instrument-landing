import { ArrowRight, Building2, CarFront, Gauge, Warehouse } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  {
    icon: Building2,
    title: "Новый автосервис",
    description:
      "Базовое оборудование для открытия профессиональной мастерской: подъемники, компрессор, диагностика и хранение инструмента.",
    items: ["Двухстоечные подъемники", "Компрессорная система", "Диагностические приборы", "Поддержка запуска"]
  },
  {
    icon: Gauge,
    title: "Оснащение шиномонтажа",
    description:
      "Комплект шиномонтажного оборудования для быстрой сезонной работы, точной балансировки и организованной обработки колес.",
    items: ["Шиномонтажные станки", "Балансировочные станки", "Домкраты и аксессуары", "Пневмоинструмент"]
  },
  {
    icon: CarFront,
    title: "Модернизация подъемного поста",
    description:
      "Автомобильные подъемники для автосервисов, которым нужна большая грузоподъемность, более безопасный подъем или специализированные посты.",
    items: ["Двухстоечные подъемники", "Четырехстоечные подъемники", "Ножничные подъемники", "Планирование монтажа"]
  },
  {
    icon: Warehouse,
    title: "Сервисная точка автопарка",
    description:
      "Оборудование для обслуживания коммерческого автопарка, смешанного транспорта, инспекций и повторяющихся сервисных циклов.",
    items: ["Усиленные подъемники", "Прессы и стойки", "Компрессоры", "Сервисное обслуживание"]
  }
];

export default function PopularSolutions() {
  return (
    <section className="bg-[#f7f5ef] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Популярные решения"
            title="Готовые к расчету комплекты оборудования для разных форматов мастерских"
            description="Начните с проверенного решения и уточните список оборудования под профиль автомобилей, план помещения, ограничения по коммуникациям, дату запуска и бюджет."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <Reveal key={solution.title} delay={index * 0.04}>
                <article className="flex h-full flex-col border border-neutral-200 bg-white p-6 shadow-[0_18px_55px_rgba(20,20,20,0.06)] transition hover:-translate-y-1 hover:border-neutral-950">
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="h-9 w-9 text-neutral-950" aria-hidden="true" />
                    <span className="bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-amber-800">
                      Решение
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-neutral-950 lg:h-14">{solution.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 lg:h-36">{solution.description}</p>
                  <ul className="mt-6 space-y-3 text-sm font-semibold text-neutral-800 lg:h-36">
                    {solution.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#equipment-quiz"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-amber-700 transition hover:text-neutral-950"
                  >
                    Запросить консультацию
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
