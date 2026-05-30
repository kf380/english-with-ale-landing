import { Card } from "@/components/ui/card";
import { Search, Target, MessageSquare, Video } from "lucide-react";

const HowItWorks = ({ id }: { id?: string }) => {
  const steps = [
    {
      icon: Search,
      title: "1. Diagnóstico gratuito",
      description: "30 minutos donde identificamos exactamente dónde se traba tu inglés profesional. Te llevás un plan claro, sin compromiso de pago."
    },
    {
      icon: Target,
      title: "2. Plan personalizado",
      description: "Las clases se arman alrededor de tus desafíos reales: reuniones, entrevistas, presentaciones, mails. No usamos libros genéricos."
    },
    {
      icon: MessageSquare,
      title: "3. Práctica diaria por WhatsApp",
      description: "Te mando ejercicios cortos y audios entre clases. La conversación que pasa fuera del aula es lo que mueve la aguja."
    },
    {
      icon: Video,
      title: "4. Una clase 1:1 por semana",
      description: "60 minutos vía Zoom, en español + inglés según haga falta. Te quedan notas y grabación para repasar."
    }
  ];

  return (
    <section id={id} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Un proceso pensado para que el inglés pase de "lo entiendo pero no me animo" a herramienta de trabajo diaria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background border-border/50 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
