// Static prerender for English with Ale (single-page landing).
// Generates dist/index.html with:
//   1) Head schemas: Person (Ale), EducationalOccupationalProgram (the method),
//      Service (1:1 coaching), Offer (Plan Mensual + Trimestral), Organization,
//      FAQPage (8 questions), BreadcrumbList, WebSite.
//   2) Body content: SEO-readable HTML derived from the landing copy so bots
//      without JS execution see real content. React replaces this on hydration.
//
// Run as post-build step: `node scripts/prerender.mjs`
//
// Note: this is a single-page landing (only `/` route), so the prerender script
// is significantly simpler than the multi-route AlpesHome version.

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SOURCE_HTML = path.join(DIST, 'index.html');
const BASE_URL = 'https://englishwithale.com';

// ---------------------------------------------------------------------------
// SCHEMAS
// ---------------------------------------------------------------------------

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alejandra Jarupkin',
  alternateName: 'Ale',
  jobTitle: 'Online English Teacher for Hispanic Professionals',
  description:
    'Profesora de inglés con 28+ años de experiencia y 8 años especializados en adultos profesionales. Foco en desbloquear el habla inglesa profesional para latinos hispanohablantes en USA.',
  url: BASE_URL,
  email: 'englishwithale@gmail.com',
  knowsLanguage: ['es', 'en'],
  sameAs: [
    'https://www.linkedin.com/in/alejandra-jarupkin',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'English Language Teacher',
    occupationLocation: {
      '@type': 'AdministrativeArea',
      name: 'United States (online, focus on Texas, Florida, California)',
    },
    skills: [
      'English for professionals',
      'Business English',
      'English speaking unblocking',
      'IELTS preparation',
      'Cambridge B2/C1 First preparation',
      'TOEFL preparation',
      'PTE preparation',
      'English coaching for Hispanic adults',
    ],
  },
  workLocation: {
    '@type': 'Place',
    name: 'Concordia, Entre Ríos, Argentina (online classes worldwide)',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'English with Ale',
  alternateName: 'EWA',
  url: BASE_URL,
  description:
    'Marca de coaching de inglés 1:1 de Alejandra Jarupkin para profesionales latinos en Estados Unidos.',
  founder: { '@type': 'Person', name: 'Alejandra Jarupkin' },
  email: 'englishwithale@gmail.com',
  telephone: '+54-9-3454-14-2892',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'AdministrativeArea', name: 'Texas' },
    { '@type': 'AdministrativeArea', name: 'Florida' },
    { '@type': 'AdministrativeArea', name: 'California' },
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'GeoShape', name: 'Latin America' },
  ],
  sameAs: ['https://www.linkedin.com/in/alejandra-jarupkin'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'English with Ale',
  url: BASE_URL,
  inLanguage: 'es-US',
  publisher: { '@type': 'Person', name: 'Alejandra Jarupkin' },
};

const programSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  name: 'English with Ale — 1:1 Professional English Coaching',
  description:
    'Programa 1:1 de inglés profesional vía Zoom + WhatsApp diario, enfocado en destrabar el habla inglesa para profesionales latinos en USA. Sesiones semanales de 60 min + práctica diaria entre clases. Foco específico en reuniones, entrevistas, presentaciones y mails profesionales.',
  provider: { '@type': 'Person', name: 'Alejandra Jarupkin' },
  educationalProgramMode: 'online',
  inLanguage: ['es', 'en'],
  occupationalCategory: 'Professional English Learner',
  programType: 'Continuing Education',
  timeToComplete: 'P12W',
  numberOfCredits: { '@type': 'StructuredValue', name: '4 weekly sessions of 60 min + daily WhatsApp practice' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Online English coaching for Hispanic professionals',
  provider: { '@type': 'Person', name: 'Alejandra Jarupkin' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'AdministrativeArea', name: 'Texas' },
    { '@type': 'AdministrativeArea', name: 'Florida' },
    { '@type': 'AdministrativeArea', name: 'California' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planes English with Ale',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Plan Mensual',
        description:
          '4 clases 1:1 de 60 minutos vía Zoom + WhatsApp diario con Ale entre clases. Plan personalizado. Primera clase diagnóstica gratis. Cancelás cuando quieras.',
        price: '140',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '140',
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/#services`,
      },
      {
        '@type': 'Offer',
        name: 'Plan Trimestral',
        description:
          '12 clases 1:1 de 60 minutos vía Zoom + WhatsApp diario + 1 sesión bonus de simulacro (entrevista o presentación). Plan personalizado. Primera clase diagnóstica gratis.',
        price: '349',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '349',
          priceCurrency: 'USD',
          unitText: 'QUARTERLY',
        },
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/#services`,
      },
      {
        '@type': 'Offer',
        name: 'Clase Diagnóstica Gratuita',
        description:
          '30 minutos sin compromiso. Identificamos tus bloqueos reales y te llevás un plan claro al final.',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://calendly.com/english-ale25/diagnostica',
      },
    ],
  },
};

const FAQ = [
  [
    '¿Necesito un nivel mínimo de inglés para empezar?',
    'Sí, recomendamos nivel intermedio mínimo (B1). Si tu nivel es básico (A1-A2), la metodología 1:1 con foco profesional no es la más eficiente. En la clase diagnóstica gratis confirmamos tu nivel real y te recomendamos honestamente si EWA encaja o no.',
  ],
  [
    '¿En qué horarios hay disponibilidad para alumnos en USA?',
    'Ale trabaja con disponibilidad en Central Time (CT) y Eastern Time (ET), priorizando bandas after-work USA: 06-09 ET y 17-21 ET. Reserva online en Calendly.',
  ],
  [
    '¿Cómo se paga? ¿Aceptan tarjetas de USA?',
    'Sí, pagos seguros en USD con tarjeta de crédito o débito Visa, Mastercard o Amex (incluyendo emisores USA). Facturación mensual o trimestral.',
  ],
  [
    '¿Qué pasa si pierdo una clase o tengo que reprogramar?',
    'Las reprogramaciones se permiten con 24 horas de aviso. Situaciones laborales imprevistas se acomodan. No se acumulan clases perdidas indefinidamente.',
  ],
  [
    '¿Las clases son por Zoom? ¿Me queda algún material después?',
    'Sí, vía Zoom. Te quedan notas de la clase, grabación de la sesión y la conversación de WhatsApp con todos los ejercicios y audios.',
  ],
  [
    '¿Por qué USD 140/mes y no algo más barato como Cambly o Preply?',
    'Cambly y Preply son plataformas con tutores distintos cada clase y sin plan estructurado. EWA es 1:1 con la misma profesora, plan personalizado, seguimiento diario por WhatsApp (no solo durante clases), y experiencia bicultural. El costo refleja valor estructural, no horas sueltas.',
  ],
  [
    '¿Vamos a hablar solo en inglés desde la primera clase?',
    'No. Trabajamos en español + inglés según el momento. La primera clase es bilingüe. Las siguientes incrementan inglés gradualmente. Forzar inglés desde el día 1 puede ser contraproducente — primero hay que desarmar el bloqueo emocional.',
  ],
  [
    '¿Puedo cancelar si no me sirve?',
    'Sí, en cualquier momento. Sin contratos largos. Plan Mensual cancelable mes a mes. Si después del primer mes no sentís progreso, devolución total del Plan Mensual sin preguntas.',
  ],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
  ],
};

const SCHEMAS = [
  personSchema,
  organizationSchema,
  websiteSchema,
  programSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
];

// ---------------------------------------------------------------------------
// SEO BODY
// ---------------------------------------------------------------------------

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const SEO_BODY = `<div class="prerender-fallback" aria-hidden="false">
  <header>
    <p><em>Para latinos profesionales en Estados Unidos</em></p>
    <p><strong>Entiendes todo. Pero no te animas a hablar.</strong></p>
    <h1>Inglés 1:1 para tu trabajo — reuniones, entrevistas y mails</h1>
    <p>No es tu nivel — es el bloqueo de hablar. Trabajamos exactamente eso: no más gramática para memorizar, sí práctica diaria para destrabar la voz en tu trabajo. Horarios CT y ET. Pagos en USD con tarjeta. Cancelás cuando quieras.</p>
  </header>

  <nav aria-label="Secciones del sitio">
    <ul>
      <li><a href="#about">Sobre Ale</a></li>
      <li><a href="#how-it-works">Método</a></li>
      <li><a href="#services">Planes</a></li>
      <li><a href="#for-companies">Empresas</a></li>
      <li><a href="#testimonials">Casos</a></li>
      <li><a href="#faq">Preguntas frecuentes</a></li>
      <li><a href="#contact">Contacto</a></li>
      <li><a href="https://calendly.com/english-ale25/diagnostica">Reservar clase diagnóstica gratis</a></li>
    </ul>
  </nav>

  <section id="about">
    <h2>Sobre Alejandra Jarupkin</h2>
    <p>Soy Alejandra, profesora de inglés. Llevo más de 28 años enseñando, los últimos 8 con foco en adultos profesionales que necesitan usar el inglés todos los días en su trabajo.</p>
    <p>Trabajo principalmente con latinos que viven en Estados Unidos — sobre todo en Texas, Florida y California — y con profesionales latinoamericanos que reportan a equipos americanos o que están buscando dar el salto a USA.</p>
    <p>Mi especialidad no es la gramática avanzada. Es resolver el bloqueo de hablar: el momento en el que entendés todo lo que pasa en una reunión pero no sabés cómo intervenir, o el mail que reescribís cinco veces antes de mandar.</p>
    <p>Ese bloqueo casi nunca es de nivel. Es emocional — vergüenza, miedo a sonar simple, miedo a equivocarse delante de gente que respetás. Lo trato como lo que es: un patrón que se desarma con práctica acompañada, no con más reglas para memorizar.</p>
    <ul>
      <li>28+ años enseñando inglés a profesionales</li>
      <li>Disponibilidad horaria en CT y ET</li>
      <li>Mercados principales: Texas, Florida y California</li>
    </ul>
  </section>

  <section id="how-it-works">
    <h2>Cómo trabajamos — método en 4 pasos</h2>
    <ol>
      <li><strong>Diagnóstico gratuito.</strong> 30 minutos donde identificamos exactamente dónde se traba tu inglés profesional. Te llevás un plan claro, sin compromiso de pago.</li>
      <li><strong>Plan personalizado.</strong> Las clases se arman alrededor de tus desafíos reales: reuniones, entrevistas, presentaciones, mails. No usamos libros genéricos.</li>
      <li><strong>Práctica diaria por WhatsApp.</strong> Ejercicios cortos y audios entre clases. La conversación que pasa fuera del aula es lo que mueve la aguja.</li>
      <li><strong>Una clase 1:1 por semana.</strong> 60 minutos vía Zoom, en español + inglés según haga falta. Quedan notas y grabación para repasar.</li>
    </ol>
  </section>

  <section id="services">
    <h2>Planes</h2>
    <p>Mismo método, dos formas de empezar. La primera clase es siempre diagnóstico gratis para que pruebes antes de pagar.</p>

    <h3>Plan Mensual — USD 140/mes</h3>
    <ul>
      <li>USD 35 por clase efectivo</li>
      <li>4 clases 1:1 de 60 minutos</li>
      <li>WhatsApp diario con Ale entre clases</li>
      <li>Plan personalizado a tu objetivo</li>
      <li>Primera clase diagnóstica: gratis</li>
      <li>Cancelás cuando quieras, sin contratos largos</li>
    </ul>

    <h3>Plan Trimestral — USD 349/trimestre <em>(más elegido)</em></h3>
    <ul>
      <li>USD 29 por clase efectivo — ahorrás USD 71</li>
      <li>12 clases 1:1 de 60 minutos</li>
      <li>WhatsApp diario con Ale entre clases</li>
      <li>Plan personalizado a tu objetivo</li>
      <li>1 sesión bonus de simulacro (entrevista o presentación)</li>
      <li>Primera clase diagnóstica: gratis</li>
    </ul>

    <p><strong>Garantía sin riesgo:</strong> si la primera clase diagnóstica no aporta valor real, no pagás nada. Si después del primer mes no sentís progreso concreto, devolución del Plan Mensual sin preguntas.</p>
    <p><strong>Tu empresa puede reembolsártelo:</strong> entregamos comprobante detallado del programa para que tu manager o HR lo apruebe como capacitación profesional.</p>
  </section>

  <section id="for-companies">
    <h2>Inglés profesional para tu empresa (B2B)</h2>
    <p>Programas para equipos en empresas USA con colaboradores latinos, equipos LATAM reportando a HQ en USA, y operaciones bilingües. Tarifas por volumen, facturación en USD.</p>
    <ul>
      <li><strong>Grupos del mismo nivel:</strong> hasta 6 personas. Mismo nivel y mismo objetivo (equipo comercial, atención al cliente, técnico, leadership).</li>
      <li><strong>Reporte mensual a HR:</strong> seguimiento individual con métricas de progreso, asistencia y áreas de mejora. Reporte en inglés o español.</li>
      <li><strong>Onboarding en 5 días hábiles:</strong> diagnóstico de nivel + propuesta a medida + cronograma. Facturación en USD a entidad US o LATAM.</li>
    </ul>
  </section>

  <section id="testimonials">
    <h2>Resultados que veo en mis alumnos</h2>
    <p>Casos reales, anonimizados con permiso del alumno.</p>

    <h3>Account manager — Houston, TX</h3>
    <p>Antes (mes 1): silencio en reuniones con cliente. Después (mes 3): lidera discovery calls sin script.</p>

    <h3>Senior de marketing — Miami, FL</h3>
    <p>Antes (mes 1): reescribía cada mail tres veces. Después (mes 2): manda sin releer, sin culpa.</p>

    <p>¿Querés hablar con uno de ellos antes de pagar? Coordino sin compromiso.</p>
  </section>

  <section id="faq">
    <h2>Preguntas frecuentes</h2>
    <dl>
      ${FAQ.map(([q, a]) => `<dt>${escapeHtml(q)}</dt><dd>${escapeHtml(a)}</dd>`).join('\n      ')}
    </dl>
  </section>

  <section id="contact">
    <h2>Empezá con una clase diagnóstica gratis</h2>
    <p>30 minutos sin compromiso. Identificamos tus bloqueos reales con el inglés y te llevás un plan claro al final, decidas o no contratar.</p>
    <ul>
      <li><strong>Reserva online (Calendly):</strong> <a href="https://calendly.com/english-ale25/diagnostica">calendly.com/english-ale25/diagnostica</a></li>
      <li><strong>Email:</strong> englishwithale@gmail.com</li>
      <li><strong>WhatsApp:</strong> +54 9 3454 14-2892 (respuesta en horario laboral)</li>
    </ul>
    <p>Pagos seguros en USD con tarjeta Visa, Mastercard o Amex. Facturación mensual o trimestral según el plan.</p>
  </section>

  <footer>
    <p>English with Ale · Alejandra Jarupkin · Inglés 1:1 para profesionales latinos en USA · <a href="${BASE_URL}">${BASE_URL}</a></p>
  </footer>
</div>`;

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------

const renderSchemas = () =>
  SCHEMAS.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');

const patchHtml = (html) =>
  html
    .replace(/<\/head>/, `  <!-- Structured data (Schema.org JSON-LD) -->\n  ${renderSchemas()}\n</head>`)
    .replace(
      /<div id="root">[\s\S]*<\/div>(\s*<\/body>)/,
      `<div id="root">\n${SEO_BODY}\n</div>$1`
    );

async function main() {
  if (!existsSync(SOURCE_HTML)) {
    console.error(`[prerender] ${SOURCE_HTML} not found — run 'vite build' first.`);
    process.exit(1);
  }
  const baseHtml = await readFile(SOURCE_HTML, 'utf-8');
  const patched = patchHtml(baseHtml);
  await writeFile(SOURCE_HTML, patched, 'utf-8');
  console.log(`[prerender] patched dist/index.html with ${SCHEMAS.length} schemas + SEO body.`);
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
