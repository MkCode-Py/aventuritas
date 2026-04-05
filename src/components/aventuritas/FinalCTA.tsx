import { Star, Sparkle, Heart } from "./FloatingDecorations";

const FinalCTA = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <div className="relative rounded-3xl bg-foreground p-10 md:p-16 text-center overflow-hidden">
        {/* Decorations */}
        <Star className="absolute top-6 left-8 w-5 h-5 text-primary/40 animate-twinkle" />
        <Sparkle className="absolute top-10 right-10 w-4 h-4 text-primary/30 animate-twinkle" style={{ animationDelay: "1s" }} />
        <Heart className="absolute bottom-8 left-12 w-4 h-4 text-blush/40 animate-float" />
        <Star className="absolute bottom-10 right-16 w-3 h-3 text-primary/20 animate-twinkle" style={{ animationDelay: "2s" }} />

        <div className="relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-background mb-4">
            La infancia pasa rápido.
            <br />
            Los recuerdos quedan para siempre.
          </h2>
          <p className="text-background/70 max-w-md mx-auto mb-8 leading-relaxed">
            Empezá hoy a crear esos pequeños momentos que tu hijo va a recordar toda la vida. Aventuritas te acompaña.
          </p>

          <a
            href="#planes"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
          >
            Quiero suscribirme ✨
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
