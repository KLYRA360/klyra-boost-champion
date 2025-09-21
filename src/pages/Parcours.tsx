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
      metaDescription.setAttribute('content', "Parcours atypique de Cyril Lanzetto : de petit délinquant à entrepreneur prospère. Découvrez 15 ans d'expérience en création et cession d'entreprises.");
    }
  }, []);

  const timeline = [
    {
      year: "Début de carrière",
      title: "Ouvrier, magasinier, maçon",
      description: "Parcours terrain dans le bâtiment et dans de nombreuses petites structures. Formation sur le tas et auto-apprentissage pendant de nombreuses années - le dur, le terrain, les premiers pas."
    },
    {
      year: "22-34 ans", 
      title: "Formation et spécialisation",
      description: "Diplôme de technicien du bâtiment, puis Bac Scientifique à Montpellier et diplôme d'opticien à l'ISO Marseille."
    },
    {
      year: "2016-2024",
      title: "Visiopolis - Chaîne d'optique",
      description: "Cofondation et développement jusqu'à 1,8 M€ de CA en 10 ans. Cession réussie en 2024."
    },
    {
      year: "2022-2025",
      title: "CJD Montpellier et Klyra360",
      description: "Membre actif CJD, animation commission Objectif+. Fondation de Klyra360 pour accompagner les transitions."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Clarté",
      description: "La performance n'est rien sans la clarté. Des objectifs nets et un cap maintenu."
    },
    {
      icon: Zap,
      title: "Structure",
      description: "Un cadre clair, un déroulé précis. Une approche méthodique orientée résultats."
    },
    {
      icon: Heart,
      title: "Action",
      description: "La clarté n'est rien sans l'action. Livrables concrets et plan d'action en main."
    },
    {
      icon: Shield,
      title: "Passion",
      description: "L'action n'est rien sans la passion. Un engagement total pour vos réussites."
    }
  ];

  const strengths = [
    "Rigueur et maîtrise (Karaté 2e dan)",
    "Performance et endurance (CrossFit)",
    "Stratégie et adaptation (VTT)",
    "Discipline et résultats concrets"
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
              Un parcours atypique au service de la performance et de la transmission
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
                  Rien, dans mes débuts, ne laissait présager que je deviendrais chef d'entreprise. Mon enfance a été mouvementée, parfois compliquée, et mon parcours scolaire chaotique.
                </p>
                <p>
                  De petit délinquant à entrepreneur passionné, j'ai appris, expérimenté, échoué et rebondi… jusqu'à créer plusieurs sociétés prospères.
                </p>
                <p>
                  Parti de rien, j'ai cofondé Visiopolis, développée jusqu'à 1,8 M€ de CA avant sa cession en 2024. Aujourd'hui, j'accompagne dirigeants et équipes vers la performance.
                </p>
                <p>
                  Ma conviction : "Je ne suis pas là pour dire ce que vous voulez entendre, mais pour identifier les leviers de performance… même si cela bouscule."
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