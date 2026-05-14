import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Award, Trophy, Star, Palette, Music, Camera, Plane, BookOpen, Gamepad2, CookingPot, Mountain, Code, Heart } from "lucide-react";
import { useState, useRef } from "react";

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

const awards = [
  { icon: Award, title: "IEEE Paper Presentation", organization: "MediMatch — ICSCSS 2024", year: "2024" },
  { icon: Star, title: "International Student Ambassador", organization: "Uppsala University", year: "2025" },
  { icon: Trophy, title: "Letter of Commendation", organization: "SAKEC Alumni Association", year: "2024" },
  { icon: Award, title: "Python 3.4.3 Training", organization: "IIT Bombay", year: "2022" },
  { icon: Award, title: "Java & C Training", organization: "IIT Bombay", year: "2022" },
  { icon: Star, title: "Machine Learning Training", organization: "Internshala", year: "2023" },
  { icon: Award, title: "R Programming", organization: "Infosys", year: "2023" },
  { icon: Trophy, title: "Winners — Intra Dance", organization: "SAKEC", year: "2023" },
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
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < rating ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: awardsRef, isVisible: awardsVisible } = useScrollAnimation();
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation();
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <section 
          ref={headerRef}
          className={`px-6 mb-32 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              About: My background
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Hi, I'm Simran Khan — a passionate full-stack developer and AI enthusiast 
              with a love for creating elegant, user-centric digital experiences. With a 
              strong foundation in computer science and years of hands-on experience, I 
              specialize in building scalable web applications and integrating cutting-edge 
              machine learning solutions. I believe in the power of technology to transform 
              ideas into impactful realities.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          className={`px-6 mb-24 transition-all duration-700 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              <span className="metallic-text">My Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <SkillBar name={skill.name} rating={skill.rating} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Honors Section */}
        <section
          ref={awardsRef}
          className={`px-6 mb-24 transition-all duration-700 ${
            awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                <span className="metallic-text">Awards & Honors</span>
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-full border border-border transition-all ${
                    canScrollLeft 
                      ? 'hover:bg-primary/20 hover:border-primary text-foreground' 
                      : 'opacity-30 cursor-not-allowed text-muted-foreground'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-full border border-border transition-all ${
                    canScrollRight 
                      ? 'hover:bg-primary/20 hover:border-primary text-foreground' 
                      : 'opacity-30 cursor-not-allowed text-muted-foreground'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div
              ref={sliderRef}
              onScroll={checkScrollPosition}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="group relative min-w-[300px] flex-shrink-0 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Decorative glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                        <award.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-primary/70 bg-primary/10 px-3 py-1 rounded-full">{award.year}</span>
                    </div>
                    <h3 className="text-foreground font-semibold text-base mb-1.5 group-hover:text-primary transition-colors duration-300">{award.title}</h3>
                    <p className="text-muted-foreground text-sm">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section
          ref={interestsRef}
          className={`px-6 mb-12 transition-all duration-700 ${
            interestsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              <span className="metallic-text">Interests</span>
            </h2>
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
                    <li
                      key={interest.name}
                      className="group flex items-center gap-3 py-2 border-b border-border/40 last:border-b-0 transition-colors duration-300 hover:border-primary/30"
                    >
                      <interest.icon className="w-4 h-4 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{interest.name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default About;
