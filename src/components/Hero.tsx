import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teacher.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              English with
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Ale
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Aprende inglés de manera personalizada y efectiva. Clases diseñadas para tu ritmo y objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-semibold text-lg shadow-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Comienza Ahora
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300"
              >
                Conoce más
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="Ale - Profesora de Inglés"
                className="rounded-3xl shadow-medium w-full max-w-lg object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold shadow-soft">
                ¡Más de 500 estudiantes satisfechos!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;