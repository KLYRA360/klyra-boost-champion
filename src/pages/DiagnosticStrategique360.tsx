import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eye, TrendingUp, Users, Target, Compass, Lightbulb, FileText, CheckCircle2, Clock, Briefcase, RefreshCw, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const DiagnosticStrategique360 = () => {
  useEffect(() => {
    document.title = "Diagnostic Stratégique 360° – Clarté & Plan d'Action | KLYRA360";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Diagnostic Stratégique 360° pour dirigeants et entreprises : clarté, angles morts, priorités et plan d'action concret. Disponible à Montpellier et en visio.");
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-klyra-neutral-light via-background to-secondary/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Diagnostic Stratégique 360° – <span className="text-primary">Clarté</span>, <span className="text-accent">Priorités</span> & Mise en Mouvement
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Un diagnostic global qui éclaire ce que vous vivez, ce que votre entreprise traverse, et ce qui doit évoluer maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" onClick={scrollToDiagnostic}>
                Planifier un diagnostic
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToDiagnostic}>
                Être contacté
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Pourquoi un Diagnostic 360° */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Comprendre avant d'agir : la base d'une <span className="text-primary">transformation réussie</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center leading-relaxed text-lg">
                Le Diagnostic Stratégique 360° KLYRA a été conçu pour aider les dirigeants à voir clair dans un environnement complexe. Il révèle les angles morts, met en perspective les enjeux réels et fait émerger un plan d'action concret et priorisé.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Pour qui est ce diagnostic */}
        <section className="py-16 md:py-20 px-6 bg-klyra-neutral-light/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Un outil puissant pour <span className="text-primary">dirigeants</span>, entrepreneurs et <span className="text-accent">organisations</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Briefcase className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Dirigeants sous pression / en surcharge
                </h3>
                <p className="text-muted-foreground">
                  Vous portez tout, la charge mentale est lourde, vous avez besoin de recul et de clarté pour retrouver de l'espace.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Entreprises en croissance ou en réorganisation
                </h3>
                <p className="text-muted-foreground">
                  La structure évolue, les processus ne suivent plus, vous avez besoin d'un état des lieux objectif.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Compass className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Dirigeants en perte de clarté ou en transition stratégique
                </h3>
                <p className="text-muted-foreground">
                  Vous sentez qu'il faut changer quelque chose, mais vous ne savez pas par où commencer.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Les 4 piliers du Diagnostic */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              La méthode <span className="text-primary">KLYRA</span> : simple, précise et immédiatement <span className="text-accent">actionnable</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Quatre piliers pour une vision complète de votre situation et un plan d'action concret.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Eye className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Clarté personnelle du dirigeant
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  État mental, posture, charge émotionnelle, alignement personnel. Comprendre ce que vous vivez avant de traiter ce que l'entreprise traverse.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Analyse du fonctionnement interne
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Processus, organisation, coordination, dynamique d'équipe. Identifier les dysfonctionnements invisibles et les points de friction.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Vision stratégique & priorités réelles
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ce qui doit évoluer, ce qui peut attendre, ce qui libère de l'espace. Hiérarchiser les enjeux et définir la direction.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <FileText className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Restitution + plan d'action priorisé
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Une feuille de route simple, réaliste, et immédiatement exécutable. Pas de théorie, juste des actions concrètes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Le déroulé du Diagnostic */}
        <section className="py-16 md:py-20 px-6 bg-klyra-neutral-light/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Une démarche <span className="text-primary">rapide</span> et <span className="text-accent">structurée</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Lightbulb className="w-10 h-10 text-accent" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">ÉTAPE 1</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Entretien initial
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprendre la situation, vos enjeux personnels et professionnels, et poser les fondations du diagnostic.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <RefreshCw className="w-10 h-10 text-accent" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">ÉTAPE 2</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Diagnostic complet
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyse personnelle + organisationnelle + stratégique. Exploration approfondie des angles morts et des leviers d'action.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">ÉTAPE 3</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Restitution & plan d'action
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Synthèse claire de la situation + actions priorisées + feuille de route concrète pour avancer immédiatement.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Résultats obtenus */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Ce que les dirigeants observent après un <span className="text-primary">Diagnostic 360°</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Clarté immédiate sur les priorités</h3>
                  <p className="text-muted-foreground">Vision nette de ce qui compte vraiment et de ce qui peut attendre.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Réduction de la charge mentale</h3>
                  <p className="text-muted-foreground">Moins de rumination, plus d'espace mental et de sérénité au quotidien.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Amélioration de la prise de décision</h3>
                  <p className="text-muted-foreground">Décisions plus rapides, plus éclairées et plus alignées avec vos objectifs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Alignement dirigeant / entreprise</h3>
                  <p className="text-muted-foreground">Cohérence retrouvée entre vos valeurs, votre vision et votre organisation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Plan d'action simple et réalisable</h3>
                  <p className="text-muted-foreground">Feuille de route claire, priorisée et adaptée à votre réalité quotidienne.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Cap retrouvé / regain d'énergie</h3>
                  <p className="text-muted-foreground">Nouveau souffle, motivation renouvelée et confiance dans la direction prise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Format & Délai */}
        <section className="py-16 md:py-20 px-6 bg-klyra-neutral-light/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Combien de temps dure un <span className="text-primary">Diagnostic 360°</span> ?
            </h2>
            <Card className="p-8 hover:shadow-strong transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-lg inline-flex shrink-0">
                  <Clock className="w-12 h-12 text-accent" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Durée totale : 7 à 10 jours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Le diagnostic se déroule sur une période courte pour maintenir la dynamique et obtenir des résultats rapidement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">2 sessions principales</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Un entretien initial approfondi + une session de restitution avec plan d'action. Le reste du travail d'analyse se fait en asynchrone.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Outil clé pour débloquer une situation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Idéal pour préparer une transformation, sortir d'une impasse stratégique ou répondre à une situation urgente nécessitant clarté et recul.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 8 — CTA Final */}
        <section id="contact-section" className="py-16 md:py-20 px-6 bg-gradient-to-br from-klyra-neutral-light via-background to-secondary/20">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à <span className="text-primary">y voir plus clair</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Planifiez votre Diagnostic Stratégique 360° et obtenez un état des lieux complet avec un plan d'action concret en moins de 10 jours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#diagnostic">
                <Button variant="cta" size="lg">
                  Planifier un diagnostic
                </Button>
              </a>
              <a href="/#diagnostic">
                <Button variant="outline" size="lg">
                  Poser une question
                </Button>
              </a>
            </div>
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
                  Le diagnostic peut-il être réalisé entièrement à distance ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Oui, totalement. Le Diagnostic 360° peut être réalisé en distanciel avec la même qualité et la même profondeur qu'en présentiel. Les sessions se font en visioconférence sécurisée, et les échanges asynchrones permettent de maintenir la dynamique entre les sessions. Le présentiel reste possible pour ceux qui le préfèrent, notamment à Montpellier et dans la région Occitanie.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Le diagnostic suffit-il sans accompagnement ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Le Diagnostic 360° est conçu pour être autonome : vous repartez avec une vision claire et un plan d'action priorisé que vous pouvez exécuter seul. Cependant, certains dirigeants choisissent de prolonger par un accompagnement en mentoring pour maintenir la dynamique, ajuster le plan en cours de route et bénéficier d'un soutien continu. C'est une option, pas une obligation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Est-il adapté aux TPE comme aux PME ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Absolument. Le Diagnostic 360° KLYRA est conçu pour s'adapter à la taille et au contexte de votre organisation. Que vous soyez entrepreneur solo, dirigeant d'une TPE de 5 personnes ou à la tête d'une PME de 50 collaborateurs, la méthodologie s'ajuste à votre réalité et à vos enjeux spécifiques.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Peut-on engager le diagnostic en situation d'urgence ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Oui, le Diagnostic 360° est justement conçu pour répondre rapidement aux situations critiques : décision stratégique urgente, crise interne, surcharge mentale aiguë, transition non anticipée. Le format court (7-10 jours) permet d'obtenir rapidité et clarté sans sacrifier la profondeur de l'analyse. Si votre situation est urgente, contactez-nous pour une prise en charge prioritaire.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiagnosticStrategique360;
