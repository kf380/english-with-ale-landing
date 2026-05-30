import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teacher.jpg";
import { buildWhatsAppLink, HERO_VIDEO_SRC } from "@/lib/config";

const Hero = () => {
  const scrollToWhatsApp = () => {
    window.open(buildWhatsAppLink("Hola Ale, quiero reservar mi clase diagnóstica gratis"), '_blank');
  };

  const scrollToPlans = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-primary flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 text-sm text-primary-foreground/90">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            Para latinos profesionales en Estados Unidos
          </div>

          <p className="text-lg md:text-xl text-secondary font-medium italic">
            Entiendes todo. Pero no te animas a hablar.
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Inglés 1:1 para tu trabajo —{" "}
            <span className="text-secondary font-extrabold drop-shadow-lg">
              reuniones, entrevistas y mails
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            No es tu nivel — es el bloqueo de hablar. Trabajamos exactamente eso: no más gramática para memorizar, sí práctica diaria para destrabar la voz en tu trabajo.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              Horarios en CT y ET
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              Pagos en USD con tarjeta de crédito o débito
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              Cancelas cuando quieras
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button
              size="lg"
              onClick={scrollToWhatsApp}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-full shadow-lg text-lg"
            >
              Reservar clase diagnóstica gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPlans}
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-full text-lg"
            >
              Ver planes
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70">
            30 minutos · sin compromiso · plan personalizado al final
          </p>
        </div>
        <div className="relative">
          {HERO_VIDEO_SRC ? (
            <video
              src={HERO_VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              poster={heroImage}
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative z-10 object-cover h-96"
              aria-label="Ale presentándose en video"
            >
              Tu navegador no soporta video.
            </video>
          ) : (
            <img
              src={heroImage}
              alt="Ale, profesora de inglés 1:1 para profesionales latinos en USA"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative z-10 object-cover h-96"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
