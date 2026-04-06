import { Search, PackageOpen, BookHeart, Heart } from "lucide-react";

const palette = [
  { bg: "var(--card-blue-bg)", border: "var(--card-blue-border)", icon: "var(--card-blue-icon)" },
  { bg: "var(--card-lilac-bg)", border: "var(--card-lilac-border)", icon: "var(--card-lilac-icon)" },
  { bg: "var(--card-butter-bg)", border: "var(--card-butter-border)", icon: "var(--card-butter-icon)" },
  { bg: "var(--card-sage-bg)", border: "var(--card-sage-border)", icon: "var(--card-sage-icon)" },
];

const steps = [
  { icon: Search, title: "Elegimos para vos", desc: "Seleccionamos libros y actividades según la edad y etapa de tu hijo." },
  { icon: PackageOpen, title: "Llega a tu casa", desc: "Cada mes recibís una caja hermosa, lista para abrir juntos." },
  { icon: BookHeart, title: "Leen y comparten", desc: "Con la guía incluida, transformás unos minutos en un ritual de lectura." },
  { icon: Heart, title: "Crean recuerdos", desc: "Cada historia se convierte en un recuerdo compartido para toda la vida." },
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
        {steps.map((step, i) => {
          const c = palette[i % palette.length];
          return (
            <div
              key={step.title}
              className="flex gap-4 p-6 rounded-3xl shadow-sm"
              style={{
                backgroundColor: `hsl(${c.bg} / 0.3)`,
                borderWidth: 1,
                borderColor: `hsl(${c.border} / 0.35)`,
                backdropFilter: 'blur(4px)',
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `hsl(${c.icon} / 0.2)` }}
              >
                <step.icon className="w-5 h-5" style={{ color: `hsl(${c.icon})` }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary">{i + 1}.</span>
                  <h3 className="font-heading font-bold text-base text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorks;
