import profilePhoto from "@/assets/profile-photo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section className="pt-24 sm:pt-32 pb-4 px-6 relative overflow-hidden">
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
          className={`mb-0 transition-all duration-700 delay-200 ${
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
          <div className={`space-y-4 text-muted-foreground text-sm leading-relaxed max-w-2xl ${aboutVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <p>
              A published ML researcher and Master's student in Data Science (Data Engineering) at Uppsala University, Sweden. I've built and shipped end-to-end machine learning systems, presented research at an IEEE international conference, and hand-constructed a 4,000-entry dataset from scratch that's publicly available on Kaggle. Before moving to Sweden, I completed my Bachelor's in Computer Engineering in Mumbai with a GPA of 8.44/10, where I led teams, shipped a medical chatbot, and developed a CNN-based tumor detection model that hit 92% accuracy on 8,000 MRI scans.
            </p>
            <p>
              My work sits across the full ML and data stack which include pipeline engineering, model training, feature engineering, hyperparameter tuning, and AI-driven automation. Most recently I've been building voice AI systems using ElevenLabs and telephony APIs, and working on customer segmentation and demand forecasting projects aimed at real industry problems. I'm fluent in Python, SQL, and the tools that surround them.
            </p>
            <p>
              Outside of coursework, I regularly attend lectures, tech events, and hackathons where I stay sharp, pick up new tools fast, and occasionally ship something in 48 hours that I'm genuinely proud of. Based in Uppsala, looking for internships and data engineering or ML engineering roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
