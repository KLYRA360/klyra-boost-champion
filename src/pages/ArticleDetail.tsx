import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import articleAvion from "@/assets/article-avion.jpg";

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Pour l'instant, on gère uniquement l'article "maman-jai-peur-de-lavion"
  if (slug !== "maman-jai-peur-de-lavion") {
    navigate("/articles");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#fdf9f4]">
      <Header />
      
      {/* Hero image */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={articleAvion}
          alt="Maman, j'ai peur de l'avion"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/articles")}
            className="mb-8 -ml-4 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux articles
          </Button>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Maman, j'ai peur de l'avion
          </h1>

          {/* Chapô (intro) */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-gold pl-6 italic">
            Les voyages en avion peuvent être source d'anxiété pour de nombreux enfants. 
            En tant que parent, comment accompagner cette peur tout en préservant le plaisir 
            du voyage ? Voici quelques clés pour transformer l'appréhension en curiosité.
          </p>

          {/* Body content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Comprendre la peur de l'avion chez l'enfant
            </h2>
            
            <p className="mb-6 leading-relaxed">
              La peur de l'avion chez les enfants est souvent liée à l'inconnu et au manque de contrôle. 
              Contrairement aux adultes qui peuvent rationaliser leur anxiété, les enfants ressentent 
              cette peur de manière plus viscérale. Le bruit des moteurs, les turbulences, la sensation 
              d'être enfermé dans un espace clos : autant d'éléments qui peuvent générer du stress.
            </p>

            <p className="mb-6 leading-relaxed">
              Il est important de reconnaître que cette peur est légitime. Ne la minimisez pas en 
              disant "ce n'est rien" ou "sois courageux". Au contraire, accueillez l'émotion de 
              votre enfant et montrez-lui que vous comprenez ce qu'il ressent.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Préparer le voyage en amont
            </h2>

            <p className="mb-6 leading-relaxed">
              La préparation est essentielle pour diminuer l'anxiété. Quelques semaines avant le départ, 
              commencez à parler du voyage avec votre enfant. Expliquez-lui le déroulement : 
              l'arrivée à l'aéroport, l'enregistrement, le passage de la sécurité, l'embarquement, 
              et enfin le vol lui-même.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Utiliser des supports visuels
            </h3>

            <p className="mb-6 leading-relaxed">
              Les livres, vidéos et applications sur le thème de l'aviation peuvent aider votre enfant 
              à se familiariser avec l'environnement de l'avion. Certains dessins animés montrent des 
              personnages qui prennent l'avion, ce qui permet de dédramatiser la situation.
            </p>

            {/* Quote block */}
            <blockquote className="my-10 pl-6 border-l-4 border-gold bg-secondary/30 py-6 pr-6 rounded-r-lg">
              <p className="text-xl italic text-foreground leading-relaxed">
                "L'anticipation positive est un outil puissant pour transformer la peur en curiosité. 
                Plus l'enfant connaît le processus, moins il aura peur de l'inconnu."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Le jour du voyage : techniques pratiques
            </h2>

            <p className="mb-6 leading-relaxed">
              Le jour du départ, maintenez une attitude calme et confiante. Votre enfant percevra 
              votre état émotionnel et s'en inspirera. Voici quelques techniques concrètes :
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              La respiration abdominale
            </h3>

            <p className="mb-6 leading-relaxed">
              Enseignez à votre enfant des exercices de respiration simples. La technique du 
              "ballon dans le ventre" fonctionne très bien : on inspire en gonflant le ventre 
              comme un ballon, puis on expire lentement en le dégonflant. Cet exercice peut 
              être pratiqué avant l'embarquement et pendant le vol.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              La distraction positive
            </h3>

            <p className="mb-6 leading-relaxed">
              Prévoyez des activités pour occuper votre enfant pendant le vol : livres, 
              jeux de société compacts, tablette avec des films ou jeux éducatifs, cahiers 
              de coloriage. L'objectif est de détourner son attention de ce qui pourrait 
              l'inquiéter vers des activités plaisantes.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Le rituel sécurisant
            </h3>

            <p className="mb-6 leading-relaxed">
              Créez un petit rituel avant et pendant le vol : un doudou spécial "avion", 
              une chanson que vous chantez ensemble au décollage, ou un jeu d'observation 
              des nuages. Ces rituels offrent des repères rassurants dans un environnement 
              nouveau.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Après le vol : ancrer l'expérience positive
            </h2>

            <p className="mb-6 leading-relaxed">
              Une fois arrivés à destination, prenez le temps de féliciter votre enfant 
              pour son courage. Discutez ensemble de ce qui s'est bien passé, des moments 
              agréables du voyage. Cette discussion permet d'ancrer une expérience positive 
              qui facilitera les prochains vols.
            </p>

            <p className="mb-6 leading-relaxed">
              Si malgré vos efforts, votre enfant reste très anxieux face aux voyages en avion, 
              n'hésitez pas à consulter un professionnel. Un psychologue spécialisé dans 
              l'accompagnement des enfants pourra proposer des techniques adaptées comme 
              la thérapie cognitive et comportementale ou l'EMDR.
            </p>

            {/* CTA block */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Besoin d'un accompagnement personnalisé ?
              </h3>
              <p className="text-foreground mb-6 leading-relaxed">
                Chez KLYRA360, nous accompagnons les familles dans la gestion des peurs et 
                des angoisses. Notre approche bienveillante et professionnelle permet à chacun 
                de trouver ses propres ressources pour surmonter ses difficultés.
              </p>
              <a href="/#diagnostic">
                <Button variant="cta" size="lg" className="w-full md:w-auto">
                  Demander un diagnostic gratuit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
