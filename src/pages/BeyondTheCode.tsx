import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Music, Camera, Plane, BookOpen, Gamepad2, CookingPot, Mountain, Code, Heart } from "lucide-react";

const interests = [
  { name: "Painting", icon: Palette },
  { name: "Dancing", icon: Heart },
  { name: "Vibecode", icon: Code },
  { name: "Music", icon: Music },
  { name: "Photography", icon: Camera },
  { name: "Travel", icon: Plane },
  { name: "Reading", icon: BookOpen },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Cooking", icon: CookingPot },
  { name: "Hiking", icon: Mountain },
];

const BeyondTheCode = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="pt-32 pb-12 relative z-10">
        <section
          ref={ref}
          className={`px-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              <span className="metallic-text">Beyond the Code</span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
              When I'm not deep in datasets or shipping models, you'll find me
              chasing creative outlets, exploring new places, and collecting
              hobbies that keep me curious. Here are a few things that make me,
              me.
            </p>
          </div>
        </section>

        <section
          ref={gridRef}
          className={`px-6 transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.name}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-0.5"
                >
                  <interest.icon className="w-7 h-7 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {interest.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default BeyondTheCode;
