'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { FooterSection } from "@/components/layout/sections/footer";
import { PricingSection } from "@/components/layout/sections/pricing";
import ServicesSection from "@/components/layout/sections/services";
import ContactSection from "@/components/layout/sections/contact";
import SkeletonLoader from "@/components/ui/skeleton-loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulate 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <ImpressiveLoader />
        </div>
      ) : (
        <div className="transition-opacity duration-1000 opacity-100">
          <HeroSection id="hero" />
          <AboutSection id="about" />
          <ServicesSection id="services" />
          <PricingSection id="pricing" />
          <ContactSection id="contact" />
          <FooterSection />
        </div>
      )}
    </div>
  );
}

function ImpressiveLoader() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Animated Logo */}
      <div className="relative">
        <Image
          src="/bigfxlogo.jpg"
          alt="Big FX Logo"
          className="w-20 h-20 rounded-full animate-pulse"
        />
      </div>

      {/* Text Animation */}
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold tracking-wide animate-pulse">
          Big FX
        </h1>
        <p className="text-gray-400 text-lg mt-2">Empowering Traders</p>
      </div>
    </div>
  );
}
