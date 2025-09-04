import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = ({ id }: { id?: string }) => {
  const testimonials = [
    {
      name: "María González",
      role: "Marketing Manager",
      content: "¡You Guys!!! 🔥🔥🔥 Ale es increíble! Aprobé el TOEFL con 105 puntos. Sus clases son súper dinámicas y siempre te motiva. La mejor inversión que hice este año 💪",
      rating: 5,
      image: "MG"
    },
    {
      name: "Carlos Ruiz", 
      role: "Software Developer",
      content: "Conseguí mi trabajo en Google gracias a Ale! Me preparó para las entrevistas técnicas en inglés y ahora me siento súper confiado hablando con el equipo internacional 🚀",
      rating: 5,
      image: "CR"
    },
    {
      name: "Ana López",
      role: "Estudiante de Medicina",
      content: "Las clases online con Ale son lo más! Flexible, divertida y siempre disponible para ayudar. En 6 meses pasé de principiante a intermedio ✨",
      rating: 5,
      image: "AL"
    }
  ];

  return (
    <section id={id} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            Lo que dicen mis <span className="text-primary">estudiantes</span> 💬
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            ¡Mirá lo que logran las personas que confían en mi método! Estas son historias reales de éxito ⭐
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background border-border/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-base leading-relaxed">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;