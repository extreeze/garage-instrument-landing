"use client";

import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { trustBadges } from "@/lib/siteData";

const poster = "/images/garage-instrument-hero-poster.jpg";
const videoSrc = "/videos/garage-instrument-hero.mp4";

type VideoMode = "poster" | "video";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mode, setMode] = useState<VideoMode>("poster");

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    const videoElement = video;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    if (media.matches || connection?.saveData) {
      setMode("poster");
      videoElement.removeAttribute("src");
      videoElement.load();
      return;
    }

    let disposed = false;
    let isVisible = true;

    const playVideo = () => {
      if (disposed || !isVisible) {
        return;
      }

      const playback = videoElement.play();
      if (playback !== undefined) {
        playback.catch(() => {
          if (!disposed) {
            setMode("poster");
          }
        });
      }
    };

    const revealVideo = () => {
      setMode("video");
      playVideo();
    };

    const handleError = () => {
      setMode("poster");
    };

    videoElement.preload = "auto";
    videoElement.muted = true;
    videoElement.loop = false;
    videoElement.autoplay = true;
    videoElement.playsInline = true;

    videoElement.addEventListener("loadeddata", revealVideo);
    videoElement.addEventListener("canplay", revealVideo);
    videoElement.addEventListener("playing", revealVideo);
    videoElement.addEventListener("error", handleError);

    const intersectionObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              isVisible = entry.isIntersecting;

              if (isVisible) {
                playVideo();
              } else {
                videoElement.pause();
              }
            },
            { root: null, rootMargin: "25% 0px", threshold: 0 }
          )
        : null;

    intersectionObserver?.observe(section);
    videoElement.load();
    playVideo();

    if (videoElement.readyState >= 2) {
      revealVideo();
    }

    return () => {
      disposed = true;
      videoElement.removeEventListener("loadeddata", revealVideo);
      videoElement.removeEventListener("canplay", revealVideo);
      videoElement.removeEventListener("playing", revealVideo);
      videoElement.removeEventListener("error", handleError);
      intersectionObserver?.disconnect();
      videoElement.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-video relative isolate min-h-[100svh] bg-neutral-950 text-white"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(0,0,0,.78), rgba(0,0,0,.28) 55%, rgba(0,0,0,.84)), url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } as CSSProperties}
    >
      <div className="relative min-h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          className={`hero-video__media pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            mode === "poster" ? "opacity-0" : "opacity-100"
          }`}
          src={videoSrc}
          poster={poster}
          preload="auto"
          autoPlay
          muted
          playsInline
          tabIndex={-1}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,5,.78),rgba(3,4,5,.42)_42%,rgba(3,4,5,.8)),linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.78))]" />
        <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-neutral-950/18 backdrop-blur-sm">
          <nav
            aria-label="Основная навигация"
            className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
          >
            <a href="#top" className="flex items-center gap-3" aria-label="Garage Instrument главная">
              <span className="grid h-10 w-10 place-items-center border border-amber-400/50 bg-amber-400 text-sm font-black text-neutral-950">
                GI
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.22em]">Garage Instrument</span>
            </a>
            <div className="hidden items-center gap-7 text-sm font-semibold text-neutral-200 md:flex">
              <a className="transition hover:text-amber-300" href="#categories">
                Оборудование
              </a>
              <a className="transition hover:text-amber-300" href="#solutions">
                Решения
              </a>
              <a className="transition hover:text-amber-300" href="#equipment-quiz">
                Подбор
              </a>
              <a className="transition hover:text-amber-300" href="#faq">
                Вопросы
              </a>
            </div>
            <a
              href="#equipment-quiz"
              className="hidden items-center gap-2 border border-amber-300/70 bg-amber-400 px-4 py-2 text-sm font-bold text-neutral-950 transition hover:bg-amber-300 md:inline-flex"
            >
              Получить подбор
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="hero-video__copy max-w-4xl">
            <p className="mb-5 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-200 backdrop-blur">
              Поставка оборудования инженерного уровня
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
              Оборудование для профессиональных автосервисов
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200 sm:text-xl">
              Автомобильные подъемники, шиномонтажное оборудование, компрессоры, диагностика и гаражный
              инструмент с доставкой, монтажом, поддержкой запуска и сервисным обслуживанием.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#equipment-quiz"
                className="inline-flex items-center justify-center gap-3 bg-amber-400 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-neutral-950 transition hover:bg-amber-300"
              >
                Получить подбор оборудования
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-white/40 hover:bg-white/[0.18]"
              >
                Смотреть категории оборудования
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <ul className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-start gap-3 border border-white/12 bg-white/[0.08] p-4 backdrop-blur">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6 text-neutral-100">{badge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
