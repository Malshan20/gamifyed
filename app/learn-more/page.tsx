import WhatIsGamifyEd from "@/components/WhatIsGamifyEd";
import HowItWorks from "@/components/HowItWorks";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";


export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-blue-100 bg-opacity-50 bg-[url('/stars-and-controllers.png')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <WhatIsGamifyEd />
        <HowItWorks />
        <Benefits />
        <Testimonials />
      </main>
    </div>
  )
}

