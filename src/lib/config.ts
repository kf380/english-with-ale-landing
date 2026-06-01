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

// Email branded via Cloudflare Email Routing: info@englishwithale.com → forwards a Gmail real
export const CONTACT_EMAIL = "info@englishwithale.com";

// Web3Forms access key — recibe submissions del form de Contact y las manda al CONTACT_EMAIL
// Key es client-side por diseño de Web3Forms (no es secreto). Anti-spam manejado por su side.
export const WEB3FORMS_KEY = "57ab7362-5f32-4188-a5b9-b545f55d815d";

// Meta Pixel — instalado en index.html `<head>` vía scripts/prerender.mjs.
// Helpers para disparar conversion events estandarizados. Meta optimiza la campaign
// por el evento elegido en Ads Manager (objective "Leads" → optimiza para evento Lead).
declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

const fbqTrack = (event: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, params);
  }
};

// Lead = intent fuerte (booking click, form submit, WhatsApp click con intent).
// Es el evento principal a optimizar en la campaign de Ads Manager.
export const trackLead = (source: string) => {
  fbqTrack('Lead', {
    content_name: source,
    value: getLeadValue(source),
    currency: 'USD',
  });
};

// Schedule = subset específico de Lead para clicks de Calendly. Útil para distinguir
// "intent de booking real" vs "intent de chat". Se dispara ADEMÁS de Lead, no en lugar.
export const trackSchedule = (source: string) => {
  fbqTrack('Schedule', { content_name: source });
};

// Contact = canales secundarios sin intent claro de compra (email, LinkedIn).
// No usar para optimization de campaign — es señal complementaria para audiences/insights.
export const trackContact = (source: string) => {
  fbqTrack('Contact', { content_name: source });
};

// ViewContent = visualización de contenido clave (ej. scroll a pricing). Permite remarketing
// a users que vieron precio y no convirtieron.
export const trackViewContent = (name: string) => {
  fbqTrack('ViewContent', { content_name: name });
};

// Value de cada Lead (USD) — Meta usa esto para bid optimization "Highest Value".
// Hoy todo retorna 0 → Meta optimiza por volumen (más leads, sin discriminar intent).
// Cuando haya data de conversion lead→paid, ajustar para optimizar por value total.
// Formula sugerida: expected_LTV × lead_to_paid_rate. Ej: USD 140/mes × 6 meses LTV × 10% rate = USD 84.
const getLeadValue = (_source: string): number => {
  return 0;
};

export const buildWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};
