import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
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
          
          {/* Intro Text */}
          <div className="text-center md:text-left">
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
