import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ReadMoreSection from "@/components/ReadMoreSection";
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
        <ReadMoreSection />
        <ToolsSection />
        <FeaturedProjects />
      </main>
      <ContactSection />
    </div>
  );
};

export default Index;
