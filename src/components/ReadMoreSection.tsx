import { FileText, Video, User, File } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: FileText,
    title: "IEEE paper",
    description: "A paper I co-authored, detailing our analysis of features and their impact on identifying fake product reviews on e-commerce platforms.",
    buttonText: "READ MORE",
  },
  {
    icon: User,
    title: "Interview uu",
    description: "A candid interview I took from my fellow students at the university about their experiences.",
    buttonText: "LEARN MORE",
  },
  {
    icon: Video,
    title: "Interview (youtube)",
    description: "Exclusive: A conversation where I discuss my role in executing targeted marketing strategies.",
    buttonText: "LEARN MORE",
  },
  {
    icon: File,
    title: "Resume",
    description: "View a brief snapshot of my career, including my education, training, and relevant work experience.",
    buttonText: "LEARN MORE",
  },
];

const ReadMoreSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 
          ref={titleRef}
          className={`text-2xl md:text-3xl font-semibold text-foreground mb-8 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Read more here! :)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const CardWrapper = ({ children }: { children: React.ReactNode }) => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
              return (
                <div
                  ref={ref}
                  className={`bg-lavender rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {children}
                </div>
              );
            };

            return (
              <CardWrapper key={index}>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-mid/50 p-3 rounded-lg">
                    <card.icon className="w-6 h-6 text-purple-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-purple-dark mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-purple-dark/70 mb-4 line-clamp-2">
                      {card.description}
                    </p>
                    <button className="px-4 py-2 bg-purple-mid/30 text-xs font-medium rounded-md text-purple-dark hover:bg-purple-mid/50 transition-colors">
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReadMoreSection;
