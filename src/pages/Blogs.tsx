import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogs = [
  {
    id: "ai-ml-future",
    label: "AI/ML",
    title: "The Future of Machine Learning in Web Development",
    description: "Exploring how machine learning models are being integrated into modern web applications, from recommendation systems to intelligent user interfaces. This article covers practical implementations and future trends in the intersection of AI and frontend development.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop",
    date: "Dec 15, 2024",
    layout: "left" as const,
  },
  {
    id: "fullstack-journey",
    label: "Development",
    title: "My Journey as a Full Stack Developer",
    description: "From learning the basics of HTML to building complex distributed systems, this blog post chronicles my evolution as a developer. I share key lessons learned, mistakes made, and the technologies that shaped my career in software engineering.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop",
    date: "Nov 28, 2024",
    layout: "right" as const,
  },
  {
    id: "design-systems",
    label: "UI/UX",
    title: "Building Scalable Design Systems",
    description: "A comprehensive guide to creating and maintaining design systems that scale across multiple products and teams. Learn about component libraries, design tokens, documentation practices, and the tools that make design system management efficient.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
    date: "Oct 12, 2024",
    layout: "left" as const,
  },
  {
    id: "cloud-architecture",
    label: "Cloud",
    title: "Modern Cloud Architecture Patterns",
    description: "An in-depth look at contemporary cloud architecture patterns including microservices, serverless computing, and edge deployments. This blog discusses best practices for building resilient, scalable, and cost-effective cloud solutions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=350&fit=crop",
    date: "Sep 5, 2024",
    layout: "right" as const,
  },
];

const BlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isLeft = blog.layout === "left";
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect */}
      <div className={`absolute ${isLeft ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none`} />
      
      {/* Content */}
      <div className={`flex-1 relative z-10 ${!isLeft ? 'md:text-right' : ''}`}>
        <div className={`flex items-center gap-3 mb-2 ${!isLeft ? 'md:justify-end' : ''}`}>
          <span className="text-primary text-xs font-medium uppercase tracking-wider">
            {blog.label}
          </span>
          <span className="text-muted-foreground text-xs flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {blog.date}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-4">
          {blog.title}
        </h3>
        <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-5 border border-primary/20 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {blog.description}
          </p>
        </div>
        <Link 
          to={`/blog/${blog.id}`}
          className={`inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all ${!isLeft ? 'md:flex-row-reverse' : ''}`}
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      {/* Image */}
      <div className="flex-1 relative z-10">
        <Link to={`/blog/${blog.id}`} className="block group">
          <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:scale-[1.02]">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      
      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <section 
          ref={headerRef}
          className={`px-6 mb-32 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Welcome to my<br />blog section!
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Here I share my thoughts, experiences, and insights on technology, 
              software development, and the ever-evolving world of AI and machine learning.
              These articles reflect my journey as a developer and my passion for 
              continuous learning and knowledge sharing with the community.
            </p>
          </div>
        </section>
        
        {/* Blog List */}
        <section className="px-6">
          <div className="container mx-auto max-w-5xl space-y-32">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </section>
      </main>
      
      <ContactSection />
    </div>
  );
};

export default About;
