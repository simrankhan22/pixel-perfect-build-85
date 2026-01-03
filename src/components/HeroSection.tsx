import profilePhoto from "@/assets/profile-photo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Header */}
        <div 
          ref={heroRef}
          className={`flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image */}
          <div className="relative">
            {/* Gradient background glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-magenta/30 to-purple-mid/50 rounded-full blur-xl opacity-60" />
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-lavender/20 rounded-full blur-md" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-effect bg-gradient-to-br from-primary/20 to-purple-mid/30">
              <img 
                src={profilePhoto} 
                alt="Simran Khan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Cute Arrow - positioned above text */}
          <svg 
            className="absolute left-36 -top-2 w-32 h-20 text-primary hidden md:block animate-bounce-gentle"
            viewBox="0 0 120 80" 
            fill="none"
          >
            {/* Arrow curving from above profile to text */}
            <path 
              d="M10 60 Q 30 70, 50 50 Q 70 30, 90 25 Q 100 22, 110 28" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              fill="none"
              strokeDasharray="5,5"
              className="animate-dash"
            />
            <path 
              d="M102 22 L110 28 L108 38" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            {/* Cute heart at the start */}
            <path 
              d="M8 58 C 8 55, 11 55, 11 57 C 11 55, 14 55, 14 58 C 14 61, 11 63, 11 63 C 11 63, 8 61, 8 58" 
              fill="currentColor"
              className="animate-pulse-slow"
            />
          </svg>
          
          {/* Intro Text */}
          <div className="text-center md:text-left md:ml-8 md:pt-8">
            <p className="text-sm text-muted-foreground mb-2">
              Hello! I Am <span className="text-gradient font-semibold">Simran Khan</span>
            </p>
            <p className="text-muted-foreground text-sm mb-1">A Developer who is</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              passionate about data<br />
              & its impact on <span className="text-gradient underline decoration-primary underline-offset-4">AI/ML...</span>
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
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Hi! My name is Simran Khan
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Currently, I'm doing my Master's in data science at Uppsala<br />
            University, Sweden
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
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
