import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Zap, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cyrilPortrait from "@/assets/cyril-portrait.jpg";

const Parcours = () => {
  useEffect(() => {
    document.title = "Mon parcours – KLYRA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "15 ans d'entrepreneuriat et d'accompagnement terrain. Découvrez le parcours de Cyril Lanzetto, fondateur de KLYRA.");
    }
  }, []);

  const timeline = [
    {
      year: "2009-2015",
      title: "Création et développement d'entreprises",
      description: "Fondation et développement de plusieurs structures entrepreneuriales dans différents secteurs d'activité."
    },
    {
      year: "2016-2020", 
      title: "Direction générale et transformation",
      description: "Management d'équipes, restructuration d'organisations et pilotage de projets de transformation majeurs."
    },
    {
      year: "2021-2023",
      title: "Conseil stratégique indépendant",
      description: "Accompagnement de dirigeants dans leurs décisions stratégiques et leurs transitions d'entreprise."
    },
    {
      year: "2024",
      title: "Création de KLYRA",
      description: "Lancement de la méthode d'accompagnement structurée pour sécuriser les transitions entrepreneuriales."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Clarté",
      description: "Des objectifs nets, des étapes précises, un cap maintenu en toutes circonstances."
    },
    {
      icon: Zap,
      title: "Structure",
      description: "Une approche méthodique et des outils éprouvés pour maximiser vos chances de réussite."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Des résultats concrets et mesurables qui transforment durablement votre entreprise."
    },
    {
      icon: Shield,
      title: "Honneur",
      description: "Un engagement total, une confidentialité absolue et une loyauté sans faille."
    }
  ];

  const strengths = [
    "Courage face aux défis complexes",
    "Exigence dans l'exécution",
    "Clarté dans la communication",
    "Capacité d'exécution terrain"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Mon parcours
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              15 ans d'entrepreneuriat, d'accompagnement et d'exécution terrain
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left - Photo */}
              <div className="text-center lg:text-left">
                <div className="inline-block">
                  <img 
                    src={cyrilPortrait} 
                    alt="Cyril Lanzetto"
                    className="w-80 h-80 rounded-full object-cover shadow-elegant mx-auto lg:mx-0"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Entrepreneur depuis 2009, j'ai créé, développé et dirigé plusieurs entreprises dans des secteurs variés. Cette expérience m'a donné une compréhension concrète des défis que rencontrent les dirigeants.
                  </p>
                  <p>
                    Après avoir accompagné de nombreux entrepreneurs dans leurs transitions les plus critiques, j'ai créé KLYRA pour structurer cette expertise et la rendre accessible.
                  </p>
                  <p>
                    Ma conviction : chaque transition réussie repose sur une préparation méthodique, une exécution rigoureuse et un accompagnement adapté.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Mes forces</h3>
                  <ul className="space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-klyra rounded-full"></span>
                        <span className="text-muted-foreground">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Étapes clés
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex-shrink-0">
                          <span className="inline-block bg-klyra text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                            {item.year}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Valeurs & approche
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident chaque accompagnement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="bg-klyra/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-klyra/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-klyra" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à échanger ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de votre situation et voyons comment je peux vous accompagner
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/contact">
                Échanger 30 min
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parcours;