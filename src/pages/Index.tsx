import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import FeaturedProjects from "@/components/FeaturedProjects";

import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <FeaturedProjects />
        <ToolsSection />
        <AboutSection />
        
      </main>
      <ContactSection />
    </div>
  );
};

export default Index;
