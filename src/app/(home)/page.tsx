import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ProgramsSection from "@/components/home/programs-section";
import HighLightSection from "@/components/home/highlight-section";
import ApplySection from "@/components/home/apply-section";

export default async function Home() {
  return (
    <main className="flex min-h-full min-w-full flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <HighLightSection />
      <ApplySection />
    </main>
  );
}
