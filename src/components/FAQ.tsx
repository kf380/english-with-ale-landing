import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = ({ id }: { id?: string }) => {
  const faqs = [
    {
      question: "¿Necesito un nivel mínimo de inglés para empezar?",
      answer: "Sí. Las clases están pensadas para nivel intermedio en adelante (B1+). Si ya entiendes inglés pero no te animas a hablarlo en el trabajo, es exactamente el perfil. Si arrancas desde cero, las clases todavía no son para ti — te lo digo honestamente en el diagnóstico.",
    },
    {
      question: "¿En qué horarios hay disponibilidad para alumnos en USA?",
      answer: "De lunes a viernes, 3pm a 9pm Eastern Time (2pm a 8pm Central Time). Eso cubre el horario laboral / post-laboral típico de profesionales en Texas, Florida, California y la costa este. Si tu horario no encaja, escríbeme y vemos.",
    },
    {
      question: "¿Cómo se paga? ¿Aceptan tarjetas de USA?",
      answer: "Aceptamos tarjeta de crédito y débito (Visa, Mastercard, Amex) en USD. El checkout es seguro y certificado, igual que el de cualquier servicio digital en USA. No hay conversiones raras ni fees ocultos. Tampoco usamos transferencias raras tipo Western Union — todo via tarjeta.",
    },
    {
      question: "¿Qué pasa si pierdo una clase o tengo que reprogramar?",
      answer: "Puedes reprogramar hasta 1 vez por mes sin penalización, con 24 horas de aviso. Si pierdes una clase sin avisar, esa clase no se recupera — el método depende de la consistencia semanal para funcionar.",
    },
    {
      question: "¿Las clases son por Zoom? ¿Me queda algún material después?",
      answer: "Sí, todas las clases son por Zoom. Después de cada clase te queda: grabación de la sesión, notas de los puntos trabajados, y ejercicios específicos para practicar durante la semana por WhatsApp.",
    },
    {
      question: "¿Por qué USD 140/mes y no algo más barato como Cambly o Preply?",
      answer: "Porque no son lo mismo. En Cambly tienes un tutor distinto cada vez, sin plan, conversación libre. Acá tienes profesor fijo, plan armado a tu objetivo concreto, soporte por WhatsApp todos los días, y materiales personalizados. Es entrenamiento estructurado para tu trabajo, no práctica suelta.",
    },
    {
      question: "¿Vamos a hablar solo en inglés desde la primera clase?",
      answer: "No, las clases se adaptan. Al principio mezclamos español e inglés según haga falta para explicar conceptos o desbloquearte. A medida que avanzas, las clases pasan a ser full English. El objetivo es que el español sea andamio, no muleta.",
    },
    {
      question: "¿Puedo cancelar si no me sirve?",
      answer: "Sí, cuando quieras y sin penalización. El Plan Mensual se factura mes a mes y lo cortas con un mensaje. Si después del primer mes sientes que no avanzaste, te devuelvo el importe completo sin preguntas.",
    },
  ];

  return (
    <section id={id} className="py-24 px-4 bg-primary/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Si tu duda no está acá, mándame un mensaje por WhatsApp y la respondo personalmente.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
