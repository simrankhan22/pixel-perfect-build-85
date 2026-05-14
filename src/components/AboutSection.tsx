import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Music, Camera, Plane, BookOpen, Gamepad2, CookingPot, Mountain, Code, Heart } from "lucide-react";

const skills = [
  { name: "Python (Pandas, NumPy)", rating: 5 },
  { name: "Machine Learning & Deep Learning", rating: 5 },
  { name: "MySQL & Databases", rating: 4 },
  { name: "Neural Networks", rating: 4 },
  { name: "Data Engineering", rating: 4 },
  { name: "HTML5 / CSS3 / JavaScript", rating: 4 },
  { name: "Git / GitHub & Linux", rating: 4 },
  { name: "LaTeX / Overleaf", rating: 3 },
];

const SkillBar = ({ name, rating }: { name: string; rating: number }) => {
  const maxRating = 5;
  const percentage = (rating / maxRating) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground text-sm font-medium">{name}</span>
        <div className="flex gap-1">
          {[...Array(maxRating)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i < rating ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

const AboutSection = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation();

  return (
    <div className="py-20 relative z-10">
      <section ref={skillsRef} className={`px-6 mb-24 transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8"><span className="metallic-text">My Skills</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {skills.map((skill, index) => (
              <div key={skill.name} style={{ transitionDelay: `${index * 50}ms` }}>
                <SkillBar name={skill.name} rating={skill.rating} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={interestsRef} className={`px-6 transition-all duration-700 ${interestsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8"><span className="metallic-text">Interests</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              [
                { name: "Painting", icon: Palette },
                { name: "Dancing", icon: Heart },
                { name: "Vibecode", icon: Code },
                { name: "Music", icon: Music },
                { name: "Photography", icon: Camera },
              ],
              [
                { name: "Travel", icon: Plane },
                { name: "Reading", icon: BookOpen },
                { name: "Gaming", icon: Gamepad2 },
                { name: "Cooking", icon: CookingPot },
                { name: "Hiking", icon: Mountain },
              ],
            ].map((column, colIndex) => (
              <ul key={colIndex} className="space-y-3">
                {column.map((interest) => (
                  <li key={interest.name} className="group flex items-center gap-3 py-2 border-b border-border/40 last:border-b-0 transition-colors duration-300 hover:border-primary/30">
                    <interest.icon className="w-4 h-4 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{interest.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
