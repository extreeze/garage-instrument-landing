import dynamic from "next/dynamic";
import BrandMarquee from "@/components/BrandMarquee";
import EquipmentCategories from "@/components/EquipmentCategories";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import HeroVideo from "@/components/HeroVideo";
import PopularSolutions from "@/components/PopularSolutions";
import ServiceAdvantages from "@/components/ServiceAdvantages";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WorkshopSolutions from "@/components/WorkshopSolutions";
import { jsonLd } from "@/lib/siteData";

const EquipmentQuiz = dynamic(() => import("@/components/EquipmentQuiz"), {
  loading: () => (
    <section className="bg-neutral-950 px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto h-96 max-w-5xl animate-pulse border border-white/12 bg-white/[0.06]" />
    </section>
  )
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroVideo />
        <BrandMarquee />
        <EquipmentCategories />
        <WorkshopSolutions />
        <ServiceAdvantages />
        <PopularSolutions />
        <EquipmentQuiz />
        <FAQ />
        <FinalCTA />
      </main>
      <StickyMobileCTA />
    </>
  );
}
