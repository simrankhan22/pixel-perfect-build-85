import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, ExternalLink, GraduationCap, Database, Cpu, Terminal, Globe, Languages, Award } from "lucide-react";

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

type Cert = { issuer: string; name: string; badge?: string; meta?: string; highlight?: boolean; link?: string };

const certificateGroups: { title: string; icon: typeof Cpu; items: Cert[] }[] = [
  {
    title: "Machine Learning & AI",
    icon: Cpu,
    items: [
      { issuer: "Internshala", name: "Machine Learning Training", badge: "core skill", highlight: true },
      { issuer: "Internshala", name: "Programming with Python", badge: "core skill", highlight: true, link: "https://trainings.internshala.com/certificate/view/nsdc/gajvfxv36w7/4u2ehzeatna/" },
      { issuer: "Infosys", name: "R Programming", badge: "data science" },
      { issuer: "IEEE", name: "Research Paper Presentation — MediMatch", badge: "published", link: "https://www.linkedin.com/posts/simrankhan23_i-recently-had-the-honor-of-presenting-my-share-7223309708118376448-rx5x" },
    ],
  },
  {
    title: "Programming & Development",
    icon: Terminal,
    items: [
      { issuer: "IIT Bombay", name: "Java Training", link: "https://drive.google.com/file/d/1V7ci87a6naWvDu14dSsOWUDmVigGNsIJ/view" },
      { issuer: "IIT Bombay", name: "C Training", link: "https://drive.google.com/file/d/1UeGVM7kwZA22t4s4mt_Yab4PdJa9HM8q/view" },
      { issuer: "IIT Bombay", name: "Python 3.4.3 Training", link: "https://drive.google.com/file/d/1UhQ-BpKRWP9oIglbQ9TpYW6yF_BEpNTr/view" },
      { issuer: "Achievement Cert", name: "Android Fundamentals with Capstone Project", link: "https://drive.google.com/file/d/1OQH6GSaJ_Dal-Y6UYxth88cJs47GjZA2/view" },
    ],
  },
  {
    title: "Web & Security",
    icon: Globe,
    items: [
      { issuer: "Achievement Cert", name: "HTML Level 1", link: "https://drive.google.com/file/d/1rHDq95UE2j70X4drHsKnVsvRoOeIj_FC/view" },
      { issuer: "Achievement Cert", name: "CSS Level 1", link: "https://drive.google.com/file/d/1ryOfzU99_LxY4lG5tJxzD-F0Zo8HS9D9/view" },
      { issuer: "Digital Forensics", name: "Digital Forensic Techniques & Investigation Approaches", badge: "cybersecurity" },
    ],
  },
  {
    title: "Language",
    icon: Languages,
    items: [
      { issuer: "Cambridge English", name: "Entry Level Certificate in ESOL International", meta: "C1 Proficiency", link: "https://drive.google.com/file/d/149aG1WkCsrCKtHAHo0rTYpI6zm-HbpaF/view" },
      { issuer: "IELTS", name: "International English Language Testing System", meta: "Overall Band Score: 7" },
    ],
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
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();
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
        <div className="container mx-auto max-w-6xl">
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
        id="certificates"
        ref={certRef}
        className={`py-12 px-6 scroll-mt-24 relative z-10 transition-all duration-700 ${
          certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            <span className="metallic-text">Certificates</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            13 certificates across ML, programming, web, and language.
          </p>

          <div className="space-y-8">
            {certificateGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-3 mb-4">
                  <group.icon className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground tracking-wide">
                    {group.title}
                  </h3>
                  <div className="flex-1 h-px bg-border/60" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.items.map((cert) => {
                    const Tag = cert.link ? "a" : "div";
                    const linkProps = cert.link
                      ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" }
                      : {};
                    return (
                      <Tag
                        key={cert.name}
                        {...linkProps}
                        className={`group block rounded-xl border bg-primary/5 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 ${
                          cert.highlight
                            ? "border-primary/40 hover:border-primary/60"
                            : "border-primary/15 hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground mb-1.5">
                          <Award className="w-3 h-3" />
                          {cert.issuer}
                        </div>
                        <div className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors flex items-start gap-1.5">
                          <span>{cert.name}</span>
                          {cert.link && <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100" />}
                        </div>
                        {cert.meta && (
                          <div className="text-[11px] text-muted-foreground mt-1.5">
                            {cert.meta}
                          </div>
                        )}
                        {cert.badge && (
                          <span className="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary uppercase tracking-wide">
                            {cert.badge}
                          </span>
                        )}
                      </Tag>
                    );
                  })}
                </div>
              </div>
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
        <div className="container mx-auto max-w-6xl">
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
