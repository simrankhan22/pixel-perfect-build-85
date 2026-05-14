import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import GetInTouch from "@/components/GetInTouch";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const location = useLocation();

  const isInitialMount = useRef(true);

  useEffect(() => {
    // On the very first render, ignore any pre-existing hash so the page
    // always opens at the top instead of jumping to e.g. #get-in-touch.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Strip the hash so a refresh doesn't keep auto-scrolling.
      if (location.hash) {
        window.history.replaceState(null, "", location.pathname + location.search);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      return;
    }

    if (!location.hash) return;
    const id = location.hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        el.classList.remove("section-highlight");
        void el.offsetWidth;
        el.classList.add("section-highlight");
        window.setTimeout(
          () => el.classList.remove("section-highlight"),
          2400
        );
      }, 600);
    });
  }, [location.hash, location.key, location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <FeaturedProjects />
        <ToolsSection />
        <AboutSection />
        <GetInTouch />
      </main>
      <ContactSection />
    </div>
  );
};

export default Index;
