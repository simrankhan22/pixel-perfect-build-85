import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

type NavLink =
  | { type: "route"; href: string; label: string }
  | { type: "anchor"; id: string; label: string };

const navLinks: NavLink[] = [
  { type: "route", href: "/", label: "Home" },
  { type: "route", href: "/projects", label: "Projects" },
  { type: "route", href: "/publications", label: "Publications" },
  { type: "anchor", id: "contact", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      // 0 at top → 1 after 240px scrolled
      const p = Math.min(window.scrollY / 240, 1);
      setScrollProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Interpolate: top = nearly transparent, scrolled = darker tint that blends
  const bgAlpha = 0.15 + scrollProgress * 0.55; // 0.15 → 0.7
  const blurPx = 4 + scrollProgress * 12; // 4 → 16
  const borderAlpha = scrollProgress * 0.25;

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  const handleRoute = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-[hsl(265_64%_5%/0.7)] backdrop-blur-lg border-b border-border/20 animate-fade-in">
      <div className="container mx-auto px-6 flex items-center justify-center gap-12">
        {navLinks.map((link, index) => {
          const isAnchor = link.type === "anchor";
          const href = isAnchor ? `/#${link.id}` : link.href;
          const isActive = !isAnchor && (link.href === "/" ? location.pathname === "/" : location.pathname.startsWith(link.href));
          return (
            <a
              key={link.label}
              href={href}
              onClick={(e) =>
                isAnchor ? handleAnchor(e, link.id) : handleRoute(e, link.href)
              }
              className={`text-sm font-medium transition-all duration-300 underline-grow ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
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
