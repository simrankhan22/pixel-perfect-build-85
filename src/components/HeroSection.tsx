import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
              <img 
                src={profilePhoto} 
                alt="Simran Khan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Cute Arrow */}
          <svg 
            className="absolute left-44 top-4 w-24 h-16 text-primary hidden md:block animate-bounce-gentle"
            viewBox="0 0 100 60" 
            fill="none"
          >
            <path 
              d="M5 50 Q 20 55, 35 45 Q 50 35, 65 30 Q 80 25, 90 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              fill="none"
              strokeDasharray="5,5"
              className="animate-dash"
            />
            <path 
              d="M82 10 L90 15 L85 23" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            {/* Cute heart at the end */}
            <path 
              d="M3 48 C 3 45, 6 45, 6 47 C 6 45, 9 45, 9 48 C 9 51, 6 53, 6 53 C 6 53, 3 51, 3 48" 
              fill="currentColor"
              className="animate-pulse-slow"
            />
          </svg>
          
          {/* Intro Text */}
          <div className="text-center md:text-left md:ml-8">
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
        <div className="mb-16">
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
