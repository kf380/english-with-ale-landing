import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { buildWhatsAppLink, CALENDLY_URL, PAYMENT_LINK_MONTHLY, PAYMENT_LINK_QUARTERLY } from "@/lib/config";

const Services = ({ id }: { id?: string }) => {
  const openTrialChat = () => {
    if (CALENDLY_URL) {
      window.open(CALENDLY_URL, '_blank');
      return;
    }
    window.open(
      buildWhatsAppLink("Hola Ale, quiero reservar mi clase diagnóstica gratis"),
      '_blank'
    );
  };

  const getPaymentLink = (planName: string) => {
    if (planName === "Plan Mensual" && PAYMENT_LINK_MONTHLY) return PAYMENT_LINK_MONTHLY;
    if (planName === "Plan Trimestral" && PAYMENT_LINK_QUARTERLY) return PAYMENT_LINK_QUARTERLY;
    return null;
  };

  const plans = [
    {
      name: "Plan Mensual",
      price: "USD 140",
      cadence: "/mes",
      perClass: "USD 35 por clase",
      featured: false,
      features: [
        "4 clases 1:1 de 60 minutos",
        "WhatsApp diario con Ale entre clases",
        "Plan personalizado a tu objetivo",
        "Primera clase diagnóstica: gratis",
        "Cancelas cuando quieras, sin contratos largos",
      ],
    },
    {
      name: "Plan Trimestral",
      price: "USD 349",
      cadence: "/trimestre",
      perClass: "USD 29 por clase · ahorras USD 71",
      featured: true,
      features: [
        "12 clases 1:1 de 60 minutos",
        "WhatsApp diario con Ale entre clases",
        "Plan personalizado a tu objetivo",
        "1 sesión bonus de simulacro (entrevista o presentación)",
        "Primera clase diagnóstica: gratis",
      ],
    },
  ];

  return (
    <section id={id} className="py-24 px-4 bg-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Planes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mismo método, dos formas de empezar. La primera clase es siempre diagnóstico gratis para que pruebes antes de pagar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <Card className="p-5 md:p-6 bg-secondary/30 border-secondary">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  Garantía sin riesgo
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  La primera clase es gratis. Si después del primer mes no sientes progreso concreto, te devuelvo el importe del Plan Mensual sin preguntas. Cancelas cuando quieras.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-medium transition-all duration-300 bg-background border-border/50 flex flex-col ${
                plan.featured ? "border-primary border-2 shadow-lg" : ""
              }`}
            >
              {plan.featured && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Más elegido
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground">{plan.cadence}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.perClass}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  const paymentLink = getPaymentLink(plan.name);
                  if (paymentLink) {
                    window.open(paymentLink, '_blank');
                    return;
                  }
                  openTrialChat();
                }}
                className={`w-full font-semibold py-3 text-lg mt-auto ${
                  plan.featured
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
              >
                {getPaymentLink(plan.name) ? `Contratar ${plan.name}` : "Empezar con clase gratis"}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Pagos seguros en USD con tarjeta Visa, Mastercard o Amex · Sin contratos largos · Cancelas cuando quieras
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                Tu empresa puede reembolsártelo
              </h3>
              <p className="text-muted-foreground">
                Te paso un comprobante detallado del programa para que tu manager o HR lo apruebe como capacitación profesional.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
