import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teacher.jpg";

const Hero = () => {
  const scrollToWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=¡Hola Ale! Me interesa agendar mi clase gratuita de inglés 😊', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen bg-primary flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Aprendé inglés de forma{" "}
            <span className="text-secondary font-extrabold drop-shadow-lg">
              personalizada con Ale! 🚀
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            ¡Hola! Soy Ale y te ayudo a dominar el inglés con clases súper personalizadas. 
            Metodología práctica, divertida y adaptada 100% a tus objetivos ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={scrollToWhatsApp}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-full shadow-lg text-lg"
            >
              Agendá tu clase gratis 🎯
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