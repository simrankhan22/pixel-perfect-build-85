import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-gradient-to-b from-purple-mid/90 via-background/70 to-transparent backdrop-blur-sm border-b border-primary/10 animate-fade-in">
      <div className="container mx-auto px-6 flex items-center justify-center gap-16">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.href || 
            (link.href === "/projects" && location.pathname.startsWith("/projects")) ||
            (link.href === "/about" && location.pathname === "/about") ||
            (link.href === "/blogs" && (location.pathname === "/blogs" || location.pathname.startsWith("/blog/")));
          
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
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-primary/10 border border-primary/20 text-foreground hover:bg-primary/20 hover:border-primary/40 transition-all"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
