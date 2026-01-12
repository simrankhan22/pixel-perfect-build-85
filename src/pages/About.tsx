import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Award, Trophy, Star } from "lucide-react";
import { useState, useRef } from "react";

const skills = [
  { name: "React / Next.js", rating: 5 },
  { name: "TypeScript", rating: 5 },
  { name: "Python", rating: 4 },
  { name: "Node.js", rating: 4 },
  { name: "Machine Learning", rating: 4 },
  { name: "UI/UX Design", rating: 4 },
  { name: "AWS / Cloud", rating: 3 },
  { name: "Docker / Kubernetes", rating: 3 },
];

const awards = [
  { icon: Trophy, title: "Best Innovation Award", organization: "Tech Summit 2024", year: "2024" },
  { icon: Award, title: "Dean's List", organization: "University Excellence", year: "2023" },
  { icon: Star, title: "Hackathon Winner", organization: "Global Code Challenge", year: "2023" },
  { icon: Trophy, title: "Research Excellence", organization: "AI Research Conference", year: "2022" },
  { icon: Award, title: "Outstanding Student", organization: "Computer Science Dept", year: "2022" },
  { icon: Star, title: "Open Source Contributor", organization: "GitHub Community", year: "2021" },
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
              Welcome to my<br />about section!
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
                  className="metallic-card p-6 rounded-xl min-w-[280px] flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <award.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-medium mb-1">{award.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{award.organization}</p>
                  <span className="text-primary text-sm font-medium">{award.year}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Outside of technology, I have a deep appreciation for <span className="text-primary">music</span> — 
                  whether it's playing guitar, discovering new genres, or attending live concerts. 
                  I find that music fuels my creativity and helps me approach problems from 
                  different angles. <span className="text-primary">Photography</span> is another passion of mine, 
                  as I love capturing moments and exploring the world through a lens. The art of 
                  composition and lighting in photography often inspires my approach to UI design.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm also an avid <span className="text-primary">traveler</span>, always seeking new cultures, 
                  cuisines, and experiences that broaden my perspective. Each journey teaches me 
                  something new about adaptability and problem-solving. When I'm home, you'll 
                  find me immersed in <span className="text-primary">books</span> — from technical literature 
                  and sci-fi novels to philosophy and psychology. I believe continuous learning 
                  is the key to personal and professional growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default About;
