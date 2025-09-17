import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Presentation, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Cadrage et prise de hauteur",
      description: "Analyse approfondie de votre situation actuelle, identification des enjeux prioritaires et définition claire des objectifs.",
      duration: "1-2 semaines",
      deliverables: [
        "Diagnostic complet de votre situation",
        "Cartographie des enjeux prioritaires",
        "Définition des objectifs SMART"
      ]
    },
    {
      number: "02", 
      icon: FileText,
      title: "Livrable personnalisé sur Notion",
      description: "Création d'un plan d'action structuré et personnalisé, avec tous les outils nécessaires pour votre réussite.",
      duration: "1 semaine",
      deliverables: [
        "Plan d'action détaillé et personnalisé",
        "Outils et méthodologies adaptés",
        "Tableau de bord de suivi"
      ]
    },
    {
      number: "03",
      icon: Presentation,
      title: "Restitution et activation",
      description: "Présentation du plan d'action, formation aux outils et lancement opérationnel de votre transformation.",
      duration: "1 semaine",
      deliverables: [
        "Session de présentation interactive",
        "Formation aux outils fournis",
        "Lancement des premières actions"
      ]
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Suivi et accompagnement",
      description: "Accompagnement continu pour assurer la réussite de votre projet avec ajustements et optimisations.",
      duration: "3-6 mois",
      deliverables: [
        "Points réguliers de suivi",
        "Ajustements du plan d'action",
        "Mesure des résultats obtenus"
      ]
    }
  ];

  return (
    <section id="methode" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Notre méthodologie
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Une méthode <span className="text-primary">structurée</span> en 4 étapes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre approche éprouvée garantit des résultats mesurables et durables 
            pour votre développement professionnel et organisationnel.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <Card key={index} className={`overflow-hidden hover:shadow-strong transition-all duration-300 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} h-full`}>
                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                        </div>
                        <div className="absolute -top-1 -right-1 p-2 bg-accent rounded-full">
                          <Icon className="w-4 h-4 text-accent-foreground" />
                        </div>
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {step.duration}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Livrables clés :</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual element */}
                  <div className="flex-shrink-0 lg:w-64 bg-gradient-to-br from-accent/5 to-primary/5 flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-accent border-accent/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-accent-foreground mb-4">
                Prêt à démarrer votre transformation ?
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                Commencez par un diagnostic gratuit pour identifier vos priorités et définir votre plan d'action.
              </p>
              <Button variant="hero" size="lg">
                Réserver mon diagnostic gratuit
                <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Methodology;