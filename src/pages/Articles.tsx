import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import articleAvion from "@/assets/article-avion.jpg";
import articleCoaching from "@/assets/article-coaching.jpg";
import articleMindfulness from "@/assets/article-mindfulness.jpg";

const articles = [
  {
    id: "maman-jai-peur-de-lavion",
    title: "✈️ Maman, j'ai peur de l'avion",
    excerpt: "Et si la peur était un faux signal ? Réflexion sur nos peurs héritées, nos comportements à risque et comment transformer l'incertitude en moteur d'action.",
    image: articleAvion,
  },
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

const Articles = () => {
  return (
    <div className="min-h-screen bg-[#fdf9f4]">
      <Header />
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Articles & Insights
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos réflexions, conseils et analyses sur le leadership, l'accompagnement et le développement personnel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
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
                  <a href={`/articles/${article.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Lire l'article
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
