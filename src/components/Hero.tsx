import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teacher.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            English with{" "}
            <span className="text-secondary drop-shadow-lg">
              Ale!
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Clases personalizadas de inglés para todos los niveles. Metodología 
            práctica y divertida que te ayudará a hablar inglés con confianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
            >
              Aprende Inglés HOY
            </Button>
          </div>
        </div>
        <div className="relative">
          <img 
            src={heroImage}
            alt="Ale - Profesora de Inglés" 
            className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative z-10 object-cover h-96"
          />
          {/* Floating elements inspired by the reference site */}
          <div className="absolute -top-8 -left-8 bg-secondary text-primary px-4 py-2 rounded-full font-semibold shadow-lg animate-bounce z-20">
            📚 Learn
          </div>
          <div className="absolute top-1/4 -right-8 bg-white text-primary px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse z-20">
            🚀 Progress
          </div>
          <div className="absolute bottom-1/4 -left-12 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-bounce delay-500 z-20">
            💬 Speak
          </div>
          <div className="absolute -bottom-4 right-1/4 bg-secondary text-primary px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse delay-1000 z-20">
            ⭐ Excel
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;