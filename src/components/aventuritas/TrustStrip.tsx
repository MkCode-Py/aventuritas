import { BookOpen, Palette, Users, Sparkles } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Libros elegidos con cuidado",
    desc: "Seleccionados por edad, etapa e intereses de cada niño.",
    color: "bg-baby-blue/20 text-accent-foreground",
  },
  {
    icon: Palette,
    title: "Actividades complementarias",
    desc: "Ideas creativas para extender la magia de cada historia.",
    color: "bg-sage/20 text-secondary-foreground",
  },
  {
    icon: Users,
    title: "Guía para padres",
    desc: "Sugerencias prácticas para hacer de la lectura un ritual.",
    color: "bg-blush/20 text-foreground",
  },
  {
    icon: Sparkles,
    title: "Experiencia con propósito",
    desc: "Cada caja está pensada para crear recuerdos, no solo entretener.",
    color: "bg-primary/10 text-foreground",
  },
];

const TrustStrip = () => (
  <section className="py-12 md:py-20">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base mb-2 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
