import { ArrowRight, ClipboardCheck, HardHat, PackageCheck, SlidersHorizontal } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    icon: SlidersHorizontal,
    title: "Планирование мастерской",
    text: "Мы подбираем оборудование под планировку, парк автомобилей, список услуг, ограничения по коммуникациям и плановую загрузку."
  },
  {
    icon: PackageCheck,
    title: "Поставка оборудования",
    text: "Подъемники, шиномонтажное оборудование, компрессоры, диагностика, домкраты, прессы, инструмент и аксессуары подбираются как единая рабочая система."
  },
  {
    icon: HardHat,
    title: "Доставка и монтаж",
    text: "Доставка, поддержка монтажа, пусковые проверки и сопровождение запуска помогают снизить простои и риски открытия."
  },
  {
    icon: ClipboardCheck,
    title: "Поддержка обслуживания",
    text: "Гарантийная и постгарантийная поддержка, профилактика и диагностика помогают сохранять производительность ключевого оборудования."
  }
];

export default function WorkshopSolutions() {
  return (
    <section id="solutions" className="dark-industrial-grid bg-neutral-950 px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="lg:sticky lg:top-8 lg:self-start">
          <SectionHeading
            eyebrow="Поддержка запуска мастерской"
            title="Помогаем оснастить мастерскую от плана до первого сервисного поста"
            description="Цель не просто продать гаражное оборудование. Важно собрать систему, которая сможет открыться, работать и масштабироваться с понятной сервисной поддержкой."
            dark
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#equipment-quiz"
              className="inline-flex items-center justify-center gap-3 bg-amber-400 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-neutral-950 transition hover:bg-amber-300"
            >
              Рассчитать оснащение мастерской
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#advantages"
              className="inline-flex items-center justify-center border border-white/16 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Преимущества сервиса
            </a>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.04}>
                <article className="h-full border border-white/12 bg-white/[0.06] p-6 backdrop-blur transition hover:border-amber-300/50 hover:bg-white/[0.09]">
                  <span className="grid h-12 w-12 place-items-center border border-amber-300/35 bg-amber-300/10 text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
