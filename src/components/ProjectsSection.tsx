import { Snowflake } from "lucide-react";

const projects = [
  {
    label: "Featured Project",
    title: "MediMatch: AI driven drug recommendation system.",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    icons: [Snowflake, Snowflake],
    layout: "left",
  },
  {
    label: "Featured Project",
    title: "Agentic Ragnar",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    icons: [Snowflake, Snowflake],
    layout: "right",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
          Featured Projects
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${project.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              {/* Content */}
              <div className={`flex-1 ${project.layout === 'right' ? 'md:text-right' : ''}`}>
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {project.label}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-4">
                  {project.title}
                </h3>
                <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className="w-5 h-5 text-muted-foreground" />
                  ))}
                </div>
              </div>
              
              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  View as transformed by (AI/js)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
