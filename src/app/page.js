// import { AboutusSection, Footer, HeroSection, QnaSection, ServicesSection } from "@/components";


// export default function Home() {
//   return (
//     <>
//       <HeroSection />
//       <ServicesSection />
//       <AboutusSection />
//       <QnaSection />
//       <Footer />
//     </>
//   )
// }

import {
  AboutusSection,
  Footer,
  HeroSection,
  QnaSection,
  ServicesSection,
} from "@/components";

export default function Home() {
  return (
    <>
      {/* Fixed Hero in background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <HeroSection />
      </div>

      {/* Spacer to take up Hero's space in scroll */}
      <div className="lg:h-screen h-[70vh]" />

      {/* Scrollable content */}
      <div className="relative z-10">
        <ServicesSection />
        <AboutusSection />
        <QnaSection />
        <Footer />
      </div>
    </>
  );
}


