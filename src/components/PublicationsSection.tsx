import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "MediMatch: AI-Driven Drug Recommendation System",
    venue: "IEEE ICSCSS 2024",
    description:
      "Random Forest + SVM classifier built on 4,000+ hand-curated entries with 25+ symptom features for personalized drug recommendation.",
    tags: ["Python", "Scikit-learn", "Healthcare AI"],
    link: "#",
  },
];

const PublicationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="publications"
      ref={ref}
      className={`py-12 px-6 scroll-mt-24 relative z-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          <span className="metallic-text">Publications</span>
        </h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-primary/80 font-medium mb-2">
                    {pub.venue}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground border border-border/60 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
