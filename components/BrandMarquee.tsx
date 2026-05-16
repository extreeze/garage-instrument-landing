import { brands } from "@/lib/siteData";

export default function BrandMarquee() {
  const repeated = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      aria-labelledby="brand-marquee-title"
      className="brand-marquee overflow-hidden border-y border-neutral-200 bg-neutral-100 py-5"
    >
      <h2 id="brand-marquee-title" className="sr-only">
        Бренды оборудования
      </h2>
      <div className="brand-marquee-track flex w-max items-center" aria-live="off">
        {repeated.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="mx-3 flex h-12 min-w-40 items-center justify-center border border-neutral-300 bg-white/70 px-8 text-sm font-black uppercase tracking-[0.18em] text-neutral-500 grayscale transition hover:border-neutral-800 hover:text-neutral-950 sm:min-w-52"
            aria-hidden={index >= brands.length}
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
