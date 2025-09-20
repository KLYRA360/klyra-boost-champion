import { TrendingUp, Target, Rocket, Wrench, Handshake, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Situations = () => {
  const situations = [
    {
      icon: TrendingUp,
      title: "Préparer et structurer son entreprise pour la céder",
      description: "Maximiser la valeur et sécuriser la transmission en anticipant chaque étape."
    },
    {
      icon: Target,
      title: "Clarifier ses objectifs et définir une stratégie adaptée",
      description: "Passer d'une vision floue à un plan d'action concret et mesurable."
    },
    {
      icon: Rocket,
      title: "Valider un nouveau projet avant de se lancer",
      description: "Tester la faisabilité, identifier les risques et renforcer la confiance des partenaires."
    },
    {
      icon: Wrench,
      title: "Restructurer une partie de l'entreprise pour améliorer sa rentabilité",
      description: "Optimiser l'organisation, les process et les ressources pour gagner en efficacité."
    },
    {
      icon: Handshake,
      title: "Bénéficier d'un soutien moral et opérationnel externe",
      description: "Être épaulé par un regard neutre et expérimenté, avec un accompagnement personnalisé."
    },
    {
      icon: UserCheck,
      title: "Renforcer le leadership et la posture du dirigeant",
      description: "Développer sa vision, sa capacité à fédérer et sa résilience pour inspirer et mobiliser ses équipes."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Situations dans lesquelles nous intervenons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous accompagnons les dirigeants dans leurs défis les plus critiques avec une approche sur-mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {situations.map((situation, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-klyra/30 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2eb8a3]/10 p-3 rounded-xl group-hover:bg-[#2eb8a3]/20 transition-colors duration-300">
                    <situation.icon className="w-6 h-6" style={{ color: '#0b5057' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-klyra transition-colors duration-300">
                      {situation.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {situation.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="cta">
            <Link to="/contact">
              Échanger sur ma situation →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Situations;