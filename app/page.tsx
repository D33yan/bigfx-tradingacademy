import Image from "next/image";
import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
    </div>
  );
}
