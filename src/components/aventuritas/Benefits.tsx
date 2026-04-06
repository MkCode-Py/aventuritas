import { BookOpen, Heart, Lightbulb, HandHeart, MonitorOff, Camera } from "lucide-react";

const palette = [
  { bg: "var(--card-blush-bg)", border: "var(--card-blush-border)", icon: "var(--card-blush-icon)" },
  { bg: "var(--card-sage-bg)", border: "var(--card-sage-border)", icon: "var(--card-sage-icon)" },
  { bg: "var(--card-butter-bg)", border: "var(--card-butter-border)", icon: "var(--card-butter-icon)" },
  { bg: "var(--card-lilac-bg)", border: "var(--card-lilac-border)", icon: "var(--card-lilac-icon)" },
  { bg: "var(--card-blue-bg)", border: "var(--card-blue-border)", icon: "var(--card-blue-icon)" },
  { bg: "var(--card-blush-bg)", border: "var(--card-blush-border)", icon: "var(--card-blush-icon)" },
];

const benefits = [
  { icon: BookOpen, title: "Hábito de lectura", desc: "Sembrar el amor por los libros desde temprano es el mejor regalo educativo." },
  { icon: Heart, title: "Vínculo familiar", desc: "Leer juntos fortalece la conexión emocional entre padres e hijos." },
  { icon: Lightbulb, title: "Imaginación y creatividad", desc: "Cada historia abre mundos nuevos y despierta la curiosidad natural." },
  { icon: HandHeart, title: "Apoyo práctico para padres", desc: "Guías claras para que sepas cómo aprovechar cada lectura al máximo." },
  { icon: MonitorOff, title: "Menos pantallas, más presencia", desc: "Una alternativa hermosa al tiempo de pantalla pasivo, sin culpa ni presión." },
  { icon: Camera, title: "Recuerdos afectivos", desc: "Momentos que tu hijo recordará para siempre. Eso sí es invaluable." },
];

const Benefits = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-sm font-semibold text-primary mb-3">💛 ¿Por qué Aventuritas?</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          No es solo un libro. Es un momento que tu hijo recordará para siempre.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => {
          const c = palette[i % palette.length];
          return (
            <div
              key={b.title}
              className="p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center"
              style={{
                backgroundColor: `hsl(${c.bg} / 0.3)`,
                borderWidth: 1,
                borderColor: `hsl(${c.border} / 0.35)`,
                backdropFilter: 'blur(4px)',
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `hsl(${c.icon} / 0.35)` }}
              >
                <b.icon className="w-5 h-5" style={{ color: `hsl(${c.icon})` }} />
              </div>
              <h3 className="font-heading font-bold text-base mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Benefits;
