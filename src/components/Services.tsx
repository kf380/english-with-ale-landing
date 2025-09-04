import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users2, Video, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users2,
      title: "Clases Individuales",
      description: "Atención personalizada 1:1 enfocada en tus objetivos específicos",
      price: "Desde $25/hora",
      features: ["Plan de estudio personalizado", "Horario flexible", "Material incluido"]
    },
    {
      icon: Video,
      title: "Clases Online",
      description: "Aprende desde la comodidad de tu hogar con tecnología interactiva",
      price: "Desde $20/hora",
      features: ["Clases por Zoom", "Grabaciones disponibles", "Material digital"]
    },
    {
      icon: BookOpen,
      title: "Preparación Exámenes",
      description: "TOEFL, IELTS, Cambridge - preparación especializada",
      price: "Desde $30/hora",
      features: ["Tests de práctica", "Estrategias específicas", "Seguimiento detallado"]
    },
    {
      icon: MessageSquare,
      title: "Conversación",
      description: "Mejora tu fluidez con sesiones de conversación dinámica",
      price: "Desde $18/hora",
      features: ["Temas variados", "Corrección en tiempo real", "Grupos pequeños"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Mis <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige el formato que mejor se adapte a tus necesidades y objetivos de aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                >
                  Consultar
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