const ContactSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Open to opportunities in data science and analytics.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Data science | Internships | Entry-level roles
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            linkedin
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            email id
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            github
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            leetcode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
