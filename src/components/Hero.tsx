import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-support.jpg";
import { ArrowRight, CheckCircle, Users, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-klyra-neutral-light via-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-6">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Support professionnel certifié
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight max-w-[16ch]">
                <span className="text-foreground">Votre </span>
                <span className="text-primary bg-gradient-hero bg-clip-text text-transparent">support</span>
                <span className="text-foreground"> d'excellence pour</span>
                <br />
                <span className="text-accent">réussir vos transitions</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[60ch] mt-2">
                J'accompagne les dirigeants, porteurs de projet et organisations dans leurs moments clés 
                avec une méthodologie structurée et des résultats mesurables.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">360°</div>
                <div className="text-sm text-muted-foreground">Approche complète</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Étapes clés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Sur mesure</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a 
                href="/#diagnostic" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-lg"
              >
                Demander votre diagnostic gratuit
                <ArrowRight className="ml-2" />
              </a>
              {/* Alternative CTA ocre : <Button variant="cta" size="lg" className="text-lg">Demander votre diagnostic gratuit<ArrowRight className="ml-2" /></Button> */}
              <Button variant="outline-klyra" size="lg" className="text-lg">
                Découvrir la méthode
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-accent" />
                +20 dirigeants accompagnés
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-accent" />
                Résultats garantis
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Support professionnel pour dirigeants - Accompagnement d'entreprise KLYRA360"
                className="w-full h-[520px] lg:h-[560px] object-cover"
              />
            </Card>
            
            {/* Floating card */}
            <Card className="absolute -bottom-4 -left-4 p-5 bg-background shadow-strong border-l-4 border-l-accent">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Méthode éprouvée</div>
                  <div className="text-xs text-muted-foreground">Résultats mesurables</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;