import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import klyraLogo from "@/assets/klyra-logo-dark.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Desktop and mobile top bar */}
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={klyraLogo} alt="KLYRA360 — logo" className="h-16 md:h-20 w-auto block shrink-0" loading="eager" />
            <div>
              <h1 className="text-xl font-bold text-primary">KLYRA360</h1>
              <p className="text-xs text-muted-foreground">CLARIFIER - STRUCTURER - IMPACTER</p>
            </div>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/mon-parcours" className="text-foreground hover:text-primary transition-colors">
              Mon Parcours
            </a>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Accompagnement Dirigeants
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/mentoring-dirigeant-montpellier" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors rounded-t-lg">
                  Mentoring Dirigeant Montpellier
                </a>
                <a href="/diagnostic-strategique" className="block px-4 py-3 text-muted-foreground hover:bg-muted transition-colors rounded-b-lg">
                  Diagnostic Stratégique 360°
                </a>
              </div>
            </div>
            <a href="/articles" className="text-foreground hover:text-primary transition-colors">
              Articles
            </a>
            <a href="/nous-rejoindre" className="text-foreground hover:text-primary transition-colors">
              Nous rejoindre
            </a>
            <a href="/urgence">
              <Button variant="outline-klyra" size="sm">
                Urgence
              </Button>
            </a>
            <a href="/#diagnostic">
              <Button variant="cta" size="sm">
                Contact
              </Button>
            </a>
          </nav>

          {/* Mobile menu button only */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Urgence button - positioned above menu */}
        <div className="md:hidden mt-2 flex justify-end">
          <a href="/urgence">
            <Button variant="outline-klyra" size="sm">
              Urgence
            </Button>
          </a>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="/mon-parcours" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mon Parcours
              </a>
              <div className="py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Accompagnement Dirigeants</p>
                <div className="flex flex-col space-y-2 pl-4">
                  <a 
                    href="/mentoring-dirigeant-montpellier" 
                    className="text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mentoring Dirigeant Montpellier
                  </a>
                  <a 
                    href="/diagnostic-strategique" 
                    className="text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Diagnostic Stratégique 360°
                  </a>
                </div>
              </div>
              <a 
                href="/articles" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </a>
              <a 
                href="/nous-rejoindre" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nous rejoindre
              </a>
              <a href="/#diagnostic" onClick={() => setIsMenuOpen(false)}>
                <Button variant="cta" size="sm" className="w-full">
                  Contact
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;