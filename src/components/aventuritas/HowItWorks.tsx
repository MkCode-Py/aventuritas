import { Search, PackageOpen, BookHeart, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Elegimos para vos",
    desc: "Seleccionamos libros y actividades según la edad y etapa de tu hijo.",
    color: "bg-baby-blue/20",
  },
  {
    icon: PackageOpen,
    title: "Llega a tu casa",
    desc: "Cada mes recibís una caja hermosa, lista para abrir juntos.",
    color: "bg-sage/20",
  },
  {
    icon: BookHeart,
    title: "Leen y comparten",
    desc: "Con la guía incluida, transformás unos minutos en un ritual de lectura.",
    color: "bg-blush/20",
  },
  {
    icon: Heart,
    title: "Crean recuerdos",
    desc: "Cada historia se convierte en un recuerdo compartido para toda la vida.",
    color: "bg-primary/10",
  },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-sm font-semibold text-primary mb-3">🌟 ¿Cómo funciona?</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          De nuestra puerta a tu corazón
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Simple, pensado y lleno de cariño. Así es cada paso con Aventuritas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-4 p-6 rounded-3xl bg-card border border-border/40 shadow-sm">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${step.color}`}>
              <step.icon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-primary">{i + 1}.</span>
                <h3 className="font-heading font-bold text-base text-foreground">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
