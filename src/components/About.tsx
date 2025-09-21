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
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8 gap-y-8 mb-12">
          {/* Left side - Photo and CTA */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="relative">
              <img 
                src={cyrilPortrait} 
                alt="Cyril Lanzetto" 
                loading="lazy"
                className="w-[260px] md:w-[320px] h-[260px] md:h-[320px] rounded-full ring-4 ring-accent/30 shadow-lg object-cover"
              />
            </div>
            
            <Button asChild variant="outline-klyra" size="lg">
              <Link to="/mon-parcours">
                En savoir plus sur mon parcours
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right side - About content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Cyril LANZETTO</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                La Méthode KLYRA est un cadre simple et exigeant, appliqué par nos coachs certifiés. Elle transforme une intention en plan d'action mesurable, avec des résultats concrets en quelques semaines.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
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
          </div>
        </div>

        {/* Achievements and Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Achievements */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return <Card key={index} className="text-center p-6 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-0 space-y-3">
                      <div className="p-3 bg-accent/10 rounded-lg inline-block">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
          
          <div className="space-y-8">
            <div></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h4 className="text-xl font-semibold text-center text-foreground">Témoignages</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary/50 border p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-accent/15 rounded-full">
                      <Quote className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <blockquote className="text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground font-medium">
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