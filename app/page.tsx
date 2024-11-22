// src/app/page.tsx

import { FeaturesSection } from "./components/FeaturesSection";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-navy-900 text-navy-800 dark:text-gold-100">
      <Hero />
      <FeaturesSection />
      <HowItWorks/>
      {/* TODO: Add HowItWorks and TestimonialCarousel components */}
    </main>
  );
}
