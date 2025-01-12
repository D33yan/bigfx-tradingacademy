import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { FooterSection } from "@/components/layout/sections/footer";
import { PricingSection } from "@/components/layout/sections/pricing";
import ContactSection from "@/components/layout/sections/contact";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <PricingSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
