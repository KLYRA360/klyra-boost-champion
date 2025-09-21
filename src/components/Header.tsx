import { Button } from "@/components/ui/button";
import klyraLogo from "@/assets/klyra-logo.png";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4">
        <a href="/" className="flex items-center gap-2 md:gap-3">
          <img
            src={klyraLogo}
            alt="KLYRA360 — logo"
            className="h-8 md:h-10 lg:h-12 w-auto shrink-0"
            loading="eager"
          />
          <div className="flex flex-col justify-center h-8 md:h-10 lg:h-12 leading-none">
            <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight leading-none text-primary">
              KLYRA360
            </span>
            <span className="text-[10px] md:text-xs lg:text-sm text-muted-foreground tracking-wide leading-none uppercase">
              CLARIFIER · STRUCTURER · IMPACTER
            </span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#methode" className="text-foreground hover:text-primary transition-colors">
            Méthode
          </a>
          <a href="#a-propos" className="text-foreground hover:text-primary transition-colors">
            À propos
          </a>
          <Button variant="cta" size="sm">
            Demander un diagnostic
          </Button>
        </nav>

        <Button variant="outline-klyra" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;