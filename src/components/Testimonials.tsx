import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/config";

// TODO(ale): reemplazar estos casos por outcomes reales de tus alumnos antes del lanzamiento a cold TX/FL.
// Mismo formato: rol genérico + ciudad + before (1 frase) + after (1 frase concreta y medible).
// Si no tenés cases concretos aún, avisame y cambiamos esta sección por outcome general sin nombres.
const cases = [
  {
    role: "Account manager",
    city: "Houston, TX",
    before: "Mes 1: silencio en reuniones con cliente.",
    after: "Mes 3: lidera discovery calls sin script.",
  },
  {
    role: "Senior de marketing",
    city: "Miami, FL",
    before: "Mes 1: reescribía cada mail tres veces.",
    after: "Mes 2: manda sin releer, sin culpa.",
  },
];

const Testimonials = ({ id }: { id?: string }) => {
  const openReferenceChat = () => {
    window.open(
      buildWhatsAppLink("Hola Ale, antes de pagar quiero hablar con un alumno tuyo. ¿Me lo coordinas?"),
      '_blank'
    );
  };

  return (
    <section id={id} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            Resultados que veo en mis alumnos
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Casos reales, anonimizados con permiso del alumno. Si quieres pruebas concretas antes de pagar, también te conecto con uno directo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cases.map((c, index) => (
            <Card key={index} className="p-6 md:p-7 bg-background border-border/50">
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-foreground">{c.role}</div>
                  <div className="text-sm text-muted-foreground">{c.city}</div>
                </div>
                <div className="space-y-3 pt-3 border-t border-border/40">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground/70 mb-1">Antes</div>
                    <p className="text-muted-foreground">{c.before}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-primary/80 mb-1">Después</div>
                    <p className="text-foreground font-medium">{c.after}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-background/60 border-border/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-foreground">
              ¿Quieres hablar con uno de ellos antes de pagar? Te lo coordino sin compromiso.
            </p>
            <Button
              onClick={openReferenceChat}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-shrink-0"
            >
              Pedir referencia
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
