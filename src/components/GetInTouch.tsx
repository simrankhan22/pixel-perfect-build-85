import { Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const GetInTouch = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="get-in-touch"
      className="py-16 px-6 scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div ref={ref} className="container mx-auto max-w-3xl relative z-10">
        <div
          className={`text-xs uppercase tracking-[0.15em] text-primary mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          What's Next?
        </div>
        <h2
          className={`text-2xl md:text-3xl font-semibold text-foreground mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          Get In Touch
        </h2>
        <p
          className={`text-sm text-muted-foreground leading-relaxed max-w-xl mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "240ms" }}
        >
          I'm always open to new opportunities, collaborations, or a friendly
          chat about data science and AI. Whether you have a question or just
          want to say hi, my inbox is always open — I'll get back to you as
          soon as I can!
        </p>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "360ms" }}
        >
          <a href="mailto:simrann.khan0110@gmail.com">
            <Button
              variant="outline"
              className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover-lift"
            >
              <Mail className="mr-2 w-4 h-4" />
              Say Hello
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
