import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-support.jpg";
import { ArrowRight, CheckCircle, Users, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-klyra-neutral-light via-background to-secondary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Support professionnel certifié
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-foreground">Votre </span>
                <span className="text-primary bg-gradient-hero bg-clip-text text-transparent">support</span>
                <span className="text-foreground"> d'excellence pour</span>
                <br />
                <span className="text-accent">réussir vos transitions</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                J'accompagne les dirigeants, porteurs de projet et organisations dans leurs moments clés 
                avec une méthodologie structurée et des résultats mesurables.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Demander votre diagnostic gratuit
                <ArrowRight className="ml-2" />
              </Button>
              {/* Alternative CTA ocre : <Button variant="cta" size="lg" className="text-lg">Demander votre diagnostic gratuit<ArrowRight className="ml-2" /></Button> */}
              <Button variant="outline-klyra" size="lg" className="text-lg">
                Découvrir la méthode
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-accent" />
                +50 dirigeants accompagnés
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
                className="w-full h-[600px] object-cover"
              />
            </Card>
            
            {/* Floating card */}
            <Card className="absolute -bottom-6 -left-6 p-6 bg-background shadow-strong border-l-4 border-l-accent">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-semibold text-foreground">Méthode éprouvée</div>
                  <div className="text-sm text-muted-foreground">Résultats mesurables</div>
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