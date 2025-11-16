import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Compass, Users, Target, Search, Lightbulb, FileText, RefreshCw, CheckCircle2, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
const MentoringDirigeant = () => {
  useEffect(() => {
    document.title = "Mentoring Dirigeant Montpellier – Clarté, Soutien & Stratégie | KLYRA360";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Accompagnement et mentoring dirigeant à Montpellier : clarté, soutien moral et décisions stratégiques. Entretien découverte gratuit.");
    }
  }, []);
  const scrollToDiagnostic = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-klyra-neutral-light via-background to-secondary/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Mentoring Dirigeant à Montpellier : <span className="text-primary">clarté, soutien</span> et <span className="text-accent">décisions concrètes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Un espace neutre et structurant pour dirigeants, entrepreneurs et managers qui veulent retrouver du souffle, clarifier leur vision et prendre de meilleures décisions.
            </p>
            <Button variant="cta" size="lg" onClick={scrollToDiagnostic}>
              Réserver un appel découverte
            </Button>
          </div>
        </section>

        {/* SECTION 2 — Pourquoi ce mentoring */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Pourquoi un dirigeant a besoin de <span className="text-primary">mentoring</span> (et pas d'un "coach" de plus)
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center leading-relaxed">
                Diriger, c'est souvent avancer seul, porter les décisions, gérer les tensions et maintenir le cap sans personne à qui parler vraiment. Le mentoring dirigeant, ce n'est pas du coaching motivationnel : c'est un regard extérieur lucide, une structure claire, et un espace où vous pouvez poser les vraies questions sans jugement. C'est retrouver de la clarté mentale, identifier les angles morts, et prendre des décisions avec plus de recul et de confiance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Zone géographique */}
        <section className="py-16 md:py-20 px-6 bg-klyra-neutral-light/30">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-accent py-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Basé à <span className="text-primary">Montpellier</span> – actif en Occitanie, Nîmes, Marseille et Toulouse
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interventions en présentiel ou en distanciel, selon vos besoins et contraintes. Un accompagnement proche, flexible et adapté à votre contexte géographique et organisationnel.
            </p>
          </div>
        </section>

        {/* SECTION 4 — Les signaux d'alerte */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Les signaux qui montrent qu'il est temps d'agir
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Brain className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Fatigue mentale et perte de clarté
                </h3>
                <p className="text-muted-foreground">
                  Vous tournez en rond, les décisions sont floues, la charge mentale s'accumule.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Compass className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Stagnation ou perte de cap
                </h3>
                <p className="text-muted-foreground">
                  L'entreprise n'avance plus comme avant, vous avez perdu le fil directeur.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Sentiment d'isolement
                </h3>
                <p className="text-muted-foreground">
                  Personne avec qui partager vos doutes, vos questionnements stratégiques.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Décision difficile à prendre
                </h3>
                <p className="text-muted-foreground">
                  Un choix stratégique important qui demande du recul et un regard externe.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 5 — La méthode KLYRA */}
        <section className="py-16 md:py-20 px-6 bg-klyra-neutral-light/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Le cadre <span className="text-primary">KLYRA</span> : structure, lucidité et décisions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Une approche structurée en 4 étapes pour retrouver clarté, alignement et efficacité dans votre leadership.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Search className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Diagnostic 360° personnel & entreprise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  État des lieux complet de votre situation, de vos enjeux et de votre contexte professionnel et personnel.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Lightbulb className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Mise en lumière des angles morts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identification des blocages invisibles, des croyances limitantes et des zones d'ombre qui freinent votre progression.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <FileText className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Plan d'action concret
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Définition d'objectifs clairs, de priorités et d'un plan opérationnel adapté à votre réalité et vos contraintes.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <RefreshCw className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Suivi & ajustements
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accompagnement régulier pour maintenir le cap, ajuster la stratégie et mesurer les résultats concrets.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Résultats */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Ce que vous allez <span className="text-primary">gagner</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Réduction de la charge mentale</h3>
                  <p className="text-muted-foreground">Retrouvez de l'espace mental et de la sérénité dans votre quotidien.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Clarté stratégique</h3>
                  <p className="text-muted-foreground">Vision nette de vos priorités et de votre direction à moyen terme.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Décisions plus éclairées</h3>
                  <p className="text-muted-foreground">Capacité à trancher avec confiance et recul sur les enjeux importants.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Leadership renforcé</h3>
                  <p className="text-muted-foreground">Meilleure posture, plus de légitimité et d'impact dans vos interactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Alignement personnel et professionnel</h3>
                  <p className="text-muted-foreground">Cohérence retrouvée entre vos valeurs, vos ambitions et vos actions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Gestion des situations critiques</h3>
                  <p className="text-muted-foreground">Capacité à gérer les crises et les transitions avec plus de maîtrise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Fonctionnement */}
        <section className="py-16 md:py-20 px-6 bg-klyra-neutral-light/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Format</span> & organisation
            </h2>
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Durée et fréquence</h3>
                <p className="text-muted-foreground">
                  Séances de 1h30 à 2h, à une fréquence adaptée à vos besoins (hebdomadaire, bimensuel ou mensuel). La régularité permet un suivi efficace et des ajustements progressifs.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Lieu et modalités</h3>
                <p className="text-muted-foreground">
                  En présentiel à Montpellier ou dans les environs (Nîmes, Marseille, Toulouse), ou en distanciel selon vos contraintes. L'essentiel est de créer un cadre propice à la réflexion et à l'échange.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Confidentialité totale</h3>
                <p className="text-muted-foreground">
                  Tous les échanges sont strictement confidentiels. Vous disposez d'un espace sécurisé pour aborder les sujets sensibles sans crainte de jugement ou de diffusion.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Engagement et flexibilité</h3>
                <p className="text-muted-foreground">
                  Pas d'engagement sur une durée minimale. Nous construisons ensemble un parcours adapté à votre situation et à vos objectifs, avec la possibilité d'ajuster en cours de route.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 8 — CTA final */}
        <section id="contact-section" className="py-16 md:py-20 px-6 bg-gradient-to-br from-klyra-neutral-light via-background to-secondary/20">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passer à <span className="text-primary">l'étape suivante</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Réservez un premier échange de 30 minutes pour faire le point sur votre situation, vos enjeux et voir comment le mentoring peut vous aider concrètement.
            </p>
            <a href="/#diagnostic">
              <Button variant="cta" size="lg">
                Réserver un appel découverte
              </Button>
            </a>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Questions</span> fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Quelle est la différence entre mentoring et coaching ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Le mentoring repose sur un accompagnement global, stratégique et de long terme, là où le coaching se concentre souvent sur des objectifs précis et des techniques. Le mentoring dirigeant intègre votre contexte personnel, professionnel et organisationnel pour vous aider à prendre du recul et des décisions alignées avec votre réalité.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Combien de temps dure un accompagnement en mentoring ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Cela dépend de vos objectifs et de votre situation. Certains dirigeants travaillent avec nous sur 3 à 6 mois pour résoudre une problématique précise, d'autres s'inscrivent dans un suivi régulier sur plusieurs années. Nous adaptons la formule à vos besoins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Est-ce que le mentoring fonctionne aussi en distanciel ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Oui, totalement. Nous travaillons avec de nombreux dirigeants en distanciel avec d'excellents résultats. L'essentiel est de créer un cadre propice à l'échange, que ce soit en présentiel ou en visioconférence. Le présentiel apporte cependant une dimension relationnelle supplémentaire appréciée par certains.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Qui peut bénéficier d'un mentoring dirigeant ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Tout dirigeant, entrepreneur, manager ou cadre dirigeant qui ressent le besoin de prendre du recul, de structurer sa réflexion ou de prendre de meilleures décisions. Que vous soyez en phase de croissance, de transition, de crise ou simplement en quête de clarté, le mentoring vous apporte un cadre et un regard extérieur précieux.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default MentoringDirigeant;