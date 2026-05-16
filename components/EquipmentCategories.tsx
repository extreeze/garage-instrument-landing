import {
  Activity,
  Boxes,
  Car,
  CircleGauge,
  Cog,
  Gauge,
  ScanSearch,
  Settings,
  Wrench
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/siteData";

const icons = [Car, Boxes, Activity, Settings, CircleGauge, Gauge, Wrench, ScanSearch, Cog];

export default function EquipmentCategories() {
  return (
    <section id="categories" className="industrial-grid bg-[#f7f5ef] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Категории оборудования"
            title="Оборудование для мастерских под реальные сервисные нагрузки"
            description="Garage Instrument поставляет оборудование для автосервиса под запуск проектов, модернизацию, шиномонтажные точки, обслуживание автопарков и коммерческий ремонт."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={category.title} delay={index * 0.03}>
                <article className="group h-full border border-neutral-200 bg-white p-6 shadow-[0_18px_55px_rgba(20,20,20,0.06)] transition duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-[0_22px_70px_rgba(20,20,20,0.12)]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center bg-neutral-950 text-amber-300 transition group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-950">{category.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{category.description}</p>
                  <a
                    href="#equipment-quiz"
                    className="mt-7 inline-flex text-sm font-black uppercase tracking-[0.16em] text-amber-700 transition hover:text-neutral-950"
                  >
                    Запросить подбор
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
