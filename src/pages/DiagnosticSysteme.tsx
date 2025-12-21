import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DiagnosticSysteme = () => {
  useEffect(() => {
    document.title = "Diagnostic Système – Réalité brute | KLYRA360";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Un diagnostic autonome et structuré pour dirigeants. Identifier les points de friction réels dans votre système de décision, sans coaching ni formation.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero - Minimal */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-tight mb-8">
              Diagnostic Système – Réalité brute
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Un cadre structuré pour identifier ce qui freine réellement vos décisions, votre organisation, votre trajectoire.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="h-px bg-border" />
        </div>

        {/* Pourquoi ce diagnostic existe */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-xl font-medium text-foreground mb-8">
              Pourquoi ce diagnostic existe
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                La plupart des dirigeants fonctionnent avec des angles morts. Non par incompétence, mais par manque de recul structuré sur leur propre système.
              </p>
              <p>
                Les décisions s'accumulent. Les priorités se superposent. Les signaux faibles passent inaperçus.
              </p>
              <p>
                Ce diagnostic existe pour poser un état des lieux factuel. Sans interprétation excessive. Sans promesse de transformation. Juste une lecture claire de ce qui est.
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="h-px bg-border" />
        </div>

        {/* Ce que ce n'est pas */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-xl font-medium text-foreground mb-8">
              Ce que ce n'est pas
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 select-none">—</span>
                <span>Ce n'est pas une formation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 select-none">—</span>
                <span>Ce n'est pas du coaching motivationnel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 select-none">—</span>
                <span>Ce n'est pas un audit externe avec recommandations imposées</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 select-none">—</span>
                <span>Ce n'est pas un outil de développement personnel</span>
              </li>
            </ul>
            <p className="mt-8 text-muted-foreground">
              C'est un processus autonome. Vous êtes le seul lecteur de vos propres réponses.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="h-px bg-border" />
        </div>

        {/* Ce que cela permet concrètement */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-xl font-medium text-foreground mb-8">
              Ce que cela permet concrètement
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Identifier les points de friction dans votre système de décision.
              </p>
              <p>
                Clarifier ce qui relève de l'urgence réelle et ce qui relève de l'agitation.
              </p>
              <p>
                Mettre des mots précis sur des zones floues : gouvernance, posture, priorités, équilibre.
              </p>
              <p>
                Disposer d'une base factuelle pour décider si un accompagnement extérieur est pertinent — ou non.
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="h-px bg-border" />
        </div>

        {/* Le format */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-xl font-medium text-foreground mb-8">
              Le format
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Un questionnaire structuré, accessible en ligne.
              </p>
              <p>
                Durée estimée : 20 à 30 minutes.
              </p>
              <p>
                Aucune donnée n'est collectée ni transmise. Le diagnostic reste strictement personnel.
              </p>
              <p>
                À l'issue, vous disposez d'une synthèse lisible de votre situation actuelle.
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="h-px bg-border" />
        </div>

        {/* À qui cela s'adresse */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-xl font-medium text-foreground mb-8">
              À qui cela s'adresse
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Dirigeants, entrepreneurs, managers en responsabilité.
              </p>
              <p>
                Personnes en phase de questionnement sur leur trajectoire professionnelle.
              </p>
              <p>
                Profils qui préfèrent la clarté à la motivation, les faits aux promesses.
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="h-px bg-border" />
        </div>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Link to="/urgence">
              <Button 
                variant="outline" 
                className="text-foreground border-foreground/20 hover:bg-foreground/5 hover:border-foreground/40 font-normal px-8 py-6 text-base transition-all duration-300"
              >
                Accéder au Diagnostic Système – Réalité brute
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiagnosticSysteme;
