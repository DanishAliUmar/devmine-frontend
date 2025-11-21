// src/app/page.tsx
// Complete Landing Page for Devmine Clone

import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Features from "@/components/sections/features/Features";
import Process from "@/components/sections/process/Process";
import Stats from "@/components/sections/stats/Stats";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CTA from "@/components/sections/cta/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Features Section */}
      <Features />

      {/* Process Section */}
      <Process />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </main>
  );
}
