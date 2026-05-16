"use client";

import { MessageCircle, PhoneCall, Send, Wrench } from "lucide-react";

const mobileActions = [
  { label: "Звонок", href: "#equipment-quiz", icon: PhoneCall, aria: "Запросить обратный звонок" },
  { label: "WhatsApp", href: "#equipment-quiz", icon: MessageCircle, aria: "Запросить консультацию в WhatsApp" },
  { label: "Telegram", href: "#equipment-quiz", icon: Send, aria: "Запросить консультацию в Telegram" },
  { label: "Подбор", href: "#equipment-quiz", icon: Wrench, aria: "Получить подбор оборудования" }
];

export default function StickyMobileCTA() {
  return (
    <nav
      aria-label="Быстрые действия для консультации"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/96 px-2 py-2 shadow-[0_-16px_45px_rgba(0,0,0,0.12)] backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-4 gap-1">
        {mobileActions.map((action) => {
          const Icon = action.icon;

          return (
            <a
              key={action.label}
              href={action.href}
              aria-label={action.aria}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 text-center text-[0.68rem] font-black uppercase tracking-normal text-neutral-900 transition hover:bg-neutral-100"
            >
              <Icon className="h-4 w-4 text-amber-700" aria-hidden="true" />
              <span>{action.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
