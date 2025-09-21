import { Button } from "@/components/ui/button";
import klyraLogo from "@/assets/klyra-logo-dark.png";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={klyraLogo} alt="KLYRA360 — logo" className="h-16 md:h-20 w-auto block shrink-0" loading="eager" />
          <div>
            <h1 className="text-xl font-bold text-primary">KLYRA360</h1>
            <p className="text-xs text-muted-foreground">CLARIFIER - STRUCTURER - IMPACTER</p>
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
          <a href="/urgence">
            <Button variant="outline-klyra" size="sm">
              Urgence
            </Button>
          </a>
          <a href="#diagnostic">
            <Button variant="cta" size="sm">
              Demander un diagnostic
            </Button>
          </a>
        </nav>

        <Button variant="outline-klyra" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;