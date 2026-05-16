import { ArrowRight, PhoneCall } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-neutral-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border border-white/12 bg-white/[0.06] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Начните с точного подбора</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Получите профессиональное оборудование для автосервиса, подобранное под план вашей мастерской.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
            Отправьте квиз и получите практичный список оборудования для мастерской, шиномонтажа,
            модернизации сервисного центра, точки обслуживания автопарка или полного оснащения гаража.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="#equipment-quiz"
            className="inline-flex items-center justify-center gap-3 bg-amber-400 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-neutral-950 transition hover:bg-amber-300"
          >
            Спросить специалиста
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#equipment-quiz"
            className="inline-flex items-center justify-center gap-3 border border-white/16 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
            Запросить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
