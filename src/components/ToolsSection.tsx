import { 
  Figma, 
  Code,
  FileCode,
  Palette,
  Box,
  Layers,
  Database,
  Atom,
  Terminal,
  Cpu,
  Globe,
  Server
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { icon: Figma, name: "Figma", color: "#F24E1E" },
  { icon: Atom, name: "React", color: "#61DAFB" },
  { icon: Palette, name: "Canva", color: "#00C4CC" },
  { icon: Terminal, name: "Node.js", color: "#339933" },
  { icon: Database, name: "Database", color: "#47A248" },
  { icon: FileCode, name: "JavaScript", color: "#F7DF1E" },
  { icon: Code, name: "CSS", color: "#264DE4" },
];

const tools2 = [
  { icon: Box, name: "XD", color: "#FF61F6" },
  { icon: Globe, name: "Next.js", color: "#FFFFFF" },
  { icon: Layers, name: "Greensock", color: "#88CE02" },
  { icon: Cpu, name: "AI", color: "#FF9A00" },
  { icon: Server, name: "Express", color: "#FFFFFF" },
  { icon: Database, name: "MongoDB", color: "#47A248" },
];

// Orbiting icons around the planet
const orbitIcons = [
  { icon: Atom, name: "React", angle: 0 },
  { icon: Database, name: "DB", angle: 45 },
  { icon: Code, name: "Code", angle: 90 },
  { icon: Terminal, name: "Terminal", angle: 135 },
  { icon: Figma, name: "Design", angle: 180 },
  { icon: Globe, name: "Web", angle: 225 },
  { icon: Layers, name: "Layers", angle: 270 },
  { icon: Server, name: "Server", angle: 315 },
];

const ToolsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 px-6 relative overflow-hidden">

      <div 
        ref={ref}
        className={`container mx-auto max-w-5xl relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-foreground mb-2">
            Tools I have worked with
          </h3>
          <p className="text-sm text-muted-foreground">
            Helping me improvise my designing and developing skills
          </p>
        </div>
        
        {/* Top tool icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 border border-border/30 bg-background/80 backdrop-blur-sm ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`
              }}
            >
              <tool.icon className="w-6 h-6" style={{ color: tool.color }} />
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tools2.map((tool, index) => (
            <div 
              key={index}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 border border-border/30 bg-background/80 backdrop-blur-sm ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ 
                transitionDelay: `${(index + tools.length) * 50}ms`
              }}
            >
              <tool.icon className="w-6 h-6" style={{ color: tool.color }} />
            </div>
          ))}
        </div>

        {/* SVG with connecting lines and planet */}
        <div className="relative h-[400px] flex items-center justify-center">
          <svg 
            viewBox="0 0 800 400" 
            className="w-full h-full absolute inset-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Planet glow gradient */}
              <radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(270, 80%, 70%)" stopOpacity="1" />
                <stop offset="40%" stopColor="hsl(280, 70%, 50%)" stopOpacity="0.8" />
                <stop offset="70%" stopColor="hsl(290, 60%, 30%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(270, 50%, 10%)" stopOpacity="0" />
              </radialGradient>
              
              {/* Inner planet gradient */}
              <radialGradient id="planetCore" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="hsl(280, 90%, 80%)" />
                <stop offset="50%" stopColor="hsl(280, 80%, 60%)" />
                <stop offset="100%" stopColor="hsl(270, 70%, 40%)" />
              </radialGradient>

              {/* Ring gradient */}
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(270, 60%, 50%)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(270, 60%, 70%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(270, 60%, 50%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Connecting lines from top to planet */}
            {[...Array(7)].map((_, i) => {
              const startX = 200 + i * 70;
              const endX = 400;
              const endY = 200;
              return (
                <path
                  key={`line1-${i}`}
                  d={`M${startX},20 Q${startX},100 ${endX},${endY}`}
                  fill="none"
                  stroke="hsl(270, 60%, 40%)"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                />
              );
            })}
            
            {/* Second row connecting lines */}
            {[...Array(6)].map((_, i) => {
              const startX = 230 + i * 70;
              return (
                <path
                  key={`line2-${i}`}
                  d={`M${startX},60 Q${startX},120 400,200`}
                  fill="none"
                  stroke="hsl(270, 60%, 40%)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 100 + 700}ms` }}
                />
              );
            })}

            {/* Outer orbit ring */}
            <ellipse
              cx="400"
              cy="280"
              rx="350"
              ry="80"
              fill="none"
              stroke="hsl(270, 50%, 40%)"
              strokeWidth="1"
              strokeOpacity="0.4"
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            
            {/* Middle orbit ring */}
            <ellipse
              cx="400"
              cy="260"
              rx="280"
              ry="60"
              fill="none"
              stroke="hsl(270, 50%, 50%)"
              strokeWidth="1"
              strokeOpacity="0.5"
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            
            {/* Inner orbit ring */}
            <ellipse
              cx="400"
              cy="240"
              rx="200"
              ry="40"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2"
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Planet glow */}
            <circle
              cx="400"
              cy="200"
              r="100"
              fill="url(#planetGlow)"
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            
            {/* Planet core */}
            <circle
              cx="400"
              cy="200"
              r="50"
              fill="url(#planetCore)"
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            
            {/* Planet highlight */}
            <ellipse
              cx="385"
              cy="185"
              rx="15"
              ry="10"
              fill="hsl(280, 90%, 85%)"
              opacity="0.5"
            />
          </svg>

          {/* Orbiting icons */}
          {orbitIcons.map((item, index) => {
            const radius = 160;
            const angleRad = (item.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * (radius * 0.3);
            
            return (
              <div
                key={index}
                className={`absolute w-8 h-8 rounded-full bg-background/60 border border-primary/30 flex items-center justify-center backdrop-blur-sm transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `calc(50% + ${x}px - 16px)`,
                  top: `calc(55% + ${y}px - 16px)`,
                  transitionDelay: `${index * 100 + 800}ms`,
                  animation: isVisible ? `orbit ${20 + index * 2}s linear infinite` : 'none',
                }}
              >
                <item.icon className="w-4 h-4 text-primary/70" />
              </div>
            );
          })}

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-twinkle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 50}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
