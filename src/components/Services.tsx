import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users2, MessageSquare, Building2 } from "lucide-react";

const Services = ({ id }: { id?: string }) => {
  const services = [
    {
      icon: Users2,
      title: "Clases Individuales 👤",
      description: "Atención 100% personalizada. Trabajamos tus objetivos específicos con un plan diseñado solo para vos",
      features: ["Plan súper personalizado", "Horario que se adapta a vos", "Todo el material incluido"]
    },
    {
      icon: BookOpen,
      title: "Clases Grupales 👥", 
      description: "Grupos pequeños (máx 4 personas) del mismo nivel. ¡Aprender en grupo es más divertido!",
      features: ["Máximo 4 estudiantes", "Ambiente relajado", "Práctica con pares"]
    },
    {
      icon: MessageSquare,
      title: "Exámenes Internacionales 🎯",
      description: "Preparación especializada para TOEFL, IELTS, Cambridge. ¡Aprobá con confianza!",
      features: ["Simulacros reales", "Estrategias probadas", "Seguimiento semanal"]
    },
    {
      icon: Building2,
      title: "Clases para Empresas 🏢",
      description: "Capacitación corporativa adaptada a las necesidades de tu equipo. Inglés profesional y efectivo",
      features: ["Programas corporativos", "Horarios flexibles", "Enfoque empresarial"]
    }
  ];

  const scrollToWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=¡Hola Ale! Me interesa conocer más sobre tus clases 😊', '_blank');
  };

  return (
    <section id={id} className="py-24 px-4 bg-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Qué tipo de <span className="text-primary">clases</span> ofrezco? 🤔
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elegí la modalidad que más te guste. Todas están diseñadas para que aprendas inglés de verdad ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background border-border/50 group text-center h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-base flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToWhatsApp}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 text-lg mt-auto"
                >
                  Agendá tu clase hoy 🚀
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;