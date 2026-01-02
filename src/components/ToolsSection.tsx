import { 
  Figma, 
  Settings, 
  Circle,
  Database,
  Code,
  FileCode,
  Palette,
  Box,
  Layers
} from "lucide-react";

const tools = [
  { icon: Figma, name: "Figma", color: "#F24E1E" },
  { icon: Settings, name: "Settings", color: "#8B5CF6" },
  { icon: Circle, name: "Canva", color: "#00C4CC" },
  { icon: Code, name: "Node.js", color: "#339933" },
  { icon: Database, name: "Database", color: "#336791" },
  { icon: FileCode, name: "JavaScript", color: "#F7DF1E" },
  { icon: Palette, name: "CSS", color: "#264DE4" },
];

const tools2 = [
  { icon: Box, name: "XD", color: "#FF61F6" },
  { icon: Layers, name: "Sketch", color: "#FDAD00" },
  { icon: Code, name: "Vue", color: "#4FC08D" },
  { icon: Database, name: "AI", color: "#FF6F00" },
  { icon: FileCode, name: "Proto", color: "#34A7C1" },
  { icon: Settings, name: "Framer", color: "#0055FF" },
];

const ToolsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-lg font-medium text-foreground mb-2">
          Tools I have worked with
        </h3>
        <p className="text-sm text-muted-foreground mb-8">
          Helping me improvise my designing and developing skills
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: tool.color + '20' }}
            >
              <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {tools2.map((tool, index) => (
            <div 
              key={index}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: tool.color + '20' }}
            >
              <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
