import { Linkedin, Mail, Github, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/simrankhan23/", handle: "linkedin.com/in/simrankhan23" },
  { icon: Mail, label: "Email", href: "mailto:simrann.khan0110@gmail.com", handle: "simrann.khan0110@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/simrankhan22", handle: "github.com/simrankhan22" },
];

const GetInTouchSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-24 px-6 relative z-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center metallic-card">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Always open to conversations around data science, AI/ML, internships, and meaningful collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {links.map(({ icon: Icon, label, href, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-background hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-foreground font-medium">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1 break-all">{handle}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
