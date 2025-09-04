import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number - format: country code + number (no spaces or symbols)
    const phoneNumber = "1234567890"; // This should be updated with Ale's actual number
    const message = "Hola! Me interesa conocer más sobre las clases de inglés.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-gradient-primary text-primary-foreground p-4 rounded-full shadow-medium hover:shadow-lg transform hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-12 right-0 bg-card text-card-foreground px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-soft whitespace-nowrap">
        ¡Chatea conmigo!
      </span>
    </button>
  );
};

export default WhatsAppFloat;