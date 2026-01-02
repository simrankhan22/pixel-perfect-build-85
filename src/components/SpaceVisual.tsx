import spaceVisual from "@/assets/space-visual.png";

const SpaceVisual = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="relative">
          <img 
            src={spaceVisual} 
            alt="Space visualization" 
            className="w-full h-auto rounded-2xl opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default SpaceVisual;
