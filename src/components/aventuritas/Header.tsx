import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/aventuritas-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Planes", href: "#planes" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Regalar", href: "#regalo" },
  { label: "Preguntas", href: "#faq" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ES");

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0">
          <img src={logo} alt="Aventuritas" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language selector */}
          <button
            onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
            className="flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors rounded-full border border-border px-3 py-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang}
          </button>

          {/* CTA desktop */}
          <a
            href="#planes"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:brightness-105 transition-all shadow-md hover:shadow-lg"
          >
            Suscribite
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-2xl text-base font-semibold text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#planes"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center py-3 px-6 rounded-full bg-primary text-primary-foreground font-bold text-base shadow-md"
            >
              Suscribite
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
