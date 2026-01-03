import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projectsData: Record<string, {
  label: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  date: string;
  liveUrl?: string;
  githubUrl?: string;
}> = {
  "0": {
    label: "Completed",
    title: "Data Visualization Dashboard",
    description: "A web app for visualizing personalized Spotify data.",
    fullDescription: `This project showcases a comprehensive data visualization dashboard built with modern web technologies. The application allows users to connect their Spotify account and visualize their listening habits through interactive charts and graphs.

Key features include:
- Real-time data synchronization with Spotify API
- Interactive charts showing top artists, tracks, and genres
- Historical listening trends and patterns analysis
- Personalized recommendations based on listening history
- Playlist generation based on mood and preferences
- Social sharing capabilities for playlists and stats

The project demonstrates proficiency in API integration, data processing, and creating intuitive user interfaces for complex data sets.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "D3.js", "Spotify API", "Tailwind CSS"],
    date: "March 2024",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "1": {
    label: "Ongoing",
    title: "AI-Powered Analytics Platform",
    description: "An advanced analytics platform leveraging machine learning.",
    fullDescription: `An ongoing project focused on building an AI-powered analytics platform that helps businesses make data-driven decisions. The platform integrates multiple data sources and uses machine learning algorithms to provide actionable insights.

Current development focus:
- Natural language query interface for data exploration
- Predictive analytics using machine learning models
- Automated report generation and scheduling
- Custom dashboard builder with drag-and-drop functionality
- Real-time collaboration features for teams
- Integration with popular business tools and databases

This project is being developed as part of my master's thesis, exploring the intersection of artificial intelligence and business intelligence.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    date: "In Progress",
    githubUrl: "https://github.com",
  },
  "2": {
    label: "Featured Project",
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management solution.",
    fullDescription: `A full-stack healthcare management system designed to streamline patient care and administrative processes. This project was developed in collaboration with healthcare professionals to ensure it meets real-world requirements.

System capabilities:
- Patient registration and electronic health records (EHR)
- Appointment scheduling with automated reminders
- Prescription management and medication tracking
- Lab results integration and visualization
- Secure messaging between patients and healthcare providers
- Administrative dashboard with analytics and reporting
- HIPAA-compliant data handling and security measures

The project emphasizes user experience, accessibility, and security, making it suitable for deployment in clinical settings.`,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS"],
    date: "January 2024",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "3": {
    label: "Featured Project",
    title: "Financial Portfolio Tracker",
    description: "A sophisticated portfolio management and tracking tool.",
    fullDescription: `A sophisticated financial portfolio tracker that helps investors monitor and optimize their investment portfolios. The application provides real-time market data, portfolio analytics, and investment insights.

Core features:
- Multi-asset portfolio tracking (stocks, crypto, bonds, ETFs)
- Real-time market data and price alerts
- Performance analytics with benchmark comparisons
- Risk assessment and portfolio diversification analysis
- Tax-loss harvesting suggestions
- Integration with major brokerages for automatic sync
- Mobile-responsive design for on-the-go access

This project demonstrates expertise in financial APIs, real-time data processing, and creating interfaces for complex financial data.`,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    technologies: ["React", "GraphQL", "Node.js", "PostgreSQL", "WebSocket"],
    date: "November 2023",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  
  const project = id ? projectsData[id] : null;
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/projects">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="container mx-auto max-w-4xl px-6 mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
        
        {/* Hero Image */}
        <section className="px-6 mb-12">
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl shadow-primary/10">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {project.label}
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section 
          ref={contentRef}
          className={`px-6 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            {/* Title and Meta */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {project.technologies.length} technologies
                </span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    View Live
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                    <Github className="mr-2 w-4 h-4" />
                    View Code
                  </Button>
                </a>
              )}
            </div>
            
            {/* Description */}
            <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">About This Project</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>
            
            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ContactSection />
    </div>
  );
};

export default ProjectDetail;
