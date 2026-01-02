import { Linkedin, Mail, Github, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-[#0077B5]" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "hover:bg-primary" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:bg-[#333]" },
  { icon: Code, label: "LeetCode", href: "#", color: "hover:bg-[#FFA116]" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="py-20 px-6 border-t border-border/20 bg-gradient-to-t from-purple-dark/50 to-transparent">
      <div 
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Text */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground text-sm mb-1">
              Open to opportunities in data science and analytics.
            </p>
            <p className="text-muted-foreground text-sm">
              Data science | Internships | Entry-level roles
            </p>
          </div>
          
          {/* Right side - Social buttons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`group flex items-center justify-center w-12 h-12 rounded-full bg-muted/30 border border-border/30 transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-primary/20`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Simran Khan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with <span className="text-primary">♥</span> in Sweden
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
