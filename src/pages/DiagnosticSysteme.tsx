import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DiagnosticSysteme = () => {
  useEffect(() => {
    document.title = "Diagnostic Système – Réalité brute | KLYRA360";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Un diagnostic autonome et structuré pour dirigeants. Regarder votre entreprise comme un système réel, identifier les dépendances et zones de flou.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero - Compact */}
        <section className="py-12 lg:py-16 border-b border-foreground/10">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-5">
              Diagnostic Système – Réalité brute
            </h1>
            <p className="text-base md:text-lg text-foreground/80 font-normal leading-relaxed">
              Un diagnostic autonome et structuré pour dirigeants. Centré sur la clarté de votre système d'entreprise. Pas sur les émotions ni les promesses.
            </p>
          </div>
        </section>

        {/* Pourquoi ce diagnostic est utile */}
        <section className="py-10 lg:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-5 uppercase tracking-wide text-sm">
              Pourquoi ce diagnostic est utile
            </h2>
            <div className="space-y-3 text-foreground/75 leading-relaxed text-[15px]">
              <p>
                Beaucoup d'entreprises tiennent. Elles fonctionnent, génèrent du chiffre, avancent. Mais elles sont difficilement pilotables sans leur dirigeant.
              </p>
              <p>
                La dépendance excessive au fondateur ou au dirigeant est rarement identifiée comme un problème structurel. Elle est souvent normalisée, parfois valorisée.
              </p>
              <p>
                Le flou structurel s'installe progressivement. Les responsabilités se chevauchent. Les décisions remontent sans logique claire. L'énergie est consommée à maintenir plutôt qu'à construire.
              </p>
              <p className="text-foreground font-medium">
                Ce diagnostic existe pour poser un état des lieux factuel. Une lecture systémique, pas émotionnelle. De la lucidité structurelle, pas de la motivation.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que ce n'est pas */}
        <section className="py-10 lg:py-12 border-b border-foreground/10">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-5 uppercase tracking-wide text-sm">
              Ce que ce diagnostic n'est pas
            </h2>
            <ul className="space-y-2.5 text-foreground/75 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="text-foreground/50 select-none font-mono">—</span>
                <span>Ce n'est pas une formation. Il n'y a rien à apprendre ici.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/50 select-none font-mono">—</span>
                <span>Ce n'est pas un coaching motivationnel. Aucune promesse de transformation intérieure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/50 select-none font-mono">—</span>
                <span>Ce n'est pas une méthode à appliquer. Pas de framework miracle, pas de modèle universel.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/50 select-none font-mono">—</span>
                <span>Ce n'est pas une promesse rapide. Cela demande du temps et de l'honnêteté.</span>
              </li>
            </ul>
            <p className="mt-5 text-foreground font-medium text-[15px]">
              C'est un cadre structuré pour regarder ce qui est. Sans filtre. Sans complaisance.
            </p>
          </div>
        </section>

        {/* Ce que ce diagnostic permet de produire */}
        <section className="py-10 lg:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-5 uppercase tracking-wide text-sm">
              Ce que ce diagnostic permet de produire
            </h2>
            <div className="space-y-3 text-foreground/75 leading-relaxed text-[15px]">
              <p>
                Une lecture systémique réelle de votre entreprise. Pas une vision idéalisée, mais un état des lieux factuel.
              </p>
              <p>
                L'identification des dépendances au dirigeant : décisions, informations, validations, arbitrages qui ne peuvent exister sans vous.
              </p>
              <p>
                Les zones de flou structurel : là où les responsabilités se chevauchent, où les processus n'existent pas, où l'implicite remplace le cadre.
              </p>
              <p>
                La distinction entre ce qui relève du pilotage, de l'opérationnel, et de l'évitement. Ce que vous faites par nécessité, par habitude, ou par défaut.
              </p>
              <p className="text-foreground font-medium">
                Un livrable clair et exploitable. Une base factuelle pour décider de la suite — quelle qu'elle soit.
              </p>
            </div>
          </div>
        </section>

        {/* Le format */}
        <section className="py-10 lg:py-12 border-b border-foreground/10">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-5 uppercase tracking-wide text-sm">
              Le format
            </h2>
            <div className="space-y-3 text-foreground/75 leading-relaxed text-[15px]">
              <p>
                Travail autonome. Pas de visio. Pas d'appel. Pas de rendez-vous à caler.
              </p>
              <p>
                Un cadre structuré dans Notion. Questions précises, sections logiques, progression guidée.
              </p>
              <p>
                Un rituel imposé pour éviter l'évitement. Le diagnostic est conçu pour empêcher de survoler. Il demande de répondre vraiment.
              </p>
              <p>
                Durée estimée : 1h30 à 2h. Peut être réalisé en plusieurs sessions.
              </p>
              <p className="text-foreground font-medium">
                Accès immédiat après paiement.
              </p>
            </div>
          </div>
        </section>

        {/* À qui s'adresse ce diagnostic */}
        <section className="py-10 lg:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-5 uppercase tracking-wide text-sm">
              À qui s'adresse ce diagnostic
            </h2>
            <div className="space-y-3 text-foreground/75 leading-relaxed text-[15px]">
              <p>
                Dirigeants qui ne cherchent pas de solution miracle. Qui savent que la clarté demande du travail.
              </p>
              <p>
                Entrepreneurs qui acceptent de regarder leur réalité sans filtre. Même ce qui dérange.
              </p>
              <p>
                Leaders qui veulent décider avec plus de clarté. Pas avec plus de motivation.
              </p>
              <p className="pt-2 text-foreground/60 italic border-l-2 border-foreground/20 pl-4">
                Ce diagnostic n'est pas adapté à ceux qui cherchent du réconfort, de la validation, ou une méthode clé en main.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 border-y border-foreground/15 bg-foreground/[0.02]">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <a 
              href="https://buy.stripe.com/..." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-10 py-6 text-base transition-all duration-200"
              >
                Accéder au Diagnostic Système – Réalité brute
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </a>
            <div className="mt-5 space-y-0.5 text-sm text-foreground/60">
              <p>Paiement unique · Accès immédiat</p>
              <p className="text-foreground font-semibold text-base">490 € HT</p>
            </div>
          </div>
        </section>

        {/* Phrase de clôture */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-foreground/70 text-sm leading-relaxed font-medium">
              Aucune obligation de suite. Aucun engagement. La seule exigence : l'honnêteté intellectuelle.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiagnosticSysteme;
