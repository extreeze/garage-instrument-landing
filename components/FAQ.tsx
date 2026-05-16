import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/lib/siteData";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f7f5ef] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Вопросы"
            title="Вопросы владельцев мастерских перед покупкой оборудования"
            description="Понятные ответы по планированию подъемников, шиномонтажного оборудования, диагностики, монтажа и сервисного обслуживания."
            align="center"
          />
        </Reveal>
        <div className="mt-12 divide-y divide-neutral-200 border border-neutral-200 bg-white">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.03}>
              <details className="group p-6 open:bg-neutral-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-neutral-950">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-neutral-300 text-neutral-600 transition group-open:rotate-45 group-open:border-amber-500 group-open:text-amber-700">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
