import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de Negocios",
      content: "Ale me ayudó a conseguir mi certificación TOEFL. Sus clases son dinámicas y muy efectivas. ¡Recomendada al 100%!",
      rating: 5,
      image: "MG"
    },
    {
      name: "Carlos Ruiz",
      role: "Profesional IT",
      content: "Gracias a las clases con Ale, pude conseguir mi trabajo en una empresa internacional. Su método de enseñanza es excepcional.",
      rating: 5,
      image: "CR"
    },
    {
      name: "Ana López",
      role: "Estudiante Universitaria",
      content: "Las clases online son súper cómodas y Ale siempre está disponible para resolver dudas. Mi inglés mejoró muchísimo.",
      rating: 5,
      image: "AL"
    },
    {
      name: "Diego Mendez",
      role: "Empresario",
      content: "Flexible, profesional y muy paciente. Ale adaptó las clases a mis horarios y necesidades específicas. Excelente experiencia.",
      rating: 5,
      image: "DM"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Lo que dicen mis <span className="text-primary">estudiantes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias reales de éxito de personas que transformaron su inglés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;