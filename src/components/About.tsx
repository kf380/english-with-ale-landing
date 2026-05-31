import { MapPin, Clock, GraduationCap, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-teacher.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/in/alejandra-jarupkin";

const About = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-24 px-4 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Sobre Ale
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Soy Alejandra, profesora de inglés. <strong>28+ años de carrera</strong>, los últimos 8 con foco específico en adultos profesionales que necesitan usar el inglés todos los días en su trabajo.
                </p>
                <p>
                  Trabajo principalmente con <strong>latinos que viven en Estados Unidos</strong> — sobre todo en Texas, Florida y California — y con profesionales latinoamericanos que reportan a equipos americanos o que están buscando dar el salto a USA.
                </p>
                <p>
                  Mi especialidad no es la gramática avanzada. Es resolver el bloqueo de hablar: el momento en el que entiendes todo lo que pasa en una reunión pero no sabes cómo intervenir, o el mail que reescribes cinco veces antes de mandar.
                </p>
                <p>
                  Ese bloqueo casi nunca es de nivel. Es emocional — vergüenza, miedo a sonar simple, miedo a equivocarte delante de gente que respetas. Lo trato como lo que es: un patrón que se desarma con práctica acompañada, no con más reglas para memorizar.
                </p>
                <p>
                  Como hispanohablante que aprendió inglés siendo adulta, entiendo los bloqueos específicos de pensar en español y tener que hablar en otro idioma. Las sesiones trabajan eso directamente.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-semibold text-foreground">28+ años</div>
                    <div className="text-xs text-muted-foreground">de carrera docente</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-semibold text-foreground">CT / ET</div>
                    <div className="text-xs text-muted-foreground">disponibilidad horaria USA</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-semibold text-foreground">TX, FL, CA</div>
                    <div className="text-xs text-muted-foreground">mercados principales</div>
                  </div>
                </div>
              </div>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors pt-2"
              >
                <Linkedin className="w-4 h-4" />
                Ver perfil profesional verificable en LinkedIn
              </a>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Ale, profesora de inglés"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10 object-cover h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
