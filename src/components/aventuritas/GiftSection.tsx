import { Gift, Heart } from "lucide-react";
import { Star, Sparkle } from "./FloatingDecorations";

const GiftSection = () => (
  <section id="regalo" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <div className="relative rounded-3xl bg-card border border-border/40 shadow-md p-8 md:p-12 text-center overflow-hidden">
        {/* Decorations */}
        <Star className="absolute top-4 left-6 w-4 h-4 text-primary/20 animate-twinkle" />
        <Sparkle className="absolute bottom-6 right-8 w-3 h-3 text-sage/30 animate-twinkle" style={{ animationDelay: "1s" }} />
        <Heart className="absolute top-6 right-12 w-4 h-4 text-blush/30 animate-float" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Gift className="w-7 h-7 text-primary" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
            🎁 Regalo con propósito
          </h2>

          <p className="text-muted-foreground mb-3 max-w-md mx-auto leading-relaxed">
            ¿Buscás un regalo diferente para tu nieto, ahijado o sobrino? Aventuritas es un regalo que se renueva cada mes y llena de magia la infancia.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
            No es un juguete más. Es una experiencia de lectura, creatividad y cariño que conecta familias.
          </p>

          <a
            href="#planes"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-md hover:shadow-lg hover:brightness-105 transition-all"
          >
            <Gift className="w-4 h-4" />
            Regalar Aventuritas
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default GiftSection;
