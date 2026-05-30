import { Button } from "@/components/ui/button";
import { Building2, Users, ClipboardCheck } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";

const ForCompanies = ({ id }: { id?: string }) => {
  const openCompanyChat = () => {
    window.open(
      buildWhatsAppLink("Hola Ale, quiero información sobre clases de inglés para mi equipo"),
      '_blank'
    );
  };

  const features = [
    {
      icon: Users,
      title: "Grupos del mismo nivel",
      description: "Hasta 6 personas por grupo. Mismo nivel y mismo objetivo (ej: equipo comercial, atención al cliente, técnico, leadership)."
    },
    {
      icon: ClipboardCheck,
      title: "Reporte mensual a HR",
      description: "Seguimiento individual de cada participante con métricas de progreso, asistencia y áreas de mejora. Reporte en inglés o español."
    },
    {
      icon: Building2,
      title: "Onboarding en 5 días hábiles",
      description: "Diagnóstico de nivel + propuesta a medida + cronograma. Facturación en USD a entidad US o LATAM. Sin contratos de largo plazo obligatorios."
    },
  ];

  return (
    <section id={id} className="py-20 px-4 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Para equipos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inglés profesional para tu empresa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Programas para equipos en empresas USA con colaboradores latinos, equipos LATAM reportando a HQ en USA, y operaciones bilingües. Tarifas por volumen, facturación en USD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start space-y-3 p-6 rounded-lg bg-primary/5">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={openCompanyChat}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            Pedir propuesta para mi equipo
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Respuesta en menos de 24 horas hábiles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForCompanies;
