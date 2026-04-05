import { Star, Cloud, Sparkle, Heart } from "./FloatingDecorations";

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
    {/* Decorations */}
    <Star className="absolute top-12 left-6 w-5 h-5 text-primary/30 animate-twinkle" />
    <Star className="absolute top-24 right-10 w-4 h-4 text-primary/25 animate-twinkle" style={{ animationDelay: "1s" }} />
    <Sparkle className="absolute top-16 right-1/4 w-3 h-3 text-sage/40 animate-twinkle" style={{ animationDelay: "0.5s" }} />
    <Cloud className="absolute bottom-8 left-4 w-20 h-10 text-baby-blue/20 animate-drift" />
    <Cloud className="absolute top-8 right-8 w-16 h-8 text-baby-blue/15 animate-drift" style={{ animationDelay: "2s" }} />
    <Heart className="absolute bottom-16 right-12 w-4 h-4 text-blush/40 animate-float" style={{ animationDelay: "1.5s" }} />
    <Sparkle className="absolute bottom-24 left-1/3 w-3 h-3 text-primary/20 animate-twinkle" style={{ animationDelay: "2s" }} />

    <div className="container relative z-10 text-center max-w-3xl mx-auto">
      {/* Small badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 shadow-sm mb-8">
        <span className="text-sm">✨</span>
        <span className="text-xs font-semibold text-muted-foreground">Suscripción mensual de lectura para familias</span>
      </div>

      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
        Pequeños momentos hoy.{" "}
        <span className="text-primary">Grandes recuerdos</span>{" "}
        para toda la vida.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
        Cada mes, una caja con libros cuidadosamente elegidos, actividades creativas y una guía para que leer juntos sea el momento más lindo del día.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#planes"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
        >
          Descubrí los planes ✨
        </a>
        <a
          href="#como-funciona"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-card border-2 border-border text-foreground font-semibold text-base hover:bg-muted transition-all"
        >
          ¿Cómo funciona?
        </a>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        🎁 También podés regalarlo a alguien especial
      </p>
    </div>
  </section>
);

export default Hero;
