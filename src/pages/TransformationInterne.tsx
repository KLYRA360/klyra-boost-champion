import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, TrendingUp, MessageSquare, ArrowRight, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TransformationInterne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Transformation Interne & Structuration Équipe | KLYRA360";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Accompagnement pour clarifier, structurer et fluidifier l'organisation interne de votre entreprise. Disponible à Montpellier et en visio."
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
            Transformation Interne & Organisation
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Structurer pour libérer l'énergie de l'entreprise
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Un accompagnement pragmatique pour fluidifier votre organisation, renforcer vos équipes 
            et créer un fonctionnement interne sain, lisible et performant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/#diagnostic">Commencer un diagnostic interne</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/#diagnostic">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Le problème */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Quand l'organisation ne suit plus, tout devient flou
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Dans de nombreuses entreprises, le dirigeant porte trop, les équipes se croisent sans se comprendre, 
            et les priorités changent sans structure claire. La transformation interne KLYRA permet de remettre 
            du sens, de fluidifier les interactions et de redonner à chacun un rôle lisible et équilibré.
          </p>
        </div>
      </section>

      {/* Pour quelles entreprises */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Un accompagnement conçu pour les TPE/PME en mouvement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Entreprises en croissance rapide qui perdent en clarté
              </h3>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Organisations avec tensions internes ou communication difficile
              </h3>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Équipes en perte d'alignement ou de cohésion
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 piliers */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
            La méthode KLYRA
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Simple, structurée et profondément humaine
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Clarification des rôles & responsabilités
                  </h3>
                  <p className="text-muted-foreground">
                    Redonner une place claire à chacun.
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
                    Fluidification des processus & décisions
                  </h3>
                  <p className="text-muted-foreground">
                    Réduire les lenteurs, blocages et frictions.
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
                    Alignement dirigeant / équipe
                  </h3>
                  <p className="text-muted-foreground">
                    Comprendre ce que chacun porte réellement.
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
                    Plan d'évolution interne
                  </h3>
                  <p className="text-muted-foreground">
                    Une trajectoire simple, réaliste et mesurable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptômes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Comment savoir si votre organisation a besoin d'évoluer ?
          </h2>
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <ul className="space-y-4">
              {[
                "Décisions lentes ou contradictoires",
                "Surcharge mentale du dirigeant",
                "Réunions improductives / communication floue",
                "Rôles mal définis, tensions ou incompréhensions",
                "Perte d'efficacité ou stagnation silencieuse"
              ].map((symptom, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Les résultats observés
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Communication interne plus fluide",
              "Responsabilités mieux réparties",
              "Équipes plus autonomes",
              "Regain de confiance et d'énergie",
              "Meilleure cohérence dans les décisions",
              "Fondations solides pour la suite"
            ].map((result, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulé */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Un processus clair en 3 étapes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Diagnostic interne
              </h3>
              <p className="text-muted-foreground">
                Observation + interviews + cartographie
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Restitution & axes prioritaires
              </h3>
              <p className="text-muted-foreground">
                Synthèse claire et plan d'action structuré
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Accompagnement sur mesure
              </h3>
              <p className="text-muted-foreground">
                Suivi personnalisé selon vos besoins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Comment se déroule cet accompagnement ?
          </h2>
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Sessions en présentiel à Montpellier ou en visio
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Durée variable selon la taille de l'entreprise
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">
                  Suivi régulier du dirigeant + des équipes clés
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
            Vous sentez que votre organisation doit évoluer ?
          </h2>
          <Button asChild size="lg" className="text-lg">
            <Link to="/#diagnostic">
              Commencer un diagnostic interne
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
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
                Peut-on transformer une équipe sans tout bouleverser ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, absolument. L'approche KLYRA repose sur des ajustements progressifs et pragmatiques, 
                sans rupture brutale. L'objectif est d'améliorer ce qui existe déjà, en respectant l'humain 
                et le rythme de l'entreprise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Est-ce adapté aux petites équipes (2 à 10 personnes) ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, même dans une petite équipe, les enjeux de clarté des rôles, de communication 
                et d'organisation sont essentiels. L'accompagnement est adapté à la taille de votre structure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Combien de temps prend une transformation interne ?
              </AccordionTrigger>
              <AccordionContent>
                Cela dépend de la situation de départ et de la profondeur de l'accompagnement souhaité. 
                En général, les premiers résultats se font sentir dès les premières semaines. Une transformation 
                complète peut s'étaler sur plusieurs mois, avec un suivi régulier.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Est-ce possible en 100 % visio ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, l'accompagnement peut être réalisé entièrement à distance. Cependant, pour certaines 
                phases de diagnostic ou d'observation, une session en présentiel peut apporter une valeur ajoutée, 
                notamment pour mieux capter la dynamique d'équipe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransformationInterne;
