const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-float-slow" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-magenta/8 rounded-full blur-[130px] animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-mid/15 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-primary/8 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: '6s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
