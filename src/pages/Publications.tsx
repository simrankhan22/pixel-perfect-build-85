import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import PublicationsSection from "@/components/PublicationsSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="pt-32 pb-12 relative z-10">
        <section
          ref={ref}
          className={`px-6 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Publications
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Peer-reviewed research and technical writing across AI, machine
              learning, and applied healthcare systems.
            </p>
          </div>
        </section>

        <PublicationsSection />
      </main>

      <ContactSection />
    </div>
  );
};

export default Publications;
