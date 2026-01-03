import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-gradient-to-b from-purple-mid/90 via-background/70 to-transparent backdrop-blur-sm border-b border-primary/10 animate-fade-in">
      <div className="container mx-auto px-6 flex justify-center gap-16">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.href || 
            (link.href === "/projects" && location.pathname.startsWith("/projects")) ||
            (link.href === "/about" && location.pathname.startsWith("/about"));
          
          return (
            <Link 
              key={link.href}
              to={link.href} 
              className={`text-sm font-medium transition-all duration-300 underline-grow ${
                isActive 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
