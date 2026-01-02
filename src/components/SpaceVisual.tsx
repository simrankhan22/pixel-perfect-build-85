const SpaceVisual = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto max-w-6xl px-6 relative">
        <div className="relative h-80 flex items-center justify-center">
          {/* Central Planet */}
          <div className="relative">
            <svg viewBox="0 0 200 200" className="w-48 h-48 animate-float">
              {/* Main planet */}
              <defs>
                <radialGradient id="planetGradient" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="hsl(270, 60%, 40%)" />
                  <stop offset="100%" stopColor="hsl(270, 80%, 15%)" />
                </radialGradient>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(292, 84%, 61%)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="hsl(270, 60%, 70%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(292, 84%, 61%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Ring behind */}
              <ellipse 
                cx="100" cy="100" rx="80" ry="20" 
                fill="none" 
                stroke="url(#ringGradient)" 
                strokeWidth="3"
                className="animate-spin-slow"
                style={{ transformOrigin: 'center' }}
              />
              
              {/* Planet body */}
              <circle cx="100" cy="100" r="50" fill="url(#planetGradient)" />
              
              {/* Planet highlight */}
              <ellipse cx="85" cy="85" rx="15" ry="10" fill="hsl(270, 60%, 50%)" opacity="0.4" />
            </svg>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-orbit">
              <div className="absolute -top-4 left-1/2 w-3 h-3 bg-primary rounded-full glow-effect" />
            </div>
            <div className="absolute inset-0 animate-orbit-reverse">
              <div className="absolute -bottom-6 left-1/4 w-2 h-2 bg-lavender rounded-full" />
            </div>
          </div>
          
          {/* Floating orbs - left side */}
          <div className="absolute left-20 top-10">
            <svg viewBox="0 0 60 60" className="w-12 h-12 animate-float" style={{ animationDelay: '0.5s' }}>
              <defs>
                <radialGradient id="orb1">
                  <stop offset="0%" stopColor="hsl(292, 84%, 70%)" />
                  <stop offset="100%" stopColor="hsl(292, 84%, 40%)" />
                </radialGradient>
              </defs>
              <circle cx="30" cy="30" r="25" fill="url(#orb1)" opacity="0.8" />
              <circle cx="22" cy="22" r="8" fill="hsl(292, 84%, 80%)" opacity="0.5" />
            </svg>
          </div>
          
          <div className="absolute left-10 bottom-20">
            <svg viewBox="0 0 40 40" className="w-8 h-8 animate-float" style={{ animationDelay: '1s' }}>
              <circle cx="20" cy="20" r="18" fill="hsl(270, 50%, 30%)" />
              <circle cx="14" cy="14" r="5" fill="hsl(270, 50%, 45%)" opacity="0.6" />
            </svg>
          </div>
          
          {/* Floating orbs - right side */}
          <div className="absolute right-16 top-16">
            <svg viewBox="0 0 50 50" className="w-10 h-10 animate-float" style={{ animationDelay: '0.3s' }}>
              <defs>
                <radialGradient id="orb2">
                  <stop offset="0%" stopColor="hsl(292, 84%, 75%)" />
                  <stop offset="100%" stopColor="hsl(270, 60%, 50%)" />
                </radialGradient>
              </defs>
              <circle cx="25" cy="25" r="22" fill="url(#orb2)" opacity="0.9" />
            </svg>
          </div>
          
          <div className="absolute right-32 bottom-8">
            <svg viewBox="0 0 30 30" className="w-6 h-6 animate-pulse-slow">
              <circle cx="15" cy="15" r="12" fill="hsl(270, 40%, 25%)" />
            </svg>
          </div>
          
          {/* Stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-foreground/60 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          
          {/* Glowing particles */}
          <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-primary/60 rounded-full blur-sm animate-pulse" />
          <div className="absolute right-1/3 bottom-1/4 w-1.5 h-1.5 bg-lavender/80 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default SpaceVisual;
