import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Palette, Brain, Rocket, Award, Trophy, Star, Heart, Music, Camera, Plane, Book } from "lucide-react";

const skills = [
  { icon: Code, name: "Full Stack Development", description: "React, Node.js, TypeScript, Python" },
  { icon: Brain, name: "Machine Learning", description: "TensorFlow, PyTorch, NLP, Computer Vision" },
  { icon: Palette, name: "UI/UX Design", description: "Figma, Adobe XD, Design Systems" },
  { icon: Rocket, name: "Cloud & DevOps", description: "AWS, Docker, Kubernetes, CI/CD" },
];

const awards = [
  { icon: Trophy, title: "Best Innovation Award", organization: "Tech Summit 2024", year: "2024" },
  { icon: Award, title: "Dean's List", organization: "University Excellence", year: "2023" },
  { icon: Star, title: "Hackathon Winner", organization: "Global Code Challenge", year: "2023" },
  { icon: Trophy, title: "Research Excellence", organization: "AI Research Conference", year: "2022" },
];

const interests = [
  { icon: Music, name: "Music", description: "Playing guitar and exploring new genres" },
  { icon: Camera, name: "Photography", description: "Capturing moments and landscapes" },
  { icon: Plane, name: "Travel", description: "Exploring cultures and cuisines" },
  { icon: Book, name: "Reading", description: "Tech blogs, sci-fi, and philosophy" },
];

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: awardsRef, isVisible: awardsVisible } = useScrollAnimation();
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <section
          ref={headerRef}
          className={`px-6 mb-24 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Soft gradient background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto max-w-4xl relative">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              About Me
            </h1>
            <div className="metallic-card p-8 rounded-2xl">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hi, I'm <span className="text-primary font-semibold">Simran Khan</span> — a passionate 
                full-stack developer and AI enthusiast with a love for creating elegant, 
                user-centric digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a strong foundation in computer science and years of hands-on experience, 
                I specialize in building scalable web applications and integrating cutting-edge 
                machine learning solutions. I believe in the power of technology to transform 
                ideas into impactful realities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blogs and community events. 
                I'm always eager to collaborate on innovative projects that push boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          className={`px-6 mb-24 transition-all duration-700 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              <span className="metallic-text">My Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="metallic-card p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-foreground font-medium mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
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
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              <span className="metallic-text">Awards & Honors</span>
            </h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={award.title}
                  className="metallic-card p-5 rounded-xl flex items-center gap-5 transition-all duration-300 hover:translate-x-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <award.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground font-medium">{award.title}</h3>
                    <p className="text-muted-foreground text-sm">{award.organization}</p>
                  </div>
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              <span className="metallic-text">Interests</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={interest.name}
                  className="metallic-card p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <interest.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-foreground font-medium mb-2">{interest.name}</h3>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
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

export default About;
