import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, ExternalLink, GraduationCap, Database } from "lucide-react";

const publications = [
  {
    icon: FileText,
    citation:
      'Khan, Simran (2024). "MediMatch: AI-Driven Drug Recommendation System." ICSCSS 2024, pp. 1342–1349.',
    linkLabel: "View on IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10625049",
  },
  {
    icon: Database,
    citation: "Khan, Simran (2023). MediMatch dataset on Kaggle.",
    linkLabel: "View on Kaggle",
    link: "https://www.kaggle.com/datasets/simrankhan2002/medimatch-dataset",
  },
];

const education = [
  {
    degree: "MSc Data Science: Data Engineering",
    school: "Uppsala University",
    schoolLink: "https://www.uu.se/en",
    period: "2025 – present",
  },
  {
    degree: "B.E. Computer Engineering",
    school: "SAKEC",
    schoolLink: "https://www.sakec.ac.in/",
    period: "2020 – 2024",
    detail: "GPA 8.44 / 10",
  },
];

const PublicationsSection = () => {
  const { ref: pubRef, isVisible: pubVisible } = useScrollAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation();

  return (
    <>
      <section
        id="publications"
        ref={pubRef}
        className={`py-12 px-6 scroll-mt-24 relative z-10 transition-all duration-700 ${
          pubVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            <span className="metallic-text">Publications</span>
          </h2>
          <div className="space-y-4">
            {publications.map((pub) => (
              <a
                key={pub.citation}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <pub.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground leading-relaxed mb-2">
                      {pub.citation}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:underline">
                      {pub.linkLabel}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        ref={eduRef}
        className={`py-12 px-6 scroll-mt-24 relative z-10 transition-all duration-700 ${
          eduVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            <span className="metallic-text">Education</span>
          </h2>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="group rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a
                        href={item.schoolLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline-offset-2 hover:underline transition-colors"
                      >
                        {item.school}
                      </a>{" "}
                      · {item.period}
                      {item.detail ? ` · ${item.detail}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicationsSection;
