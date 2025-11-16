import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Share2 } from "lucide-react";
import articleAvion from "@/assets/article-avion.jpg";
import articleCoaching from "@/assets/article-coaching.jpg";
import articleMindfulness from "@/assets/article-mindfulness.jpg";

const relatedArticles = [
  {
    id: "mentoring-executif",
    title: "Le mentoring exécutif en entreprise",
    excerpt: "Explorez les bénéfices d'un accompagnement personnalisé pour les leaders et dirigeants dans leur développement professionnel.",
    image: articleCoaching,
  },
  {
    id: "mindfulness-travail",
    title: "La mindfulness au travail",
    excerpt: "Intégrer la pleine conscience dans votre quotidien professionnel pour améliorer concentration, bien-être et performance.",
    image: articleMindfulness,
  },
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Pour l'instant, on gère uniquement l'article "maman-jai-peur-de-lavion"
  if (slug !== "maman-jai-peur-de-lavion") {
    navigate("/articles");
    return null;
  }

  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = "✈️ Maman, j'ai peur de l'avion… et si la peur était un faux signal ?";
  
  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`${articleTitle} ${articleUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(articleUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  // SEO meta tags
  useEffect(() => {
    document.title = "✈️ Maman, j'ai peur de l'avion… et si la peur était un faux signal ? | KLYRA360";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Depuis tout jeune, l'avion représentait pour moi l'inconnu le plus effrayant. Mais si la peur n'était pas toujours fondée ? Découvrez comment transformer la peur en moteur.");
    }

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', articleTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Depuis tout jeune, l'avion représentait pour moi l'inconnu le plus effrayant. Mais si la peur n'était pas toujours fondée ?");

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', articleAvion);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf9f4]">
      <Header />
      
      {/* Hero image with overlay H1 */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={articleAvion}
          alt="Avion dans le ciel - métaphore de la peur et du courage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e40]/80 via-[#0a2e40]/40 to-transparent flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              ✈️ Maman, j'ai peur de l'avion… et si la peur était un faux signal ?
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumbs */}
        <nav className="max-w-3xl mx-auto mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="mx-2">›</span>
          <Link to="/articles" className="hover:text-primary transition-colors">Articles</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Maman, j'ai peur de l'avion</span>
        </nav>

        <div className="max-w-3xl mx-auto">
          {/* Chapô (intro) */}
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-16 border-l-4 border-gold pl-6 italic font-light">
            Depuis tout jeune, l'avion représentait pour moi l'inconnu le plus effrayant. Alors que mes amis me répétaient "c'est le moyen de transport le plus sûr du monde", je transpirais à chaque décollage, persuadé que la fin était proche. Mais si la peur n'était pas toujours fondée ? Si elle était parfois un faux signal, hérité de nos histoires, de notre éducation ou de notre imaginaire ?
          </p>

          {/* Body content */}
          <article className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
              La peur comme héritage
            </h2>
            
            <p className="mb-6 leading-relaxed text-lg">
              Mon père refusait de voler, et j'ai grandi avec cette image d'un danger permanent. J'ai associé la peur de l'avion à d'autres sensations comme le vertige. La peur se nourrit de récits : famille, proches, films, livres… elle s'imprime dans nos esprits sans même que nous en ayons conscience.
            </p>

            <p className="mb-12 leading-relaxed text-lg">
              👉 <strong>Idée clé :</strong> nos peurs ne naissent pas toujours d'expériences personnelles, mais de conditionnements collectifs.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
              Quand la peur nous trompe
            </h2>

            <p className="mb-6 leading-relaxed text-lg">
              À 25 ans, je décide de voyager malgré tout. Chaque vol est une épreuve, mais je monte. Ironie : j'étais beaucoup plus en danger sur mes motos ou lors de mes virées un peu folles en Espagne que dans un avion de ligne. La peur me trompait, elle exagérait un risque irréel et minimisait mes véritables comportements à risque.
            </p>

            <p className="mb-12 leading-relaxed text-lg">
              👉 <strong>Idée clé :</strong> la peur n'est pas toujours alignée avec la réalité. Elle peut être un mauvais signal.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
              Ce que dit la science
            </h2>

            <p className="mb-6 leading-relaxed text-lg">
              Les chiffres sont implacables : selon l'OACI, l'avion est environ 700 fois plus sûr que la voiture. Les chercheurs en psychologie cognitive (American Psychological Association, 2022) montrent deux leviers efficaces contre les phobies :
            </p>

            <ul className="mb-6 leading-relaxed text-lg list-disc pl-6 space-y-2">
              <li>l'exposition progressive (se confronter petit à petit à la situation anxiogène),</li>
              <li>la visualisation positive (préparer mentalement la réussite avant l'action).</li>
            </ul>

            <p className="mb-12 leading-relaxed text-lg">
              👉 <strong>Idée clé :</strong> la science confirme que la peur est souvent irrationnelle et qu'elle peut se reprogrammer.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
              Transformer la peur en moteur
            </h2>

            <p className="mb-6 leading-relaxed text-lg">
              La peur s'apprivoise, elle se dompte. Avec le recul, j'ai compris que la peur n'est pas un ennemi, mais un signal. Elle se déclenche quand ce qui compte est en jeu. Elle nous dit : "attention, tu es en terrain inconnu, il y a un enjeu réel ici" — qu'elle soit fondée ou non. C'est donc un signal à écouter et à analyser rapidement pour détecter le véritable danger… et repérer aussi la peur qui s'ancre dans l'irréel (passé, biais familiaux, imaginaire).
            </p>

            <p className="mb-12 leading-relaxed text-lg">
              La clé n'est pas de supprimer la peur, mais d'apprendre à marcher avec elle : nommer le risque, poser une petite action, reprendre le contrôle.
            </p>

            {/* Quote block */}
            <blockquote className="my-16 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
              <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-light">
                « Avec l'avion, nous avons appris la ligne droite. »
              </p>
              <p className="text-lg text-muted-foreground mt-4">— Antoine de Saint-Exupéry</p>
            </blockquote>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
              Conclusion
            </h2>

            <p className="mb-6 leading-relaxed text-lg">
              La peur est un compagnon inévitable. Elle se trompe parfois, mais elle nous rappelle toujours que nous avançons dans un terrain qui compte pour nous. Le véritable courage n'est pas de supprimer la peur, mais de marcher avec elle.
            </p>

            <p className="mb-12 leading-relaxed text-lg">
              👉 Chez KLYRA, nous aidons les dirigeants à transformer leurs incertitudes en plans d'action simples et concrets.
            </p>

            {/* CTA block */}
            <div className="mt-16 mb-16 p-8 md:p-10 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Découvrir notre approche
              </h3>
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                Nous accompagnons les leaders dans la transformation de leurs défis en opportunités de croissance.
              </p>
              <Link to="/">
                <Button variant="cta" size="lg" className="w-full md:w-auto">
                  Découvrir notre approche
                </Button>
              </Link>
            </div>
          </article>

          {/* Newsletter Subscribe Block */}
          <div className="mt-20 mb-16 p-8 md:p-12 bg-[#fdf9f4] rounded-xl border-2 border-gold/30 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              S'abonner à la newsletter KLYRA
            </h3>
            <p className="text-foreground mb-8 leading-relaxed text-lg">
              Recevez nos lettres éditoriales et nos ressources pratiques (1 à 2 emails / mois).
            </p>
            <a 
              href="https://00532df8.sibforms.com/serve/MUIFAOFICxUsnXACAsmtn9Y9S15jxnKBVdgyDxWB83zTETd4Fsr_0kxUniowMoTF-nebYnuq7o_SmayoJ1qtV-yAJwVvS6Gku1wDk4wdEo2dpbeVBm9oasL0hbAhVUouEw2XfBAAq7AuaBM_9sAGiJF1j-pvb-Fgk1Meo9FfGkvtfI7RwVIlhSvETpRR9o6wACv3YWf8HNq75aSC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full"
              >
                S'abonner
              </Button>
            </a>
          </div>

          {/* Share Row */}
          <div className="mt-12 mb-16 pt-8 border-t border-border">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-foreground font-semibold flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Partager :
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppShare}
                className="text-primary hover:bg-primary/10"
              >
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLinkedInShare}
                className="text-primary hover:bg-primary/10"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Articles similaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-border"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link to={`/articles/${article.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Lire l'article
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Back to Articles */}
          <div className="mt-12 text-center">
            <Link to="/articles">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux articles
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
