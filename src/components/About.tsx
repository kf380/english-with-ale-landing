import { GraduationCap, Users, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-teacher.jpg";

const About = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-24 px-4 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Conóceme <span className="text-primary">👋</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  ¡Hola! Soy Alejandra, pero todos me dicen <strong>Ale</strong>. Llevo más de <strong>8 años</strong> ayudando a adultos como vos a dominar el inglés de una forma súper natural y sin estrés.
                </p>
                <p>
                  Me especializo en <strong>adultos profesionales</strong> y preparación para <strong>exámenes internacionales</strong> (TOEFL, IELTS, Cambridge). Mi filosofía es simple: el inglés se aprende hablando, no memorizando reglas 🗣️
                </p>
                <p>
                  Lo que más me gusta es ver cómo mis estudiantes ganan confianza clase tras clase. ¡Es increíble lo que se puede lograr con la metodología correcta! 💪
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">8+ años</div>
                  <div className="text-sm text-muted-foreground">de experiencia</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">estudiantes exitosos</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage}
                alt="Ale - Tu profesora de inglés favorita 😊" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10 object-cover h-96"
              />
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-bounce z-20 text-sm">
                🎓 Certified
              </div>
              <div className="absolute bottom-1/4 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse z-20 text-sm">
                ⭐ 5.0 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;