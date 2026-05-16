"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type QuizStep = {
  id: string;
  question: string;
  options: string[];
};

const quizSteps: QuizStep[] = [
  {
    id: "workshopType",
    question: "Какой тип мастерской вы оснащаете?",
    options: [
      "Новый автосервис",
      "Модернизация действующего сервисного центра",
      "Шиномонтаж",
      "Детейлинг / кузовной ремонт",
      "Обслуживание автопарка",
      "Пока не уверен"
    ]
  },
  {
    id: "equipmentNeed",
    question: "Какое оборудование вам нужно?",
    options: [
      "Автомобильные подъемники",
      "Шиномонтажное оборудование",
      "Компрессоры",
      "Диагностическое оборудование",
      "Полное оснащение мастерской",
      "Нужна рекомендация специалиста"
    ]
  },
  {
    id: "vehicleType",
    question: "Какие автомобили вы будете обслуживать?",
    options: [
      "Легковые автомобили",
      "SUV и легкий коммерческий транспорт",
      "Грузовые автомобили",
      "Смешанный транспорт",
      "Пока не уверен"
    ]
  },
  {
    id: "budget",
    question: "Какой у вас ориентировочный бюджет?",
    options: [
      "Базовое оснащение",
      "Профессиональное оснащение среднего уровня",
      "Премиальное оборудование",
      "Нужен расчет"
    ]
  },
  {
    id: "support",
    question: "Нужны ли доставка, монтаж и поддержка запуска?",
    options: ["Да, полная поддержка", "Только доставка", "Только монтаж", "Сначала консультация"]
  }
];

type ContactFields = {
  name: string;
  phone: string;
  messenger: string;
  comment: string;
};

const initialContact: ContactFields = {
  name: "",
  phone: "",
  messenger: "WhatsApp",
  comment: ""
};

export default function EquipmentQuiz() {
  const reduceMotion = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<ContactFields>(initialContact);
  const [submitted, setSubmitted] = useState(false);

  const isContactStep = stepIndex === quizSteps.length;
  const currentStep = quizSteps[stepIndex];
  const totalSteps = quizSteps.length + 1;
  const progress = submitted ? 100 : Math.round(((stepIndex + 1) / totalSteps) * 100);

  const summary = useMemo(
    () =>
      quizSteps
        .map((step) => answers[step.id])
        .filter(Boolean)
        .join(" / "),
    [answers]
  );

  const canMoveNext = isContactStep ? contact.name.trim() && contact.phone.trim() : answers[currentStep.id];

  const selectOption = (stepId: string, option: string) => {
    setAnswers((previous) => ({ ...previous, [stepId]: option }));
  };

  const nextStep = () => {
    if (!canMoveNext) {
      return;
    }

    setStepIndex((current) => Math.min(current + 1, quizSteps.length));
  };

  const previousStep = () => {
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const submitQuiz = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contact.name.trim() || !contact.phone.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="equipment-quiz" className="dark-industrial-grid bg-neutral-950 px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Квиз по подбору оборудования"
            title="Получите профессиональный подбор оборудования для мастерской"
            description="Ответьте на несколько вопросов и отправьте заявку на консультацию. Сценарий рассчитан на B2B-планирование мастерской, а не на обычную контактную форму."
            align="center"
            dark
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mx-auto mt-14 max-w-5xl border border-white/12 bg-white/[0.06] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6 lg:p-8">
            {submitted ? (
              <div className="grid min-h-96 place-items-center text-center">
                <div className="max-w-2xl">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-amber-300" aria-hidden="true" />
                  <h2 className="mt-8 text-3xl font-semibold text-white">
                    Ваша заявка готова. Наш специалист свяжется с вами и подготовит подбор
                    оборудования для мастерской.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-neutral-300">
                    Итоги подбора: {summary || "Консультация по оборудованию для мастерской"}.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
                    <span>
                      Шаг {stepIndex + 1} из {totalSteps}
                    </span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-white/10" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                    <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {!isContactStep ? (
                    <motion.div
                      key={currentStep.id}
                      initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">{currentStep.question}</h3>
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {currentStep.options.map((option) => {
                          const active = answers[currentStep.id] === option;

                          return (
                            <button
                              key={option}
                              type="button"
                              aria-pressed={active}
                              onClick={() => selectOption(currentStep.id, option)}
                              className={`min-h-16 border p-4 text-left text-sm font-semibold leading-6 transition ${
                                active
                                  ? "border-amber-300 bg-amber-400 text-neutral-950"
                                  : "border-white/12 bg-white/[0.05] text-neutral-100 hover:border-amber-300/60 hover:bg-white/[0.09]"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact"
                      onSubmit={submitQuiz}
                      initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">Как нашему специалисту связаться с вами?</h3>
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
                            Имя
                          </span>
                          <input
                            required
                            value={contact.name}
                            onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                            className="w-full border border-white/14 bg-white px-4 py-4 text-neutral-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40"
                            autoComplete="name"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
                            Телефон
                          </span>
                          <input
                            required
                            type="tel"
                            value={contact.phone}
                            onChange={(event) => setContact((current) => ({ ...current, phone: event.target.value }))}
                            className="w-full border border-white/14 bg-white px-4 py-4 text-neutral-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40"
                            autoComplete="tel"
                            inputMode="tel"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
                            Предпочтительный мессенджер
                          </span>
                          <select
                            value={contact.messenger}
                            onChange={(event) => setContact((current) => ({ ...current, messenger: event.target.value }))}
                            className="w-full border border-white/14 bg-white px-4 py-4 text-neutral-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40"
                          >
                            <option>WhatsApp</option>
                            <option>Telegram</option>
                            <option>Звонок</option>
                            <option>Электронная почта</option>
                          </select>
                        </label>
                        <label className="block sm:row-span-2">
                          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
                            Комментарий
                          </span>
                          <textarea
                            value={contact.comment}
                            onChange={(event) => setContact((current) => ({ ...current, comment: event.target.value }))}
                            className="min-h-36 w-full resize-none border border-white/14 bg-white px-4 py-4 text-neutral-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40"
                            placeholder="Размер мастерской, город, дата запуска или предпочтения по брендам оборудования"
                          />
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-amber-400 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-neutral-950 transition hover:bg-amber-300 sm:w-auto"
                      >
                        Запросить консультацию
                        <Send className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
                <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/12 pt-6">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={stepIndex === 0}
                    className="inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-white/35 disabled:pointer-events-none disabled:opacity-35"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Назад
                  </button>
                  {!isContactStep ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canMoveNext}
                      className="inline-flex items-center gap-2 bg-amber-400 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-neutral-950 transition hover:bg-amber-300 disabled:pointer-events-none disabled:opacity-45"
                    >
                      Далее
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
