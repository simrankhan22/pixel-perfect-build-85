import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex justify-center gap-16">
        <Link 
          to="/" 
          className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
        >
          Home
        </Link>
        <Link 
          to="#about" 
          className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
        >
          About
        </Link>
        <Link 
          to="#projects" 
          className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
