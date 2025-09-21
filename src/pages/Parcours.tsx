import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, GraduationCap, Building2, Activity, Users, Target, Heart, Zap, Shield } from "lucide-react";
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
      year: "2006-2012",
      title: "Débuts terrain – bâtiment & PME",
      description: "Parcours opérationnel (chantier, logistique, petites structures). Apprentissage du 'faire' et de l'exécution.",
      icon: Hammer
    },
    {
      year: "2005, 2016-2017", 
      title: "Retour aux études & spécialisation",
      description: "Tech. étude/éco de la construction (2005), équivalent BAC scientifique (2016), BTS Opticien-Lunetier (2017).",
      icon: GraduationCap
    },
    {
      year: "2016-2024",
      title: "Visiopolis – chaîne d'optique",
      description: "Cofondateur. Croissance jusqu'à 1,8 M€ de CA en 10 ans. Cession en 2024.",
      icon: Building2
    },
    {
      year: "2022-…",
      title: "WYDEV – WYTEST / WYEXPERT",
      description: "Dépistage auditif & visuel + télé-expertise ORL/ophtalmo. Pilotes réseaux nationaux, industrialisation et partenariats.",
      icon: Activity
    },
    {
      year: "2022-…",
      title: "CJD Montpellier – engagement & leadership",
      description: "Membre actif, animation commission Objectif+. Posture de dirigeant, impact, éthique.",
      icon: Users
    },
    {
      year: "2024-…",
      title: "KLYRA360 – accompagnement de dirigeants",
      description: "Diagnostics 360°, stratégie d'exécution et coaching opérationnel. Clarté – Structure – Impact.",
      icon: Target
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
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(11, 80, 87, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left - Content */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-up">
                    Mon parcours
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    Un parcours atypique au service de la performance et de la transmission
                  </p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  <Button asChild variant="cta" size="lg">
                    <a href="#etapes-cles">
                      Découvrir mes étapes clés
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right - Photo */}
              <div className="text-center lg:text-right animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="inline-block relative">
                  <div className="w-96 h-96 bg-accent/20 rounded-full flex items-center justify-center">
                    <img 
                      src={cyrilPortrait} 
                      alt="Cyril Lanzetto, fondateur de KLYRA360"
                      className="w-80 h-80 rounded-full object-cover shadow-elegant"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
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

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Mes forces</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {strengths.map((strength, index) => (
                      <div key={index} className="flex items-center justify-center space-x-3">
                        <span className="w-2 h-2 bg-klyra rounded-full"></span>
                        <span className="text-muted-foreground">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="etapes-cles" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Étapes clés
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Icon circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center">
                          <item.icon className="w-8 h-8" style={{ color: '#0b5057' }} />
                        </div>
                      </div>
                      
                      {/* Content card */}
                      <Card className="flex-1 group hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                              {item.year}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
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
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8" style={{ color: '#0b5057' }} />
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
            <Button asChild variant="hero" size="lg">
              <a href="/#diagnostic">
                Échanger 30 min
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parcours;