import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { buildWhatsAppLink, CONTACT_EMAIL, CALENDLY_URL } from "@/lib/config";

const Contact = ({ id }: { id?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO(kevin): conectar form a backend o servicio tipo Formspree/Resend
    toast({
      title: "Mensaje enviado",
      description: "Te contactamos en menos de 24 horas hábiles.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "Respuesta en horario laboral",
      link: buildWhatsAppLink("Hola Ale, quiero reservar mi clase diagnóstica gratis")
    }
  ];

  if (CALENDLY_URL) {
    contactInfo.push({
      icon: Mail,
      title: "Reservar online",
      content: "Calendly · ver disponibilidad",
      link: CALENDLY_URL
    });
  }

  return (
    <section id={id} className="py-24 px-4 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Empezá con una clase diagnóstica gratis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            30 minutos sin compromiso. Identificamos tus bloqueos reales con el inglés y te llevás un plan claro al final, decidas o no contratar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 bg-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Contanos qué necesitás</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>
                <Input
                  name="phone"
                  placeholder="Tu WhatsApp (opcional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-border focus:ring-primary"
                />
                <Textarea
                  name="message"
                  placeholder="¿Para qué necesitás el inglés? (reuniones, entrevistas, mails, etc.)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-border focus:ring-primary"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  size="lg"
                >
                  Reservar clase diagnóstica gratis
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Otros canales</h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span>{info.content}</span>
                );

                return (
                  <Card key={index} className="p-6 bg-card border-border/50 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{info.title}</h4>
                        <div className="text-muted-foreground">{content}</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Pagos seguros en USD</h4>
                <p className="text-sm text-muted-foreground">
                  Tarjeta de crédito o débito (Visa, Mastercard, Amex). Facturación mensual o trimestral según el plan que elijas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
