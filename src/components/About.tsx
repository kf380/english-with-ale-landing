import { GraduationCap, Users, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Experiencia Certificada",
      description: "Más de 5 años enseñando inglés con certificaciones internacionales"
    },
    {
      icon: Users,
      title: "Clases Personalizadas",
      description: "Métodos adaptados a tu nivel y objetivos específicos"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Clases que se adaptan a tu agenda y estilo de vida"
    },
    {
      icon: Award,
      title: "Resultados Garantizados",
      description: "Progreso visible desde la primera clase"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sobre <span className="text-primary">Ale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesora apasionada por ayudar a sus estudiantes a alcanzar sus metas en inglés. 
            Mi enfoque personalizado y dinámico hace que aprender sea divertido y efectivo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;