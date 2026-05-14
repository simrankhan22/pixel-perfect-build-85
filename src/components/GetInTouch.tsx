import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GetInTouch = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="get-in-touch"
      className="py-24 px-6 scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto max-w-2xl text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-primary text-sm font-mono mb-4 tracking-wider">
          04. What's Next?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 metallic-text">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          I'm always open to new opportunities, collaborations, or a friendly
          chat about data science and AI. Whether you have a question or just
          want to say hi, my inbox is always open — I'll get back to you as
          soon as I can!
        </p>
        <a
          href="mailto:simrann.khan0110@gmail.com"
          className="inline-block px-10 py-5 border-2 border-primary text-primary font-mono text-base rounded-md hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
