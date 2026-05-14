import profilePhoto from "@/assets/profile-photo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
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
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-effect bg-gradient-to-br from-primary/20 to-purple-mid/30 hover-lift">
              <img src={profilePhoto} alt="Simran Khan" className="w-full h-full object-cover" />
            </div>
          </div>
          
          
          {/* Intro Text */}
          <div className={`relative text-center md:text-left md:ml-8 md:pt-8 ${heroVisible ? 'stagger-children' : ''}`}>
            {/* Doodle arrow connecting greeting to profile photo (desktop only) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 180 100"
              preserveAspectRatio="xMidYMid meet"
              className="hidden md:block absolute pointer-events-none opacity-85 text-primary
                         md:-left-32 md:-top-3 md:w-32 md:h-16
                         lg:-left-40 lg:-top-4 lg:w-40 lg:h-20
                         xl:-left-48 xl:-top-5 xl:w-48 xl:h-24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M170 12 C 130 2, 75 8, 50 38 C 38 52, 32 70, 38 86"
                strokeDasharray="4 5"
                vectorEffect="non-scaling-stroke"
                className={heroVisible ? 'animate-fade-in' : ''}
                style={{ animationDelay: '0.6s' }}
              />
              <path
                d="M38 86 L 26 78 M38 86 L 48 74"
                vectorEffect="non-scaling-stroke"
                className={heroVisible ? 'animate-fade-in' : ''}
                style={{ animationDelay: '0.9s' }}
              />
            </svg>
            <p className="text-sm text-muted-foreground mb-2">
              Hello! I Am <span className="text-gradient font-semibold shimmer-text">Simran Khan</span>
            </p>
            <p className="text-muted-foreground text-sm mb-1">A Developer who is</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              passionate about data<br />
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
            Hi! My name is Simran Khan
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
