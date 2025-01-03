import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { FooterSection } from "@/components/layout/sections/footer";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <FooterSection/>
    </div>
  );
}
