// Profile photo removed - add your photo later
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative">
        {/* Hero Header */}
        <div 
          ref={heroRef}
          className={`flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image */}
          <div className={`relative group ${heroVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          {/* Gradient background glow - placeholder for profile photo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-magenta/30 to-purple-mid/50 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-glow-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-lavender/20 rounded-full blur-md" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-effect bg-gradient-to-br from-primary/20 to-purple-mid/30 hover-lift flex items-center justify-center">
              {/* Add your profile photo here */}
              <span className="text-muted-foreground text-xs text-center px-2">Add Photo</span>
            </div>
          </div>
          
          {/* Clean curved arrow pointing from profile to text */}
          <svg 
            className="absolute left-[140px] top-4 w-24 h-16 text-primary hidden md:block"
            viewBox="0 0 100 60" 
            fill="none"
          >
            {/* Smooth curved arrow */}
            <path 
              d="M5 45 C 20 45, 30 20, 60 15 C 75 12, 85 15, 92 18" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              fill="none"
            />
            {/* Arrow head */}
            <path 
              d="M85 12 L93 18 L87 25" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          
          {/* Intro Text */}
          <div className={`text-center md:text-left md:ml-8 md:pt-8 ${heroVisible ? 'stagger-children' : ''}`}>
            <p className="text-sm text-muted-foreground mb-2">
              Hello! I Am <span className="text-gradient font-semibold shimmer-text">Simran Khan</span>
            </p>
            <p className="text-muted-foreground text-sm mb-1">A Developer who is</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              <span className="text-gradient-highlight">passionate</span> about data<br />
              & its impact on <span className="text-gradient underline decoration-primary underline-offset-4 hover:decoration-2 transition-all">AI/ML...</span>
            </h1>
          </div>
        </div>

        {/* About Section */}
        <div 
          ref={aboutRef}
          className={`mb-16 transition-all duration-700 delay-200 ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-2xl md:text-3xl font-semibold text-foreground mb-2 ${aboutVisible ? 'animate-fade-in' : ''}`}>
            Hi! My name is <span className="text-gradient-highlight">Simran Khan</span>
          </h2>
          <p className={`text-muted-foreground text-sm mb-6 ${aboutVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            Currently, I'm doing my Master's in data science at Uppsala<br />
            University, Sweden
          </p>
          <p className={`text-muted-foreground text-sm leading-relaxed max-w-2xl ${aboutVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            A passionate AI and Machine Learning enthusiast dedicated to harnessing
            the power of technology to solve real-world problems. With a strong
            foundation in Computer engineering, I thrive on exploring the latest
            advancements in Artificial Intelligence and Machine Learning, and I am
            committed to continuous learning in this dynamic field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
