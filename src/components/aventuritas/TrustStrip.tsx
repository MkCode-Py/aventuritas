import { BookOpen, Palette, Users, Sparkles } from "lucide-react";

const palette = [
  { bg: "var(--card-sage-bg)", border: "var(--card-sage-border)", icon: "var(--card-sage-icon)" },
  { bg: "var(--card-blue-bg)", border: "var(--card-blue-border)", icon: "var(--card-blue-icon)" },
  { bg: "var(--card-blush-bg)", border: "var(--card-blush-border)", icon: "var(--card-blush-icon)" },
  { bg: "var(--card-butter-bg)", border: "var(--card-butter-border)", icon: "var(--card-butter-icon)" },
];

const items = [
  {
    icon: BookOpen,
    title: "Libros elegidos con cuidado",
    desc: "Seleccionados por edad, etapa e intereses de cada niño.",
  },
  {
    icon: Palette,
    title: "Actividades complementarias",
    desc: "Ideas creativas para extender la magia de cada historia.",
  },
  {
    icon: Users,
    title: "Guía para padres",
    desc: "Sugerencias prácticas para hacer de la lectura un ritual.",
  },
  {
    icon: Sparkles,
    title: "Experiencia con propósito",
    desc: "Cada caja está pensada para crear recuerdos, no solo entretener.",
  },
];

const TrustStrip = () => (
  <section className="py-12 md:py-20">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, i) => {
          const c = palette[i % palette.length];
          return (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              style={{
                backgroundColor: `hsl(${c.bg} / 0.3)`,
                borderWidth: 1,
                borderColor: `hsl(${c.border} / 0.35)`,
                backdropFilter: 'blur(4px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `hsl(${c.icon} / 0.2)` }}
              >
                <item.icon className="w-6 h-6" style={{ color: `hsl(${c.icon})` }} />
              </div>
              <h3 className="font-heading font-bold text-base mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrustStrip;
