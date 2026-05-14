import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Users, Globe, Calendar, ExternalLink } from "lucide-react";

const stats = [
  { num: "40+", label: "team members led", icon: Users },
  { num: "3", label: "leadership roles", icon: Award },
  { num: "2", label: "countries", icon: Globe },
  { num: "4 yrs", label: "community work", icon: Calendar },
];

type Item = {
  title: string;
  date: string;
  org: string;
  desc: string;
  tags: string[];
  impact?: string;
  link?: { url: string; label: string };
};

const timeline: Item[] = [
  {
    title: "International Student Ambassador — Science & Technology",
    date: "2025",
    org: "Uppsala University, Sweden",
    desc: "Representing the programme to prospective students globally. Responsibilities include shooting YouTube content for the programme, a written interview published on the university website, and conducting seminars at home universities in India.",
    tags: ["content creation", "public speaking", "international outreach"],
    link: { url: "https://lnkd.in/dAAQCn7n", label: "Read interview on Uppsala University" },
  },
  {
    title: "MER — CLICK2026 Social Media",
    date: "2026 – present",
    org: "Uppsala University, Sweden",
    desc: "Managing social media content strategy and execution for CLICK2026, a student-run event at Uppsala. Responsible for digital marketing, content planning, and optimising campaign performance.",
    tags: ["social media", "digital marketing", "content strategy"],
  },
  {
    title: "Outreach Coordinator",
    date: "Aug 2023 – Aug 2024",
    org: "SAKEC Alumni Association, Mumbai",
    desc: "Led a team of 40 members to manage alumni communications across the world. Responsible for strategic planning, persuasive communication, and executing a high-impact social media portfolio that kept global alumni engaged with the institution.",
    tags: ["team leadership · 40 members", "global outreach", "strategic planning"],
    link: { url: "https://www.instagram.com/stories/highlights/18070858129648815/", label: "View highlights on Instagram" },
  },
  {
    title: "Digital Media Head",
    date: "Aug 2022 – Aug 2023",
    org: "SAKEC Alumni Association, Mumbai",
    desc: "Led a 20-member digital media team. Managed the full content lifecycle — strategy, creation, scheduling, and performance analysis — across all social platforms.",
    tags: ["team leadership · 20 members", "digital marketing", "campaign performance"],
    impact: "Letter of commendation — outstanding contribution",
    link: { url: "https://www.instagram.com/p/CrnJ9AmIFzW/", label: "View campaign on Instagram" },
  },
];

const BeyondTheCode = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="pt-32 pb-16 relative z-10">
        <section
          ref={headerRef}
          className={`px-6 mb-10 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
              beyond the code
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
              <span className="metallic-text">Beyond the Code</span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
              Leadership, community building, and communication — the other side
              of the work.
            </p>
          </div>
        </section>

        <section
          ref={statsRef}
          className={`px-6 mb-12 transition-all duration-700 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                >
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <s.icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-semibold text-foreground mb-1">
                    {s.num}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={timelineRef}
          className={`px-6 transition-all duration-700 ${
            timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-border/60" />
              {timeline.map((item) => (
                <div key={item.title} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[26px] md:-left-[34px] top-1.5 w-4 h-4 rounded-full border border-primary/40 bg-background flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-0.5">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <div className="text-sm text-primary/80 mb-3">{item.org}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {item.impact && (
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-foreground/80 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
                        <Award className="w-3 h-3 text-primary" />
                        {item.impact}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default BeyondTheCode;
