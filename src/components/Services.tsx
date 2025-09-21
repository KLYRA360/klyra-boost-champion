import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  User, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Target,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Dirigeants & Porteurs de projet",
      description: "Support stratégique pour clarifier votre vision et structurer votre développement",
      features: [
        "Diagnostic 360° de votre situation",
        "Plan d'action personnalisé",
        "Accompagnement dans la prise de décision",
        "Suivi régulier des résultats"
      ],
      price: "À partir de 1500€",
      duration: "3-6 mois",
      tag: "Populaire"
    },
    {
      icon: Users,
      title: "Entreprises & Organisations",
      description: "Accompagnement collectif pour transformer vos équipes et optimiser vos processus",
      features: [
        "Audit organisationnel complet",
        "Formation des équipes dirigeantes",
        "Mise en place de nouvelles méthodes",
        "Mesure de l'impact et ajustements"
      ],
      price: "Sur devis",
      duration: "6-12 mois",
      tag: "Entreprise"
    },
    {
      icon: User,
      title: "Coaching Individuel",
      description: "Support personnel pour atteindre vos objectifs et développer votre leadership",
      features: [
        "Sessions individuelles régulières",
        "Outils de développement personnel",
        "Stratégie d'atteinte des objectifs",
        "Accompagnement dans les transitions"
      ],
      price: "180€/séance",
      duration: "3 mois minimum",
      tag: "Individuel"
    }
  ];

  return (
    <section id="services" className="py-20 bg-klyra-neutral-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nos services de support
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Un support adapté à <span className="text-primary">chaque besoin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez dirigeant, porteur de projet ou organisation, 
            nous avons la solution de support qui vous correspond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative h-full hover:shadow-strong transition-all duration-300 group">
                {service.tag && (
                  <Badge 
                    variant={service.tag === "Populaire" ? "default" : "secondary"} 
                    className="absolute -top-3 left-6 z-10"
                  >
                    {service.tag}
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">À partir de</span>
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                    </div>
                    
                    <a href="#diagnostic">
                      <Button variant="outline-klyra" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        Demander un devis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency support CTA */}
        <Card className="mt-12 bg-gradient-accent border-accent/20">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent-foreground/10 rounded-lg">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-foreground">Support d'urgence</h3>
                  <p className="text-accent-foreground/80">
                    Besoin d'un accompagnement immédiat ? Contactez-nous pour un diagnostic flash.
                  </p>
                </div>
              </div>
              <a href="#diagnostic">
                <Button variant="hero" size="lg">
                  Diagnostic immédiat
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              {/* Alternative CTA ocre pour fin de page diagnostic : <Button variant="cta" size="lg">Diagnostic immédiat<ArrowRight className="ml-2" /></Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;