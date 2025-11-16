import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Heart, Shield, Users, Target, TrendingUp, ArrowRight, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SoutienMentalDirigeant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Soutien Mental Dirigeant – Charge Émotionnelle & Clarté | KLYRA360";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Soutien mental pour dirigeants et entrepreneurs : charge émotionnelle, fatigue, surcharge décisionnelle. Accompagnement à Montpellier et en visio."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soutien Mental & Charge Émotionnelle
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Accompagnement des Dirigeants
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Un espace solide et confidentiel pour alléger la charge mentale, clarifier vos pensées 
            et retrouver votre énergie de dirigeant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/#diagnostic">Parler à un mentor</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/#diagnostic">Planifier un premier échange</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Le constat */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Les dirigeants portent plus que ce qu'ils montrent
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Solitude, pression, surcharge décisionnelle, charge émotionnelle accumulée. 
            Derrière la performance apparente, beaucoup vivent un niveau de tension invisible. 
            Le soutien mental KLYRA offre un espace pour déposer, comprendre et alléger cette pression 
            tout en reprenant le contrôle.
          </p>
        </div>
      </section>

      {/* Les signaux d'alerte */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Comment savoir si vous portez trop ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Fatigue mentale persistante
              </h3>
              <p className="text-muted-foreground">
                Difficulté de concentration, esprit saturé
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Irritabilité ou perte de patience
              </h3>
              <p className="text-muted-foreground">
                Tensions avec équipes ou proches
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Perte d'envie ou d'élan
              </h3>
              <p className="text-muted-foreground">
                L'entreprise avance mais vous non
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Sensation d'être seul avec tout
              </h3>
              <p className="text-muted-foreground">
                Aucune place pour se confier sans enjeu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un soutien mental spécifique */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Un rôle unique nécessite un espace unique
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Les dirigeants n'ont pas besoin d'une thérapie, ni d'un discours de motivation. 
            Ils ont besoin d'un espace solide où parler vrai, déposer la pression, clarifier leurs émotions 
            et retrouver une posture lucide.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Un espace confidentiel
              </h3>
              <p className="text-muted-foreground">
                Sans jugement, sans enjeu, totalement sécurisé
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Un accompagnement lucide et humain
              </h3>
              <p className="text-muted-foreground">
                Pas de discours tout fait, juste de la clarté
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Un cadre concret pour transformer ce que vous vivez
              </h3>
              <p className="text-muted-foreground">
                Des outils, des actions, pas juste des mots
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'approche KLYRA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
            La méthode KLYRA
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Lucidité, humanité, structure
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Écoute active & compréhension profonde
                  </h3>
                  <p className="text-muted-foreground">
                    Comprendre ce que vous vivez réellement, sans filtre
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Mise en clarté émotionnelle & mentale
                  </h3>
                  <p className="text-muted-foreground">
                    Identifier ce qui vous pèse et pourquoi
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Détection des sources de surcharge
                  </h3>
                  <p className="text-muted-foreground">
                    Repérer ce qui doit changer en priorité
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Plan d'allègement + actions priorisées
                  </h3>
                  <p className="text-muted-foreground">
                    Des solutions concrètes et réalisables immédiatement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats observés */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Ce que les dirigeants ressentent après quelques sessions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Baisse nette de la charge mentale",
              "Regain d'énergie et de motivation",
              "Prise de recul sur les situations difficiles",
              "Relations plus pacifiées avec équipes et proches",
              "Décisions plus claires et plus rapides",
              "Sentiment de retrouver du contrôle"
            ].map((result, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Dirigeants, entrepreneurs, managers sous tension
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Surcharge émotionnelle liée à la pression
              </h3>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Solitude décisionnelle
              </h3>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Fatigue mentale liée à la croissance, au chaos ou à une crise
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Modalités */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Format de l'accompagnement
          </h2>
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Sessions de 60 à 90 minutes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Montpellier en présentiel ou visio
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Confidentialité totale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Fréquence au choix (toutes les 2 à 4 semaines)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Vous n'êtes pas seul. On peut en parler.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/#diagnostic">
                Parler à un mentor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/#diagnostic">Planifier un premier échange</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Est-ce une thérapie ?
              </AccordionTrigger>
              <AccordionContent>
                Non, ce n'est pas une thérapie. Il s'agit d'un accompagnement mental pragmatique 
                et structuré, spécialement conçu pour les dirigeants. L'objectif est de déposer 
                la charge émotionnelle, clarifier vos pensées et reprendre du contrôle sur ce que 
                vous vivez. Si un besoin thérapeutique apparaît, une réorientation sera proposée.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                En combien de sessions ressent-on un mieux ?
              </AccordionTrigger>
              <AccordionContent>
                Dès la première session, un allègement se fait souvent sentir. En 3 à 5 sessions, 
                la majorité des dirigeants constatent une baisse significative de leur charge mentale 
                et un regain d'énergie. L'accompagnement peut se poursuivre en fonction de vos besoins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Peut-on parler de sujets personnels ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, absolument. Le soutien mental ne sépare pas l'entreprise de l'humain qui la porte. 
                Vous pouvez aborder tout ce qui pèse sur vous : décisions d'entreprise, relations, 
                fatigue, doutes personnels, tout a sa place dans cet espace confidentiel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Est-ce adapté si mon entreprise va bien mais que moi non ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, c'est même un cas très fréquent. L'entreprise peut bien fonctionner en apparence 
                tout en vous épuisant intérieurement. Le soutien mental KLYRA est justement fait pour 
                ces situations où le dirigeant porte trop, même quand tout semble aller.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoutienMentalDirigeant;
