import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Snowflake } from "lucide-react";

const projects = [
  {
    label: "Completed",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
    caption: "View as transformed by (AI/js)",
    layout: "left" as const,
  },
  {
    label: "Ongoing",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
    caption: "OPPORTUNITY (AI/js)",
    layout: "right" as const,
  },
  {
    label: "Featured Project",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=350&fit=crop",
    caption: "View as transformed by (AI/js)",
    layout: "left" as const,
  },
  {
    label: "Featured Project",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop",
    caption: "OPPORTUNITY (AI/js)",
    layout: "right" as const,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const isLeft = project.layout === "left";
  
  return (
    <div 
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative`}
    >
      {/* Glow effect */}
      <div className={`absolute ${isLeft ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none`} />
      
      {/* Content */}
      <div className={`flex-1 relative z-10 ${!isLeft ? 'md:text-right' : ''}`}>
        <span className="text-primary text-xs font-medium uppercase tracking-wider">
          {project.label}
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-4">
          {project.title}
        </h3>
        <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-5 border border-primary/20 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className={`flex gap-3 ${!isLeft ? 'md:justify-end' : ''}`}>
          <Snowflake className="w-5 h-5 text-muted-foreground" />
          <Snowflake className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      
      {/* Image */}
      <div className="flex-1 relative z-10">
        <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg shadow-primary/10">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          {project.caption}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-32">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Welcome to the projects<br />section!
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              This section outlines the projects I have undertaken during my bachelor's
              and master's studies, including both completed and ongoing work. These
              projects demonstrate how I applied academic concepts to real-world
              problems while developing key industry-relevant technical and analytical
              skills. The ongoing projects reflect my commitment to continuous learning
              and professional growth, contributing to my overall industry readiness.
            </p>
          </div>
        </section>
        
        {/* Projects List */}
        <section className="px-6">
          <div className="container mx-auto max-w-5xl space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      
      <ContactSection />
    </div>
  );
};

export default Projects;
