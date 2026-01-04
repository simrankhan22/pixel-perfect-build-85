import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    title: "IEEE paper",
    description: "Published an IEEE research paper showcasing hands-on application of data analysis and computational techniques.",
    buttonText: "LEARN MORE",
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <defs>
          <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270, 70%, 60%)" />
            <stop offset="100%" stopColor="hsl(270, 80%, 35%)" />
          </linearGradient>
          <linearGradient id="ribbon2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280, 80%, 50%)" />
            <stop offset="100%" stopColor="hsl(270, 70%, 40%)" />
          </linearGradient>
        </defs>
        <path d="M25 15 L55 15 L55 65 L40 55 L25 65 Z" fill="url(#ribbon1)" />
        <path d="M30 15 L50 15 L50 60 L40 52 L30 60 Z" fill="url(#ribbon2)" opacity="0.7" />
        <polygon points="40,20 43,28 52,28 45,33 48,42 40,36 32,42 35,33 28,28 37,28" fill="hsl(45, 90%, 60%)" />
      </svg>
    ),
  },
  {
    title: "Interview uu",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    buttonText: "LEARN MORE",
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <defs>
          <radialGradient id="bulbGlow" cx="50%" cy="30%">
            <stop offset="0%" stopColor="hsl(45, 100%, 85%)" />
            <stop offset="60%" stopColor="hsl(40, 100%, 65%)" />
            <stop offset="100%" stopColor="hsl(35, 90%, 50%)" />
          </radialGradient>
          <linearGradient id="bulbBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 50%)" />
            <stop offset="100%" stopColor="hsl(0, 0%, 30%)" />
          </linearGradient>
        </defs>
        <ellipse cx="40" cy="32" rx="22" ry="24" fill="url(#bulbGlow)" />
        <rect x="32" y="52" width="16" height="12" rx="2" fill="url(#bulbBase)" />
        <rect x="34" y="56" width="12" height="2" fill="hsl(0, 0%, 40%)" />
        <rect x="34" y="60" width="12" height="2" fill="hsl(0, 0%, 40%)" />
      </svg>
    ),
  },
  {
    title: "Interview (youtube)",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    buttonText: "LEARN MORE",
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <defs>
          <linearGradient id="swirl1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(250, 70%, 55%)" />
            <stop offset="100%" stopColor="hsl(270, 80%, 35%)" />
          </linearGradient>
          <linearGradient id="swirl2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(260, 80%, 65%)" />
            <stop offset="100%" stopColor="hsl(280, 70%, 45%)" />
          </linearGradient>
        </defs>
        <ellipse cx="40" cy="50" rx="28" ry="18" fill="url(#swirl1)" />
        <ellipse cx="40" cy="48" rx="22" ry="14" fill="url(#swirl2)" />
        <ellipse cx="40" cy="46" rx="16" ry="10" fill="hsl(260, 70%, 50%)" />
        <circle cx="55" cy="25" r="10" fill="hsl(270, 60%, 55%)" />
        <circle cx="55" cy="25" r="6" fill="hsl(280, 70%, 65%)" />
      </svg>
    ),
  },
  {
    title: "Resume",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    buttonText: "LEARN MORE",
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <defs>
          <linearGradient id="lamp1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270, 70%, 55%)" />
            <stop offset="100%" stopColor="hsl(280, 80%, 35%)" />
          </linearGradient>
          <radialGradient id="lampGlow" cx="50%" cy="20%">
            <stop offset="0%" stopColor="hsl(45, 100%, 80%)" />
            <stop offset="100%" stopColor="hsl(40, 90%, 60%)" />
          </radialGradient>
        </defs>
        <ellipse cx="40" cy="60" rx="25" ry="8" fill="hsl(270, 50%, 25%)" />
        <rect x="37" y="35" width="6" height="25" fill="hsl(270, 40%, 30%)" />
        <ellipse cx="40" cy="25" rx="18" ry="15" fill="url(#lamp1)" />
        <ellipse cx="40" cy="22" rx="12" ry="10" fill="url(#lampGlow)" />
      </svg>
    ),
  },
];

const ReadMoreSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 
          ref={titleRef}
          className={`text-2xl md:text-3xl font-semibold mb-10 transition-all duration-700 metallic-text ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Read more here! :)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const CardContent = () => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
              
              return (
                <div
                  ref={ref}
                  className={`group relative metallic-card rounded-2xl p-6 border border-primary/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover-lift ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background glow effect */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-magenta/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    {/* 3D Icon - static, no floating animation */}
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {card.description}
                      </p>
                      <button className="px-6 py-2.5 border border-foreground/30 text-sm font-medium rounded-lg text-foreground hover:bg-foreground/10 hover:border-foreground/50 transition-all duration-300 underline-grow">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            };

            return <CardContent key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ReadMoreSection;
