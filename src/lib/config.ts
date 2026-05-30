// Centralized config — actualizar en este único archivo cuando cambien los datos operacionales.

// WhatsApp Business de English with Ale (+54 9 3454 14-2892, Concordia, Entre Ríos)
export const WHATSAPP_NUMBER = "5493454142892";

// Calendly de Ale — event "Clase diagnóstica gratis"
export const CALENDLY_URL = "https://calendly.com/english-ale25/diagnostica";

// TODO(kevin): reemplazar por el path real del video Hero cuando Ale lo grabe
// Subirlo a /public/ale-hero-60s.mp4 y mantener este path
export const HERO_VIDEO_SRC = "";

// TODO(kevin): generar links de pago en Rebill (mismo gateway que Lingexa) y pegar acá
// Plan Mensual: USD 140 recurring monthly · Plan Trimestral: USD 349 recurring quarterly
export const PAYMENT_LINK_MONTHLY = "";
export const PAYMENT_LINK_QUARTERLY = "";

export const CONTACT_EMAIL = "englishwithale@gmail.com";

export const buildWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};
