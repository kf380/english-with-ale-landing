import { Card } from "@/components/ui/card";
import { Video, Download, MessageSquare, Award } from "lucide-react";

const HowItWorks = ({ id }: { id?: string }) => {
  const steps = [
    {
      icon: Video,
      title: "Clases Online en Vivo",
      description: "Conectate desde cualquier lugar y aprende de forma interactiva con tecnología de última generación 💻"
    },
    {
      icon: Download,
      title: "Material Descargable", 
      description: "Acceso completo a recursos, ejercicios y material de apoyo que podés usar cuando quieras 📚"
    },
    {
      icon: MessageSquare,
      title: "Práctica y Feedback Constante",
      description: "Corrección en tiempo real y seguimiento personalizado de tu progreso 🚀"
    },
    {
      icon: Award,
      title: "Certificación y Exámenes",
      description: "Preparación especializada para TOEFL, IELTS, Cambridge y certificaciones internacionales ⭐"
    }
  ];

  return (
    <section id={id} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            ¿Cómo funciona? 🤔
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Mi metodología está diseñada para que puedas aprender inglés de la manera más natural y efectiva
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