import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogsData: Record<string, {
  label: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}> = {
  "ai-ml-future": {
    label: "AI/ML",
    title: "The Future of Machine Learning in Web Development",
    description: "Exploring how machine learning models are being integrated into modern web applications.",
    content: `Machine learning is rapidly transforming the landscape of web development. From intelligent recommendation systems to real-time language translation, ML models are becoming an integral part of modern web applications.

## The Current State of ML on the Web

Today, we're seeing ML models being deployed directly in browsers using technologies like TensorFlow.js and ONNX Runtime Web. This enables real-time inference without the need for server round-trips, improving user experience and reducing latency.

### Key Applications

1. **Image Recognition**: Web applications can now classify images, detect objects, and even perform facial recognition directly in the browser.

2. **Natural Language Processing**: Chatbots, sentiment analysis, and language translation are becoming more sophisticated and accessible.

3. **Personalization**: ML-powered recommendation systems are delivering highly personalized content to users based on their behavior patterns.

## Challenges and Considerations

While the potential is enormous, there are significant challenges to address:

- **Model Size**: Large models can impact page load times and memory usage
- **Browser Compatibility**: Not all browsers support WebGL or WebGPU acceleration
- **Privacy Concerns**: Processing sensitive data on-device raises new security considerations

## Looking Ahead

The future holds exciting possibilities with the emergence of WebGPU, which promises significant performance improvements for ML inference. We're also seeing the rise of edge computing, where ML models run closer to users for even lower latency.

As web developers, staying informed about these developments is crucial for building the next generation of intelligent web applications.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    date: "Dec 15, 2024",
    author: "Your Name",
    readTime: "8 min read",
  },
  "fullstack-journey": {
    label: "Development",
    title: "My Journey as a Full Stack Developer",
    description: "From learning the basics to building complex systems.",
    content: `Every developer has a unique journey. Mine began with a simple "Hello, World!" and has evolved into architecting complex distributed systems. Here's my story.

## The Beginning

Like many developers, I started with HTML and CSS, fascinated by the ability to create something visible from just text. The magic of seeing my first webpage render in a browser was unforgettable.

### Early Challenges

Learning to code wasn't always smooth. I remember:

- Spending hours debugging a missing semicolon
- The confusion of understanding closures in JavaScript
- The overwhelming number of frameworks and tools to learn

## The Backend Discovery

My journey took a significant turn when I discovered backend development. Understanding how servers work, how databases store data, and how APIs connect everything together opened up a new dimension of possibilities.

### Key Milestones

1. **First API**: Building my first REST API was a revelation
2. **Database Design**: Learning to model data effectively
3. **Authentication**: Understanding security and user management

## Full Stack Integration

The real magic happened when I could connect frontend and backend seamlessly. Building complete applications from scratch gave me a holistic understanding of software development.

## Lessons Learned

- **Fundamentals Matter**: Trendy frameworks come and go, but core concepts remain
- **Continuous Learning**: The field evolves constantly; embrace lifelong learning
- **Community**: Engaging with other developers accelerates growth

The journey continues, and every project brings new challenges and learning opportunities.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    date: "Nov 28, 2024",
    author: "Your Name",
    readTime: "6 min read",
  },
  "design-systems": {
    label: "UI/UX",
    title: "Building Scalable Design Systems",
    description: "A comprehensive guide to creating maintainable design systems.",
    content: `Design systems are the backbone of consistent, scalable product design. In this article, I'll share insights from building and maintaining design systems across multiple products.

## What is a Design System?

A design system is more than a component library. It's a comprehensive collection of design tokens, components, patterns, and guidelines that ensure consistency across products and teams.

### Core Components

1. **Design Tokens**: The atomic values (colors, spacing, typography) that define your visual language
2. **Component Library**: Reusable UI components built with accessibility in mind
3. **Documentation**: Clear guidelines for when and how to use each element

## Building for Scale

When building a design system meant to scale, consider:

### Token Architecture

\`\`\`
// Example token structure
colors:
  primary:
    50: '#f0f9ff'
    100: '#e0f2fe'
    ...
  semantic:
    success: '{colors.green.500}'
    error: '{colors.red.500}'
\`\`\`

### Component Composition

Design components to be composable. Small, focused components that can be combined to create complex UIs are more maintainable than monolithic ones.

## Governance and Maintenance

A design system is a living product that requires:

- **Clear Ownership**: Dedicated team or committee
- **Contribution Guidelines**: How others can propose changes
- **Version Control**: Semantic versioning for breaking changes
- **Communication**: Regular updates and deprecation notices

## Measuring Success

Track adoption and impact through:

- Component usage analytics
- Design consistency audits
- Developer satisfaction surveys
- Time-to-implementation metrics

Building a successful design system is a journey that requires patience, collaboration, and continuous iteration.`,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    date: "Oct 12, 2024",
    author: "Your Name",
    readTime: "10 min read",
  },
  "cloud-architecture": {
    label: "Cloud",
    title: "Modern Cloud Architecture Patterns",
    description: "An in-depth look at contemporary cloud architecture patterns.",
    content: `Cloud architecture has evolved significantly over the past decade. In this article, we'll explore modern patterns that help build resilient, scalable, and cost-effective systems.

## The Evolution of Cloud Architecture

From monoliths to microservices to serverless, each paradigm shift has brought new opportunities and challenges.

### Microservices Architecture

Breaking applications into smaller, independently deployable services offers:

- **Scalability**: Scale individual services based on demand
- **Resilience**: Failures are isolated to specific services
- **Flexibility**: Different technologies for different services

## Key Patterns

### 1. Event-Driven Architecture

Instead of synchronous request-response, services communicate through events:

\`\`\`
User Action → Event → Event Bus → Multiple Subscribers
\`\`\`

Benefits include loose coupling and better scalability.

### 2. CQRS (Command Query Responsibility Segregation)

Separate read and write operations for optimized performance and scalability.

### 3. Saga Pattern

Managing distributed transactions across multiple services without two-phase commit.

## Serverless Considerations

Serverless computing offers significant advantages:

- **Zero Infrastructure Management**: Focus on code, not servers
- **Automatic Scaling**: From zero to massive scale
- **Pay-per-Use**: Cost optimization for variable workloads

But consider:

- Cold start latency
- Vendor lock-in
- Debugging complexity

## Best Practices

1. **Design for Failure**: Everything will fail eventually; plan for it
2. **Implement Observability**: Logs, metrics, and traces are essential
3. **Automate Everything**: Infrastructure as code, CI/CD pipelines
4. **Security by Design**: Zero-trust, least privilege principles

Cloud architecture is both an art and a science, requiring continuous learning and adaptation to new technologies and patterns.`,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    date: "Sep 5, 2024",
    author: "Your Name",
    readTime: "12 min read",
  },
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  
  const blog = id ? blogsData[id] : null;
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">Blog Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/about">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blogs
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
          <Link to="/about">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blogs
            </Button>
          </Link>
        </div>
        
        {/* Hero Image */}
        <section className="px-6 mb-12">
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl shadow-primary/10">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {blog.label}
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
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-invert prose-purple max-w-none">
              <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                  {blog.content}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ContactSection />
    </div>
  );
};

export default BlogDetail;
