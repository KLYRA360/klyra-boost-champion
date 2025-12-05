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
import articleChangement from "@/assets/article-changement.jpg";
import articleEffort from "@/assets/article-effort.jpg";

const relatedArticles = [
  {
    id: "pourquoi-la-haine-de-l-effort-nous-rend-malheureux",
    title: "Pourquoi la haine de l'effort nous rend malheureux",
    excerpt: "Notre époque valorise la rapidité et le résultat instantané. Pourtant, c'est dans l'effort calibré que se trouve le vrai plaisir.",
    image: articleEffort,
    date: "5 décembre 2025",
  },
  {
    id: "mentoring-executif",
    title: "Le mentoring exécutif en entreprise",
    excerpt: "Explorez les bénéfices d'un accompagnement personnalisé pour les leaders et dirigeants dans leur développement professionnel.",
    image: articleCoaching,
    date: "À venir",
  },
  {
    id: "mindfulness-travail",
    title: "La mindfulness au travail",
    excerpt: "Intégrer la pleine conscience dans votre quotidien professionnel pour améliorer concentration, bien-être et performance.",
    image: articleMindfulness,
    date: "À venir",
  },
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Vérifier si l'article existe
  const validSlugs = ["maman-jai-peur-de-lavion", "le-changement-comprendre-et-integrer", "pourquoi-la-haine-de-l-effort-nous-rend-malheureux"];
  if (!validSlugs.includes(slug || "")) {
    navigate("/articles");
    return null;
  }

  const isChangementArticle = slug === "le-changement-comprendre-et-integrer";
  const isEffortArticle = slug === "pourquoi-la-haine-de-l-effort-nous-rend-malheureux";

  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = isEffortArticle
    ? "Pourquoi la haine de l'effort nous rend malheureux (et comment réapprendre à l'aimer)"
    : isChangementArticle 
      ? "Le changement : comprendre, choisir et intégrer une transformation durable"
      : "✈️ Maman, j'ai peur de l'avion… et si la peur était un faux signal ?";
  
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
    const title = isEffortArticle
      ? "Pourquoi la haine de l'effort nous rend malheureux | KLYRA360"
      : isChangementArticle
        ? "Le changement : comprendre, choisir et intégrer une transformation durable | KLYRA360"
        : "✈️ Maman, j'ai peur de l'avion… et si la peur était un faux signal ? | KLYRA360";
    
    const description = isEffortArticle
      ? "Découvrez pourquoi la quête du 'sans effort' nous rend malheureux et comment retrouver le plaisir de l'effort calibré pour une vie plus épanouissante."
      : isChangementArticle
        ? "Le changement n'est pas une résolution. C'est un processus psychologique et identitaire puissant, qu'il est possible d'apprendre, de structurer et d'ancrer durablement."
        : "Depuis tout jeune, l'avion représentait pour moi l'inconnu le plus effrayant. Mais si la peur n'était pas toujours fondée ? Découvrez comment transformer la peur en moteur.";
    
    const image = isEffortArticle ? articleEffort : isChangementArticle ? articleChangement : articleAvion;
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
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
    ogDescription.setAttribute('content', description);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', image);
  }, [isChangementArticle, isEffortArticle, articleTitle]);

  return (
    <div className="min-h-screen bg-[#fdf9f4]">
      <Header />
      
      {/* Hero image with overlay H1 */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={isEffortArticle ? articleEffort : isChangementArticle ? articleChangement : articleAvion}
          alt={isEffortArticle ? "Illustration de l'effort et de la persévérance" : isChangementArticle ? "Illustration du changement et de la transformation personnelle" : "Avion dans le ciel - métaphore de la peur et du courage"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e40]/80 via-[#0a2e40]/40 to-transparent flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              {isEffortArticle
                ? "Pourquoi la haine de l'effort nous rend malheureux (et comment réapprendre à l'aimer)"
                : isChangementArticle 
                  ? "Le changement : comprendre, choisir et intégrer une transformation durable"
                  : "✈️ Maman, j'ai peur de l'avion… et si la peur était un faux signal ?"
              }
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
          <span className="text-foreground">
            {isEffortArticle ? "Retrouver le goût de l'effort" : isChangementArticle ? "Le changement" : "Maman, j'ai peur de l'avion"}
          </span>
        </nav>

        {/* Article date */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-sm text-muted-foreground">
            {isEffortArticle ? "5 décembre 2025" : isChangementArticle ? "16 novembre 2025" : "10 novembre 2025"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Chapô (intro) */}
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-12 border-l-4 border-gold pl-6 italic font-light">
            {isEffortArticle
              ? "Ouvrez n'importe quel réseau social : « Devenez riche pendant votre sommeil. » « Perdez 10 kilos sans bouger. » « Apprenez une compétence en 24h. » Ce discours n'est pas seulement un marché. C'est un mensonge psychologique. Il détruit notre rapport au réel… et surtout, notre rapport à l'effort, pourtant indispensable à la construction de soi."
              : isChangementArticle 
                ? "Nous changeons. Parfois sans nous en rendre compte. Parfois malgré nous. Et parfois — beaucoup plus rarement — parce que nous le décidons réellement. Le changement n'est pas une résolution. Ce n'est pas une promesse. C'est un processus psychologique et identitaire puissant, qu'il est possible d'apprendre, de structurer et d'ancrer durablement."
                : "Depuis tout jeune, l'avion représentait pour moi l'inconnu le plus effrayant. Alors que mes amis me répétaient \"c'est le moyen de transport le plus sûr du monde\", je transpirais à chaque décollage, persuadé que la fin était proche. Mais si la peur n'était pas toujours fondée ? Si elle était parfois un faux signal, hérité de nos histoires, de notre éducation ou de notre imaginaire ?"
            }
          </p>

          {/* Body content */}
          <article className="prose prose-lg max-w-none text-foreground">
            {isEffortArticle ? (
              <>
                {/* Article sur l'effort */}
                <blockquote className="my-10 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
                  <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-light">
                    « Si tout était facile, la réussite aurait-elle la même saveur ? »
                  </p>
                </blockquote>

                <p className="mb-6 leading-relaxed text-lg">
                  On déteste l'effort non pas parce qu'il est douloureux, mais parce qu'on nous a appris qu'il ne devrait pas exister. C'est l'un des grands malentendus modernes. Une illusion collective, entretenue par des promesses de raccourcis et de solutions miracles.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Pourtant, demandez à n'importe quel dirigeant, entrepreneur ou athlète ce qui a vraiment forgé sa réussite : ce n'est jamais la facilité. C'est la capacité à traverser l'inconfort, à persévérer quand tout invitait à abandonner, à transformer la résistance en carburant.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
                  I. L'épidémie du "sans effort" : quand la facilité devient une prison mentale
                </h2>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  Le mirage des résultats instantanés
                </h3>
                
                <p className="mb-6 leading-relaxed text-lg">
                  Notre époque valorise la rapidité, l'efficacité immédiate, et le résultat visible avant même le processus. Les réseaux sociaux amplifient cette distorsion : on y voit des succès fulgurants, des transformations spectaculaires, des fortunes bâties "en quelques mois". Ce qu'on ne voit pas, ce sont les années de travail obscur, les échecs répétés, les nuits blanches, les doutes traversés.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Cette narration biaisée crée une attente irréaliste : si le succès ne vient pas vite, c'est qu'on n'est pas fait pour ça. Si l'effort est nécessaire, c'est qu'on manque de talent. Cette croyance est toxique. Elle nous prive de la patience nécessaire à toute construction durable.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  La dissonance cognitive moderne
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Le résultat de cette culture du "sans effort" est une dissonance cognitive profonde :
                </p>

                <ul className="mb-6 leading-relaxed text-lg list-disc pl-6 space-y-2">
                  <li>On se compare à des modèles accélérés, retouchés, amplifiés — sans voir le travail invisible</li>
                  <li>On travaille mais on ne voit pas de résultat rapide — et on s'impatiente</li>
                  <li>On pense qu'on est "moins bon", "moins capable", "pas fait pour ça" — alors qu'on est simplement dans le processus normal</li>
                </ul>

                <p className="mb-6 leading-relaxed text-lg">
                  <strong>Ce n'est pas un problème de compétence.</strong> C'est un décalage entre deux réalités : un monde réel dans lequel l'effort est nécessaire, et un monde imaginaire (celui des écrans) où tout semble instantané. Cette dissonance génère une perte de motivation chronique, de la honte ("si c'était facile pour les autres, pourquoi pas pour moi ?"), et un affaiblissement progressif de notre résilience.
                </p>

                <blockquote className="my-10 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
                  <p className="text-xl md:text-2xl italic text-foreground leading-relaxed font-light">
                    Le vrai problème n'est pas la difficulté. C'est que nous avons désappris le plaisir de l'effort.
                  </p>
                </blockquote>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
                  II. L'effort juste : ni souffrance, ni facilité — le chemin vers le Flow
                </h2>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  Redéfinir l'effort
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  L'effort n'est pas censé être une torture. Il n'est pas non plus censé être absent. Le problème, c'est que nous avons deux représentations extrêmes de l'effort : soit il est synonyme de souffrance (le "no pain, no gain" toxique), soit il doit être évité à tout prix (le fantasme du "hack" ultime).
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  La vérité se trouve entre les deux. Il existe un effort "juste" — calibré, intentionnel, proportionné à nos capacités du moment. Cet effort-là n'épuise pas : il nourrit. Il ne brise pas : il construit.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  La science du Flow
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  Le bon effort — <strong>l'effort calibré</strong> — génère du sens, de la fierté, du plaisir, et un sentiment de progression profond. Les psychologues l'appellent le <strong>Flow</strong> : cet état dans lequel on est absorbé par la tâche, où le temps disparaît, où l'on se sent vivant et concentré.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Mihaly Csikszentmihalyi, le chercheur qui a popularisé ce concept, a montré que le Flow survient dans une zone précise : quand le défi est légèrement supérieur à nos compétences actuelles. Trop facile, et on s'ennuie. Trop difficile, et on se décourage. L'effort juste se situe exactement dans cette zone d'expansion : assez dur pour nous faire grandir, pas assez pour nous briser.
                </p>

                <blockquote className="my-10 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
                  <p className="text-xl md:text-2xl italic text-foreground leading-relaxed font-light">
                    C'est le zen de l'action : faire une chose difficile, mais juste assez pour se dépasser sans se briser.
                  </p>
                </blockquote>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  La fierté comme récompense intrinsèque
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  Quand on accomplit quelque chose de difficile, la satisfaction qui en découle n'a rien à voir avec une gratification externe. C'est une fierté profonde, ancrée dans l'expérience vécue. On sait ce qu'on a traversé. On sait ce que ça a coûté. Et cette connaissance intime donne à la réussite une saveur incomparable.
                </p>

                <blockquote className="my-10 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
                  <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-light">
                    « La fierté n'est pas le résultat. C'est le souvenir de la route parcourue. »
                  </p>
                </blockquote>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
                  III. Trois pratiques concrètes pour réapprendre à aimer l'effort
                </h2>

                <p className="mb-6 leading-relaxed text-lg">
                  Réapprendre à aimer l'effort n'est pas une question de volonté pure. C'est une question de méthode, de cadre, et de petites victoires accumulées. Voici trois pratiques concrètes, testées et validées, pour reconstruire une relation saine avec l'effort.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  1) Le mini-effort quotidien : la stratégie de l'accumulation
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  Ne cherchez pas la transformation instantanée. Cherchez la répétition. Le cerveau humain est conçu pour résister aux grands changements — c'est un mécanisme de survie. Mais il accepte facilement les petits ajustements, surtout quand ils sont répétés.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  James Clear, dans "Atomic Habits", appelle cela la règle des 1% : s'améliorer de 1% chaque jour peut sembler insignifiant, mais sur un an, cela représente une amélioration de 37 fois. Le secret n'est pas l'intensité, c'est la constance.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  Exemples de mini-efforts quotidiens :
                </p>

                <ul className="mb-6 leading-relaxed text-lg list-disc pl-6 space-y-2">
                  <li>10 pages d'un livre exigeant — pas tout le livre, juste 10 pages</li>
                  <li>10 minutes d'écriture — sans attendre l'inspiration</li>
                  <li>5 minutes de rangement — un tiroir, un dossier</li>
                  <li>1 tâche difficile que vous évitiez — la plus petite possible</li>
                  <li>1 conversation inconfortable — que vous repoussez depuis trop longtemps</li>
                </ul>

                <p className="mb-12 leading-relaxed text-lg font-semibold text-primary">
                  L'effort est un muscle. On l'entraîne. Et comme tout muscle, il se renforce avec la pratique régulière, pas avec les exploits occasionnels.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  2) Redéfinir la réussite : du résultat au processus
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  Nous avons été conditionnés à mesurer notre valeur au résultat : le chiffre d'affaires, le nombre de followers, la promotion obtenue. Mais ce focus sur l'outcome crée une dépendance à des facteurs souvent hors de notre contrôle.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  La solution ? Déplacer l'attention du résultat vers le processus. Arrêtez de vous juger au résultat. Jugez-vous à la qualité de l'effort fourni. C'est ce qu'on appelle le "process goal" par opposition au "outcome goal".
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  Concrètement, cela signifie reformuler vos victoires :
                </p>

                <ul className="mb-6 leading-relaxed text-lg list-disc pl-6 space-y-2">
                  <li>"J'ai travaillé 1h sans distraction." — Victoire, quel que soit le résultat produit</li>
                  <li>"J'ai osé commencer ce projet." — Victoire, même si ce n'est pas parfait</li>
                  <li>"J'ai avancé malgré la résistance intérieure." — Victoire, surtout si c'était dur</li>
                  <li>"J'ai fait ce que j'avais dit que je ferais." — Victoire, car c'est là que se construit l'intégrité personnelle</li>
                </ul>

                <p className="mb-12 leading-relaxed text-lg">
                  La progression devient visible, mesurable, enthousiasmante. Et surtout : elle ne dépend que de vous.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  3) Retrouver le plaisir de la maîtrise : l'antidote au "sans effort"
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  Il y a un plaisir particulier, presque addictif, à maîtriser quelque chose de difficile. Les musiciens le connaissent quand ils jouent enfin ce morceau impossible. Les sportifs le ressentent quand leur geste devient fluide après des mois de répétition. Les entrepreneurs le vivent quand leur vision prend enfin forme.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Ce plaisir de la maîtrise est l'un des plus grands moteurs humains. Il est profond, durable, et impossible à acheter ou à "hacker". Plus une chose est difficile, plus la maîtrise est satisfaisante :
                </p>

                <ul className="mb-6 leading-relaxed text-lg list-disc pl-6 space-y-2">
                  <li>Un instrument de musique — des années pour quelques minutes de grâce</li>
                  <li>Un sport — des milliers d'heures pour un geste parfait</li>
                  <li>Une compétence professionnelle — des projets difficiles pour une expertise rare</li>
                  <li>Une création personnelle — des itérations sans fin pour quelque chose d'unique</li>
                  <li>Une entreprise — des années d'incertitude pour une organisation qui fonctionne</li>
                </ul>

                <p className="mb-6 leading-relaxed text-lg">
                  Ceux qui vendent le "sans effort" ne peuvent pas vous donner ce plaisir. Car ce plaisir naît précisément de l'effort investi. C'est un paradoxe que notre époque refuse d'entendre : <strong>la difficulté n'est pas l'obstacle au bonheur, elle en est souvent la condition.</strong>
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
                  IV. L'effort comme philosophie de vie
                </h2>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  Ce que l'effort révèle de nous
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  L'effort n'est pas seulement un moyen d'obtenir des résultats. C'est un révélateur de caractère. Face à la difficulté, nous découvrons qui nous sommes vraiment : notre capacité à persévérer, notre rapport à l'échec, notre tolérance à l'inconfort.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Les dirigeants et entrepreneurs qui réussissent sur le long terme partagent cette caractéristique : ils ont appris à voir l'effort non comme une punition, mais comme un privilège. Chaque défi est une opportunité de croissance. Chaque obstacle est un professeur.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                  Transmettre le goût de l'effort
                </h3>

                <p className="mb-6 leading-relaxed text-lg">
                  Si vous êtes parent, manager ou mentor, vous avez une responsabilité particulière : celle de transmettre une relation saine à l'effort. Pas la culture du sacrifice aveugle. Pas non plus la facilité systématique. Mais cette voie médiane : l'effort juste, calibré, porteur de sens.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Montrez par l'exemple. Parlez de vos propres efforts, de vos échecs traversés, de vos victoires durement acquises. Valorisez le processus autant que le résultat. Célébrez la persévérance, pas seulement le talent.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-16 mb-6">
                  Conclusion — Un défi pour aujourd'hui
                </h2>

                <p className="mb-6 leading-relaxed text-lg">
                  La culture du "sans effort" nous a volé quelque chose de précieux : la capacité à trouver du sens et du plaisir dans la difficulté. Mais ce qui a été désappris peut être réappris.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Cela commence par une prise de conscience : l'effort n'est pas votre ennemi. Il est votre allié le plus fidèle dans la construction d'une vie qui a du sens. Les raccourcis mènent à des impasses. Les chemins difficiles mènent aux sommets.
                </p>

                <p className="mb-6 leading-relaxed text-lg">
                  Demandez-vous :
                </p>

                <blockquote className="my-10 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
                  <p className="text-xl md:text-2xl italic text-foreground leading-relaxed font-light">
                    Quel petit effort important vais-je accomplir aujourd'hui ?<br />
                    Pas demain. Pas "quand j'aurai du temps". Aujourd'hui.
                  </p>
                </blockquote>

                <p className="mb-6 leading-relaxed text-lg">
                  Le changement commence par une seule chose : un effort juste, choisi, conscient. Et cet effort, répété jour après jour, construit une vie dont vous serez fier.
                </p>

                <p className="mb-6 leading-relaxed text-lg font-semibold text-primary">
                  Car au final, ce n'est pas ce que nous obtenons qui nous définit. C'est ce que nous avons été prêts à traverser pour l'obtenir.
                </p>
              </>
            ) : isChangementArticle ? (
              <>
                {/* Article sur le changement */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  1. Pourquoi nous changeons : entre nature et intention
                </h2>
                
                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  L'impermanence : ce qui change malgré nous
                </h3>
                
                <p className="mb-4 leading-relaxed text-lg">
                  La vie transforme continuellement les individus comme les organisations : responsabilités, relations, priorités, marchés, perception du monde. Même notre cerveau change physiquement grâce à la plasticité neuronale. Mais ce n'est pas ce changement-là que nous allons étudier ici.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  Le changement choisi : un acte stratégique
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Il existe une transformation beaucoup plus rare et puissante pour les entrepreneurs et leurs entreprises : <strong>le changement choisi</strong>. Celui qui naît d'une intention claire. Tony Robbins le résume : <em>« Clarity is power. »</em> Sans clarté, on avance au hasard. Avec clarté, on avance avec direction — que ce soit pour soi ou pour son organisation.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  2. Le changement choisi : un processus en conscience
                </h2>

                <p className="mb-4 leading-relaxed text-lg">
                  La plupart des dirigeants croient que le changement durable repose sur la volonté. C'est faux. La volonté est un élan. Le changement est une trajectoire.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  Trois forces permettent un changement durable, tant au niveau personnel qu'organisationnel :
                </p>

                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  1. La clarté (l'intention)
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Savoir ce qu'on ne veut plus pour soi et pour l'entreprise. Savoir ce qu'on veut à la place. L'écrire donne une direction partagée.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  2. L'identité
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Comme l'explique James Clear (Atomic Habits), ce n'est pas ce que l'on fait qui change durablement, mais qui l'on croit être. Un entrepreneur ne devient pas "quelqu'un qui innove". Il devient "quelqu'un dont l'identité est l'innovation". Une entreprise ne "fait" de la qualité, elle "est" une organisation qualité.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  3. Les micro-actions
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Ce sont les petites actions répétées — individuelles et collectives — qui contournent la résistance naturelle. Le changement profond n'est jamais un événement. C'est un rythme organisationnel.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  3. Le processus du changement (méthode KLYRA)
                </h2>

                <p className="mb-4 leading-relaxed text-lg">
                  Voici un cadre simple et concret pour ancrer une transformation durable, applicable aux individus comme aux organisations :
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  <strong>1) Identifier</strong> — Ce que l'on ne veut plus. Ce que l'on veut à la place. Écrire clarifie l'intention stratégique.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  <strong>2) Observer</strong> — Identifier ses schémas personnels et organisationnels, émotions, déclencheurs. La conscience précède la maîtrise.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  <strong>3) Agir</strong> — En micro-actions répétées qui créent un élan durable.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  <strong>4) Traverser l'inconfort</strong> — Le cerveau et les équipes détestent la nouveauté. La résistance n'est pas un échec, c'est une étape naturelle.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  <strong>5) Intégrer</strong> — Valider les victoires, les célébrer. Un changement est intégré lorsqu'il cesse d'être un effort et devient une nouvelle norme culturelle.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  4. Exemples concrets de transformation
                </h2>

                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  Transformation personnelle du dirigeant
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Ces dernières années, j'ai entamé un travail profond : physique, émotionnel, stratégique. Perte de poids, recentrage, structuration. Des évolutions obtenues par micro-actions, intention et discipline — les mêmes principes que j'applique dans l'accompagnement d'entreprises.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-6 mb-3">
                  Préparer et réussir une cession d'entreprise
                </h3>

                <p className="mb-4 leading-relaxed text-lg">
                  Préparer une entreprise à être vendue n'a rien d'improvisé. Cela demande de la clarté stratégique, une vision partagée, une structure solide et une discipline long terme. C'est un excellent exemple de changement choisi : aligner direction personnelle, méthode rigoureuse et constance organisationnelle.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  5. Pourquoi changer est difficile
                </h2>

                <p className="mb-4 leading-relaxed text-lg">
                  Tony Robbins identifie les forces invisibles derrière nos choix : éviter la douleur, rechercher le confort, préserver l'identité, économiser l'énergie. Ces mécanismes s'appliquent autant aux individus qu'aux cultures d'entreprise. Nous sommes conçus pour résister au changement. Mais être programmés n'est pas être condamnés. Comprendre ces mécanismes, c'est déjà les dépasser.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  6. Le changement : une compétence stratégique
                </h2>

                <p className="mb-4 leading-relaxed text-lg">
                  Un dirigeant et une entreprise qui se transforment en conscience : anticipent, inspirent, clarifient, stabilisent, ouvrent de nouvelles trajectoires de croissance. Le changement n'est pas un luxe personnel ou organisationnel. C'est une compétence stratégique moderne indispensable.
                </p>

                <blockquote className="my-10 pl-8 border-l-4 border-gold bg-secondary/30 py-8 pr-8 rounded-r-lg">
                  <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-light">
                    « Clarity is power. »
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">— Tony Robbins</p>
                </blockquote>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-4">
                  Conclusion
                </h2>

                <p className="mb-4 leading-relaxed text-lg">
                  Changer, ce n'est pas devenir quelqu'un d'autre ou transformer radicalement son entreprise. C'est devenir une version plus intentionnelle de soi-même et de son organisation.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                  Le changement profond commence par : « Je ne veux plus être cette version de moi / de mon entreprise. » Puis se poursuit par : « Voilà celle que je choisis de devenir. » Le reste : une méthode éprouvée, un rythme adapté, un accompagnement structuré.
                </p>
              </>
            ) : (
              <>
                {/* Article sur la peur de l'avion */}
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
              </>
            )}

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
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
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
