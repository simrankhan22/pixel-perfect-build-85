import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Music, Camera, Plane, BookOpen, Gamepad2, CookingPot, Mountain, Code, Heart } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript", "Bash"],
  },
  {
    title: "ML / AI",
    items: ["TensorFlow", "Scikit-learn", "CNNs", "Random Forest", "SVM", "Hyperparameter optimization"],
  },
  {
    title: "Data & Computing",
    items: ["Pandas", "NumPy", "Statistical modeling", "MySQL", "Schema design"],
  },
  {
    title: "Tools",
    items: ["Git / GitHub", "Linux (Ubuntu)", "Jupyter"],
  },
];

const AboutSection = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  return (
    <div className="py-20 relative z-10">
      <section
        id="skills"
        ref={skillsRef}
        className={`px-6 mb-24 scroll-mt-24 transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            <span className="metallic-text">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
              >
                <h3 className="text-sm font-semibold text-foreground mb-3 tracking-wide">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted-foreground border border-border/60 px-2.5 py-1 rounded-md hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutSection;
