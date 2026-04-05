import { Check, Star } from "lucide-react";

interface PlanProps {
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const PlanCard = ({ name, tagline, features, highlighted, badge }: PlanProps) => (
  <div
    className={`relative flex flex-col rounded-3xl p-6 md:p-8 border transition-all ${
      highlighted
        ? "bg-card border-primary/30 shadow-lg scale-[1.02] ring-2 ring-primary/20"
        : "bg-card border-border/40 shadow-sm hover:shadow-md"
    }`}
  >
    {badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
          <Star className="w-3 h-3" /> {badge}
        </span>
      </div>
    )}

    <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-1 mt-2">{name}</h3>
    <p className="text-sm text-muted-foreground mb-6">{tagline}</p>

    <ul className="flex-1 space-y-3 mb-8">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
          <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <button
      className={`w-full py-3.5 rounded-full font-bold text-sm transition-all ${
        highlighted
          ? "bg-primary text-primary-foreground shadow-md hover:brightness-105"
          : "bg-muted text-foreground hover:bg-muted/80"
      }`}
    >
      Próximamente
    </button>
  </div>
);

const plans: PlanProps[] = [
  {
    name: "Plan Esencial",
    tagline: "La forma más simple de empezar a leer juntos.",
    features: [
      "1 libro cuidadosamente seleccionado",
      "Ficha de lectura guiada",
      "Recomendaciones por edad",
      "Envío a domicilio",
    ],
  },
  {
    name: "Plan Encanto",
    tagline: "Más conexión, más momentos compartidos.",
    features: [
      "Todo lo del Plan Esencial",
      "Actividad creativa complementaria",
      "Guía para padres con ideas prácticas",
      "Sorpresa temática mensual",
      "Empaque especial de regalo",
    ],
    highlighted: true,
    badge: "Más elegido",
  },
  {
    name: "Plan Descubrimiento",
    tagline: "La experiencia mensual más completa para tu familia.",
    features: [
      "Todo lo del Plan Encanto",
      "2 libros seleccionados por mes",
      "Material de exploración sensorial",
      "Acceso a comunidad de familias lectoras",
      "Contenido digital exclusivo",
    ],
  },
];

const PlansSection = () => (
  <section id="planes" className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-sm font-semibold text-primary mb-3">📦 Nuestros planes</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Elegí la experiencia ideal para tu familia
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Cada plan está diseñado para adaptarse a tu ritmo y crear momentos de lectura inolvidables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;
