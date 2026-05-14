import { Linkedin, Mail, Github, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/simrankhan23/", color: "hover:bg-[#0077B5]" },
  { icon: Mail, label: "Email", href: "mailto:simrann.khan0110@gmail.com", color: "hover:bg-primary" },
  { icon: Github, label: "GitHub", href: "https://github.com/simrankhan22", color: "hover:bg-[#333]" },
  { icon: Code, label: "LeetCode", href: "#", color: "hover:bg-[#FFA116]" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-purple-dark/40 to-transparent relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-magenta/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div 
        ref={ref}
        className={`container mx-auto max-w-4xl relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Text */}
          <div className={isVisible ? 'animate-fade-in-left' : ''}>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground text-sm mb-1">
              Open to opportunities in data science and analytics.
            </p>
            <p className="text-muted-foreground text-sm">
              Data science | Internships | Entry-level roles
            </p>
          </div>
          
          {/* Right side - Social buttons */}
          <div className={`flex gap-3 ${isVisible ? 'stagger-children' : ''}`}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group flex items-center justify-center w-12 h-12 rounded-full bg-muted/30 border border-border/30 transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1`}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className={`mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-xs text-muted-foreground">
            © 2025 Simran Khan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with <span className="text-primary animate-pulse-slow">♥</span> in Sweden
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
