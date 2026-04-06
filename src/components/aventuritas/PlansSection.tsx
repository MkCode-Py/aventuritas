import { Check, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface PlanProps {
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  color: { bg: string; border: string; accent: string };
}

const PlanCard = ({ name, tagline, features, highlighted, badge, color }: PlanProps) => (
  <div className="relative flex flex-col h-full" style={{ paddingTop: badge ? 14 : 0 }}>
    {badge && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <span
          className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-bold shadow-lg text-white whitespace-nowrap"
          style={{ backgroundColor: `hsl(${color.accent})` }}
        >
          <Star className="w-3.5 h-3.5 flex-shrink-0" /> {badge}
        </span>
      </div>
    )}
    <div
      className="relative flex flex-col rounded-3xl p-6 md:p-8 transition-all flex-1"
      style={{
        backgroundColor: `hsl(${color.bg})`,
        borderWidth: highlighted ? 2 : 1,
        borderColor: `hsl(${color.border})`,
        boxShadow: highlighted
          ? `0 8px 30px -8px hsl(${color.border} / 0.4)`
          : `0 2px 12px -4px hsl(${color.border} / 0.25)`,
      }}
    >

    <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-1 mt-2">{name}</h3>
    <p className="text-sm text-muted-foreground mb-6">{tagline}</p>

    <ul className="flex-1 space-y-3 mb-8">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: `hsl(${color.accent})` }} />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <button
      className="w-full py-3.5 rounded-full font-bold text-sm transition-all text-white hover:brightness-105"
      style={{ backgroundColor: `hsl(${color.accent})` }}
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
    color: {
      bg: "var(--plan-sage-bg)",
      border: "var(--plan-sage-border)",
      accent: "140 30% 45%",
    },
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
    color: {
      bg: "var(--plan-blue-bg)",
      border: "var(--plan-blue-border)",
      accent: "200 45% 45%",
    },
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
    color: {
      bg: "var(--plan-blush-bg)",
      border: "var(--plan-blush-border)",
      accent: "15 50% 50%",
    },
  },
];

const DotIndicators = ({
  count,
  selected,
  onSelect,
}: {
  count: number;
  selected: number;
  onSelect: (i: number) => void;
}) => (
  <div className="flex justify-center gap-3 mt-6">
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`w-8 h-8 rounded-full font-bold text-xs transition-all ${
          i === selected
            ? "bg-primary text-primary-foreground shadow-md scale-110"
            : "bg-muted text-muted-foreground hover:bg-muted/70"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

const PlansSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: false,
    startIndex: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(1);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
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

        {isMobile ? (
          <>
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
              <div className="flex">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex-[0_0_82%] min-w-0 px-2 first:pl-6 last:pr-6"
                  >
                    <PlanCard {...plan} />
                  </div>
                ))}
              </div>
            </div>
            <DotIndicators
              count={plans.length}
              selected={selectedIndex}
              onSelect={scrollTo}
            />
          </>
        ) : (
          <div className="grid grid-cols-3 gap-5 items-start">
            {plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlansSection;
