import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake } from "lucide-react";

const featuredProjects = [
  {
    label: "Completed",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
  },
  {
    label: "Featured Project",
    title: "Example Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=350&fit=crop",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Featured Projects
          </h2>
          <Link to="/projects">
            <Button variant="outline" className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Link 
              to="/projects" 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <span className="absolute top-4 left-4 text-primary text-xs font-medium uppercase tracking-wider bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.label}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4">
                  <Snowflake className="w-4 h-4 text-muted-foreground" />
                  <Snowflake className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
