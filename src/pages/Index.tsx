import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ReadMoreSection from "@/components/ReadMoreSection";
import ToolsSection from "@/components/ToolsSection";
import SpaceVisual from "@/components/SpaceVisual";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ReadMoreSection />
        <ToolsSection />
        <SpaceVisual />
        <FeaturedProjects />
      </main>
      <ContactSection />
    </div>
  );
};

export default Index;
