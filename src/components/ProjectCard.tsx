import { ExternalLink, Github, Database, Award, Map } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Project, RoadmapItem } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusPillClass: Record<Project["status"], string> = {
  ieee: "bg-primary/15 text-primary border border-primary/30",
  completed: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  "in-progress": "bg-amber-500/15 text-amber-300 border border-amber-500/30",
  hackathon: "bg-rose-500/15 text-rose-300 border border-rose-500/30",
};

const linkIcon = {
  external: ExternalLink,
  github: Github,
  database: Database,
};

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={cn(
        "rounded-xl p-5 md:p-6 backdrop-blur-sm transition-all duration-700 hover-lift",
        "border bg-card/5",
        project.featured
          ? "border-primary/40 shadow-lg shadow-primary/10"
          : "border-border/40",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {project.featured && (
        <div className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 mb-3">
          <Award className="w-3 h-3" />
          IEEE published
        </div>
      )}
      <header className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base md:text-lg font-medium text-foreground leading-snug">
          {project.title}
        </h3>
        <span
          className={cn(
            "text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0",
            statusPillClass[project.status]
          )}
        >
          {project.statusLabel}
        </span>
      </header>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground bg-muted/30"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {project.links.map((l) => {
            const Icon = linkIcon[l.icon];
            return (
              <a
                key={l.label}
                href={l.href || "#"}
                target={l.href ? "_blank" : undefined}
                rel={l.href ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-primary/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {l.label}
              </a>
            );
          })}
        </div>
      )}
      {project.relevantTo && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-[11px] text-muted-foreground/70">
            relevant to:
          </span>
          {project.relevantTo.map((c) => (
            <span
              key={c}
              className="text-[11px] px-1.5 py-0.5 rounded border border-border/40 text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export const RoadmapCard = ({
  item,
  index,
}: {
  item: RoadmapItem;
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border/40 bg-muted/10 p-5 flex gap-4 items-start transition-all duration-700 hover-lift",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-2xl font-light text-primary/70 min-w-[28px]">
        {index + 1}
      </div>
      <div className="flex-1">
        <h4 className="text-sm md:text-base font-medium text-foreground mb-1">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.why}
        </p>
        {item.relevantTo && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="text-[11px] text-muted-foreground/70">
              relevant to:
            </span>
            {item.relevantTo.map((c) => (
              <span
                key={c}
                className="text-[11px] px-1.5 py-0.5 rounded border border-border/40 text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const RoadmapDivider = () => (
  <div className="flex items-center gap-3 my-8">
    <div className="flex-1 h-px bg-border/50" />
    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground inline-flex items-center gap-1.5">
      <Map className="w-3 h-3" />
      coming next
    </div>
    <div className="flex-1 h-px bg-border/50" />
  </div>
);
