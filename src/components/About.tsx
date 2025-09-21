import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import cyrilPortrait from "@/assets/cyril-portrait.jpg";

const About = () => {
  const achievements = [{
    icon: Users,
    number: "20+",
    label: "Dirigeants & entreprises accompagnés"
  }, {
    icon: Award,
    number: "15+",
    label: "Années d'entrepreneuriat"
  }, {
    icon: Target,
    number: "95%",
    label: "Taux de satisfaction"
  }, {
    icon: TrendingUp,
    number: "100%",
    label: "Résultats mesurables"
  }];

  const testimonials = [
    {
      text: "En 6 semaines, nous avons clarifié la stratégie et lancé 3 chantiers clés. Résultats concrets, équipe mobilisée.",
      author: "DG, distribution"
    },
    {
      text: "La méthode est simple, mais redoutablement efficace. On sait quoi faire lundi matin.",
      author: "CEO, services B2B"
    },
    {
      text: "Regard externe, structure, exigence : impact immédiat sur notre rentabilité.",
      author: "Président, industrie"
    }
  ];

  return <section id="a-propos" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            À propos de KLYRA360
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Votre partenaire de <span className="text-primary">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Après 15 ans d'entrepreneuriat, j'ai formalisé la Méthode KLYRA pour clarifier, structurer et délivrer vite — au service des dirigeants et de leurs équipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8 gap-y-6">
          {/* Left side - Photo */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img 
              src={cyrilPortrait} 
              alt="Cyril Lanzetto" 
              loading="lazy"
              className="w-[280px] md:w-[320px] h-[280px] md:h-[320px] rounded-full ring-4 ring-accent/30 shadow object-cover"
            />
          </div>

          {/* Right side - About content */}
          <div className="space-y-4 order-1 md:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Cyril LANZETTO</h3>
              
              <p className="text-muted-foreground leading-relaxed max-w-prose">
                La Méthode KLYRA est un cadre simple et exigeant, appliqué par nos coachs certifiés. Elle transforme une intention en plan d'action mesurable, avec des résultats concrets en quelques semaines.
              </p>
              
              <p className="text-muted-foreground leading-relaxed max-w-prose">
                Fondée par Cyril Lanzetto, KLYRA conçoit et transmet une méthode d'exécution pragmatique : regard extérieur, clarté, mise en mouvement.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Mon approche :</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Support personnalisé adapté à vos enjeux spécifiques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Méthodologie éprouvée avec résultats mesurables</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Accompagnement pragmatique orienté action</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Disponibilité et réactivité garanties</span>
                </li>
              </ul>
            </div>

            <Button asChild variant="outline-klyra" size="lg" className="mt-6">
              <Link to="/mon-parcours">
                En savoir plus sur mon parcours
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-border my-8"></div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="rounded-2xl border border-border bg-white p-6 h-full flex flex-col items-center justify-center text-center">
                <CardContent className="p-0 space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold text-primary">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-10 md:mt-12">
          <h4 className="text-xl font-semibold text-center text-foreground mb-6">Témoignages</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-2xl border border-border bg-secondary/30 p-6 h-full flex flex-col">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 mb-3">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                  <blockquote className="text-foreground leading-relaxed line-clamp-3 flex-1">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground font-medium mt-auto pt-3">
                    — {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default About;