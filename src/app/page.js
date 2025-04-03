import { AboutusSection, HeroSection, ServicesSection } from "@/components";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-auto">
      <div className="fixed top-0 left-0 w-full h-screen">
        <HeroSection />
      </div>
      <section className="w-full bg-transparent min-h-screen z-30 pointer-events-none"></section>
      <ServicesSection />
      <AboutusSection />
    </div>
  )
}
