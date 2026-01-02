import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex justify-center gap-16">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href || 
            (link.href === "/projects" && location.pathname === "/projects");
          
          return (
            <Link 
              key={link.href}
              to={link.href} 
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
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
