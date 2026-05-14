import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type NavLink =
  | { type: "route"; href: string; label: string }
  | { type: "anchor"; id: string; label: string };

const navLinks: NavLink[] = [
  { type: "route", href: "/", label: "Home" },
  { type: "route", href: "/projects", label: "Projects" },
  { type: "route", href: "/publications", label: "Education and Certificates" },
  { type: "route", href: "/beyond-the-code", label: "Beyond the Code" },
  { type: "anchor", id: "get-in-touch", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for Index to mount, then scroll.
      const start = Date.now();
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `#${id}`);
        } else if (Date.now() - start < 1500) {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
      return;
    }
    scrollToId(id);
  };

  const handleRoute = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 animate-fade-in transition-[background-color,backdrop-filter,border-color] duration-300 ease-out"
      style={{
        backgroundColor: `hsl(265 64% 5% / ${bgAlpha})`,
        backdropFilter: `blur(${blurPx}px)`,
        WebkitBackdropFilter: `blur(${blurPx}px)`,
        borderBottom: `1px solid hsl(var(--border) / ${borderAlpha})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-8 md:gap-12 overflow-x-auto">
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
              className={`text-sm font-medium whitespace-nowrap transition-all duration-300 underline-grow ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
