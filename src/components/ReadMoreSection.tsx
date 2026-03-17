import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Youtube, Award, Download, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "IEEE Paper",
    description: "Published an IEEE research paper showcasing hands-on application of data analysis and computational techniques.",
    buttonText: "Read Paper",
    icon: Award,
    accent: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
    link: "https://ieeexplore.ieee.org/document/10625049",
  },
  {
    title: "Interview UU",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    buttonText: "Learn More",
    icon: FileText,
    accent: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    link: "https://www.uu.se/en/study/programme/masters-programme-data-science-data-engineering/is-this-programme-right-for-you",
  },
  {
    title: "Interview (YouTube)",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    buttonText: "Watch Now",
    icon: Youtube,
    accent: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
    link: "",
  },
  {
    title: "Resume",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    buttonText: "Download",
    icon: Download,
    accent: "from-primary/20 to-magenta/20",
    iconColor: "text-primary",
    link: "https://drive.google.com/file/d/1WcaQ-c1XK6vgB4qqGUIWDNYmDczLs3eO/view?usp=sharing",
  },
];

const ReadMoreSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div
          ref={titleRef}
          className={`mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold metallic-text mb-3">
            Read more here! :)
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            Explore my publications, interviews, and more — everything in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, index) => {
            const CardContent = () => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
              const Icon = card.icon;

              return (
                <div
                  ref={ref}
                  onClick={() => card.link && window.open(card.link, '_blank', 'noopener,noreferrer')}
                  className={`group relative rounded-2xl border border-border/60 dark:border-primary/15 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 cursor-pointer bg-card dark:bg-transparent ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 metallic-card dark:block hidden" />

                  <div className="relative z-10 p-6 flex items-start gap-5">
                    {/* Icon container */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 ${card.iconColor} dark:${card.iconColor}`}>
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {card.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary/80 group-hover:text-primary transition-all duration-300">
                        {card.buttonText}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
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
