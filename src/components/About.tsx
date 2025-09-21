import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import cyrilPortrait from "@/assets/cyril-portrait.jpg";
const About = () => {
  const achievements = [{
    icon: Users,
    number: "50+",
    label: "Dirigeants accompagnés"
  }, {
    icon: Award,
    number: "15+",
    label: "Années d'expérience"
  }, {
    icon: Target,
    number: "95%",
    label: "Taux de satisfaction"
  }, {
    icon: TrendingUp,
    number: "100%",
    label: "Résultats mesurables"
  }];
  return <section id="a-propos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            À propos de KLYRA360
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Votre partenaire de <span className="text-primary">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avec plus de 15 ans d'expérience dans l'accompagnement des dirigeants, 
            je mets mon expertise au service de votre réussite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Photo and CTA */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative">
              <img 
                src={cyrilPortrait} 
                alt="Cyril Lanzetto" 
                loading="lazy"
                className="w-36 h-36 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full ring-4 ring-accent/30 shadow-lg object-cover"
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondateur de KLYRA360 et expert en accompagnement stratégique, j'aide les dirigeants 
                et organisations à naviguer leurs transitions avec succès.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ma méthode structurée en 4 étapes permet d'obtenir des résultats concrets et durables. 
                Que ce soit pour clarifier votre vision, structurer vos projets ou impacter positivement 
                votre organisation, je vous apporte le support personnalisé dont vous avez besoin.
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

        {/* Achievements and Testimonial */}
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

          {/* Testimonial */}
          <div className="space-y-8">
            <Card className="bg-gradient-accent border-accent/20 p-6">
              <CardContent className="p-0 space-y-4">
                <Quote className="w-8 h-8 text-accent-foreground/60" />
                <blockquote className="text-accent-foreground/90 italic">
                  "Cyril m'a accompagné dans une période de transition cruciale. 
                  Sa méthode structurée et son support constant ont été déterminants 
                  pour le succès de ma transformation."
                </blockquote>
                <div className="text-sm text-accent-foreground/70">
                  — Dirigeant d'entreprise, secteur technologique
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company info */}
        <Card className="bg-klyra-neutral-light/30 border-none">
          
        </Card>
      </div>
    </section>;
};
export default About;