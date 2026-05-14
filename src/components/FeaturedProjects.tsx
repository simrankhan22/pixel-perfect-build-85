import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featuredProjects = [
  {
    label: "Completed",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
    caption: "View as transformed by (AI/js)",
    layout: "left" as const,
  },
  {
    label: "Featured Project",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=350&fit=crop",
    caption: "OPPORTUNITY (AI/js)",
    layout: "right" as const,
  },
];

const ProjectCard = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isLeft = project.layout === "left";
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow effect */}
      <div className={`absolute ${isLeft ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none ${isVisible ? 'animate-glow-pulse' : ''}`} />
      
      {/* Content */}
      <div className={`flex-1 relative z-10 ${!isLeft ? 'md:text-right' : ''} ${isVisible ? (isLeft ? 'animate-fade-in-left' : 'animate-fade-in-right') : ''}`} style={{ animationDelay: '0.2s' }}>
        <span className="text-primary text-xs font-medium uppercase tracking-wider">
          {project.label}
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-4">
          {project.title}
        </h3>
        <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-5 border border-primary/20 mb-4 hover-lift">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className={`flex gap-3 ${!isLeft ? 'md:justify-end' : ''}`}>
          <Snowflake className="w-5 h-5 text-muted-foreground hover:text-primary hover:rotate-180 transition-all duration-500" />
          <Snowflake className="w-5 h-5 text-muted-foreground hover:text-primary hover:rotate-180 transition-all duration-500" />
        </div>
      </div>
      
      {/* Image */}
      <div className={`flex-1 relative z-10 ${isVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: '0.3s' }}>
        <Link to="/projects" className="block group">
          <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-primary/20 hover-glow">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent group-hover:from-background/40 transition-all duration-300" />
          </div>
        </Link>
        <p className="text-xs text-muted-foreground text-center mt-3">
          {project.caption}
        </p>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-12 px-6 scroll-mt-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-4 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Featured Projects
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Here are some highlights of my work. Click to explore more details.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover-lift">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
