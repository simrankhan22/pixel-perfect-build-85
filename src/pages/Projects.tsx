import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { completedProjects, roadmap } from "@/data/projects";
import {
  ProjectCard,
  RoadmapCard,
  RoadmapDivider,
} from "@/components/ProjectCard";

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="pt-32 pb-20 relative z-10">
        <section
          ref={headerRef}
          className={`px-6 mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
              Projects
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-2">
              A mix of completed work, ongoing builds, and what's coming next.
              Spans applied ML, deep learning, voice AI, and classical data
              science — with a focus on shipping end-to-end.
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-4">
              5 projects shipped · 1 IEEE publication · 2 hackathons
            </p>
            <div className="mt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
                  <FileText className="mr-2 w-4 h-4" />
                  View Full Resume
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="px-6">
          <div className="container mx-auto max-w-3xl space-y-4">
            {completedProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="container mx-auto max-w-3xl">
            <RoadmapDivider />
            <div className="space-y-3">
              {roadmap.map((item, i) => (
                <RoadmapCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default Projects;
