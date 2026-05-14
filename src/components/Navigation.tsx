import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "publications", label: "publications" },
  { id: "contact", label: "contact" },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/40 backdrop-blur-md animate-fade-in">
      <div className="container mx-auto px-6 flex items-center justify-center gap-12">
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`/#${link.id}`}
            onClick={(e) => handleNav(e, link.id)}
            className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 underline-grow"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {link.label}
          </a>
        ))}
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
