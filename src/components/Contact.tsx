import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaré pronto para coordinar tu primera clase.",
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
      content: "ale@englishwithale.com",
      link: "mailto:ale@englishwithale.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Clases online y presenciales",
      link: null
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Sab: 8:00 - 20:00",
      link: null
    }
  ];

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¡Empecemos <span className="text-primary">juntos!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contáctame para agendar tu clase de prueba gratuita y conocer cómo puedo ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 bg-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Envíame un mensaje</h3>
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
                  placeholder="Tu teléfono (opcional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-border focus:ring-primary"
                />
                <Textarea
                  name="message"
                  placeholder="Cuéntame sobre tus objetivos con el inglés..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-border focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                  size="lg"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Información de contacto</h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = info.link ? (
                  <a href={info.link} className="text-primary hover:text-primary-dark transition-colors">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;