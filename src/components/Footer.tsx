import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import klyraLogo from "@/assets/klyra-logo-dark.png";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-klyra-green-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={klyraLogo} alt="KLYRA360 — logo" className="h-8 md:h-9 w-auto" loading="eager" />
              <div>
                <h3 className="text-xl font-bold">KLYRA360</h3>
                <p className="text-sm text-primary-foreground/80">CLARIFIER - STRUCTURER - IMPACTER</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Votre partenaire de confiance pour accompagner dirigeants, porteurs de projet 
              et organisations dans leurs transitions avec une méthode structurée et des résultats mesurables.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Support professionnel d'excellence</h4>
              <p className="text-sm text-primary-foreground/70">
                Diagnostic gratuit • Méthode éprouvée • Résultats garantis
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nos services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Support dirigeants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Accompagnement entreprises
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Coaching individuel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Diagnostic 360°
                </a>
              </li>
              <li>
                <a href="/urgence" className="hover:text-primary-foreground transition-colors">
                  Support d'urgence
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@klyra360.fr" className="hover:text-primary-foreground transition-colors">
                  contact@klyra360.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Disponible sur demande</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>France - Déplacements possibles</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="https://linkedin.com/in/cyril-lanzetto" 
                  className="hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cyril LANZETTO
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-primary-foreground/70">
              © 2024 KLYRA360 - Tous droits réservés
            </p>
            <div className="flex space-x-4 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Retour en haut
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;