import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { completedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const FeaturedProjects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const featured = completedProjects.slice(0, 3);

  return (
    <section id="projects" className="py-12 px-6 scroll-mt-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
              completed projects
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Featured Work
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              5 projects shipped · 1 IEEE publication · 2 hackathons
            </p>
          </div>
          <Link to="/projects">
            <Button
              variant="outline"
              className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover-lift"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
