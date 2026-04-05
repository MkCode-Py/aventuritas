import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Y si a mi hijo no le gusta el libro?",
    a: "Cada libro es cuidadosamente elegido según la edad y etapa de tu hijo. Pero si alguna vez no conecta con una historia, nuestro equipo está disponible para ayudarte con recomendaciones y alternativas. Lo importante es el ritual de leer juntos.",
  },
  {
    q: "¿Es adecuado para la edad de mi hijo?",
    a: "¡Sí! Al suscribirte, nos contás la edad de tu hijo y adaptamos cada caja a su etapa de desarrollo. Trabajamos con rangos de 0 a 8 años, con selecciones pensadas para cada momento.",
  },
  {
    q: "¿Y si no tenemos mucho tiempo para leer?",
    a: "Aventuritas está pensado justamente para familias con poco tiempo. No necesitás horas: con 10 a 15 minutos al día podés crear un ritual hermoso. La guía para padres incluye ideas rápidas y prácticas.",
  },
  {
    q: "¿Por qué suscribirse en lugar de comprar un libro suelto?",
    a: "Porque Aventuritas no es solo un libro. Es una experiencia mensual con actividades, guía para padres y curación profesional. Es la diferencia entre comprar ingredientes sueltos y recibir una receta completa con todo listo.",
  },
  {
    q: "¿Qué hace diferente a Aventuritas?",
    a: "Respetamos el ritmo, la forma y el mundo de cada niño. No vendemos libros al azar: creamos experiencias de lectura guiadas que ayudan a padres a conectar con sus hijos y a construir recuerdos significativos.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-16 md:py-24">
    <div className="container max-w-2xl">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary mb-3">❓ Preguntas frecuentes</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
          Todo lo que necesitás saber
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-none rounded-2xl bg-card shadow-sm px-6 data-[state=open]:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left font-heading font-bold text-sm md:text-base hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
