import logo from "@/assets/aventuritas-logo.png";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-10 md:py-14">
    <div className="container max-w-4xl">
      <div className="flex flex-col items-center text-center gap-6">
        <img src={logo} alt="Aventuritas" className="h-10 w-auto" />

        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          Aventuritas es una experiencia mensual de lectura guiada para familias con niños de 0 a 8 años. Creemos que los mejores recuerdos se construyen con presencia, imaginación y cariño.
        </p>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-foreground/70">
          <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
          <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
          <a href="#regalo" className="hover:text-primary transition-colors">Regalar</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="w-full border-t border-border/30 pt-6 mt-2">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-blush inline" /> en Paraguay · © {new Date().getFullYear()} Aventuritas
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
