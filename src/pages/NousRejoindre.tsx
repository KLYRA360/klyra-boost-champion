import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Target, 
  CheckCircle, 
  Layers, 
  BookOpenCheck, 
  Briefcase, 
  Handshake,
  Users,
  Puzzle,
  ShieldCheck,
  Timer,
  UserPlus,
  Building2
} from "lucide-react";

const NousRejoindre = () => {
  const [coachForm, setCoachForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    linkedin: "",
    experience: "",
    message: ""
  });

  const [partnerForm, setPartnerForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    linkedin: "",
    expertise: "",
    message: ""
  });

  // TODO: Replace with Brevo/Typeform integration
  const handleCoachSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Candidature coach KLYRA";
    const body = `Nom: ${coachForm.nom}\nEmail: ${coachForm.email}\nTéléphone: ${coachForm.telephone}\nVille: ${coachForm.ville}\nLinkedIn: ${coachForm.linkedin}\nAnnées d'expérience: ${coachForm.experience}\n\nMessage:\n${coachForm.message}`;
    window.location.href = `mailto:contact@klyra360.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // TODO: Replace with Brevo/Typeform integration
  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Proposition de partenariat KLYRA";
    const body = `Nom: ${partnerForm.nom}\nEmail: ${partnerForm.email}\nTéléphone: ${partnerForm.telephone}\nVille: ${partnerForm.ville}\nLinkedIn: ${partnerForm.linkedin}\nDomaine d'expertise: ${partnerForm.expertise}\n\nMessage:\n${partnerForm.message}`;
    window.location.href = `mailto:contact@klyra360.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* SEO */}
      <title>Nous rejoindre – KLYRA</title>
      <meta name="description" content="Rejoignez KLYRA comme coach certifié ou partenaire. Formation à la Méthode KLYRA, collectif exigeant, accompagnement de dirigeants." />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero text-primary-foreground">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Rejoindre KLYRA — le collectif de la Méthode
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90">
                Formez-vous à la Méthode KLYRA, rejoignez un collectif exigeant et agissez aux côtés de dirigeants 
                pour clarifier, structurer et délivrer vite.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => document.getElementById('coachs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-2xl shadow-soft"
                >
                  <UserPlus className="mr-2 w-5 h-5" />
                  Devenir Coach
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => document.getElementById('partenaires')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-2xl shadow-soft"
                >
                  <Building2 className="mr-2 w-5 h-5" />
                  Devenir Partenaire
                </Button>
              </div>
            </div>
          </section>

          {/* Section Coachs */}
          <section id="coachs" className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Devenez Coach KLYRA</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Rejoignez notre réseau de coachs certifiés et accompagnez les dirigeants avec notre méthode éprouvée.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Texte à gauche */}
                <div className="space-y-8">
                  {/* Pourquoi nous rejoindre */}
                  <Card className="border-klyra-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-klyra-green" />
                        Pourquoi nous rejoindre ?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Méthode structurée et éprouvée auprès de +100 dirigeants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Certification reconnue et différenciante sur le marché</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Réseau qualifié de coachs et de prospects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Support continu et échanges entre pairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Outils et ressources exclusifs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Programme & certification */}
                  <Card className="border-klyra-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpenCheck className="w-5 h-5 text-klyra-green" />
                        Programme & certification
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Layers className="w-5 h-5 text-klyra-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">3 modules de formation</h4>
                            <p className="text-sm text-muted-foreground">
                              Clarifier • Structurer • Impacter
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-klyra-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Accès Notion exclusif</h4>
                            <p className="text-sm text-muted-foreground">
                              Ressources, templates et outils
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <ShieldCheck className="w-5 h-5 text-klyra-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Certificat officiel</h4>
                            <p className="text-sm text-muted-foreground">
                              Reconnaissance de votre expertise
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Cartes à droite */}
                <div className="space-y-8">
                  {/* Profil recherché */}
                  <Card className="border-klyra-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-klyra-green" />
                        Profil recherché
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Expérience en coaching ou conseil (3+ ans)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Connaissance du monde de l'entreprise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Aisance relationnelle et pédagogique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Engagement qualité et déontologie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-klyra-green mt-0.5 flex-shrink-0" />
                          <span>Ambition commerciale assumée</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Process d'entrée */}
                  <Card className="border-klyra-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Handshake className="w-5 h-5 text-klyra-green" />
                        Process d'entrée
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-6 h-6 bg-klyra-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                          <span>Candidature et échange découverte</span>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 bg-klyra-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                          <span>Entretien d'évaluation approfondi</span>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 bg-klyra-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                          <span>Formation et certification (3 mois)</span>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 bg-klyra-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                          <span>Intégration dans le réseau KLYRA</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Formulaire Coach */}
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle>Candidater comme coach</CardTitle>
                  <p className="text-muted-foreground">
                    Rejoignez notre réseau de coachs certifiés KLYRA
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCoachSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Nom complet *"
                          value={coachForm.nom}
                          onChange={(e) => setCoachForm({...coachForm, nom: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email *"
                          value={coachForm.email}
                          onChange={(e) => setCoachForm({...coachForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Téléphone"
                          value={coachForm.telephone}
                          onChange={(e) => setCoachForm({...coachForm, telephone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Ville"
                          value={coachForm.ville}
                          onChange={(e) => setCoachForm({...coachForm, ville: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Profil LinkedIn"
                          value={coachForm.linkedin}
                          onChange={(e) => setCoachForm({...coachForm, linkedin: e.target.value})}
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Années d'expérience"
                          value={coachForm.experience}
                          onChange={(e) => setCoachForm({...coachForm, experience: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Présentez-vous et expliquez votre motivation"
                        value={coachForm.message}
                        onChange={(e) => setCoachForm({...coachForm, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Envoyer ma candidature
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section Partenaires */}
          <section id="partenaires" className="py-20 bg-klyra-neutral-light/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Devenez Partenaire KLYRA</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Développons ensemble un écosystème de partenaires pour accompagner nos clients dans tous leurs défis.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-klyra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-klyra-green" />
                      Qui recherchons-nous ?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Consultants spécialisés</li>
                      <li>• Experts techniques</li>
                      <li>• Formateurs professionnels</li>
                      <li>• Coachs indépendants</li>
                      <li>• Agences de conseil</li>
                      <li>• Prestataires IT</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-klyra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Puzzle className="w-5 h-5 text-klyra-green" />
                      Ce que nous apportons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Flux de prospects qualifiés</li>
                      <li>• Référencements mutuels</li>
                      <li>• Co-construction d'offres</li>
                      <li>• Partage d'expertise</li>
                      <li>• Réseau professionnel</li>
                      <li>• Opportunités de croissance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-klyra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-klyra-green" />
                      Nos attentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Excellence opérationnelle</li>
                      <li>• Valeurs partagées</li>
                      <li>• Engagement qualité</li>
                      <li>• Réactivité client</li>
                      <li>• Esprit collaboratif</li>
                      <li>• Vision long terme</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Formulaire Partenaire */}
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle>Proposer un partenariat</CardTitle>
                  <p className="text-muted-foreground">
                    Développons ensemble des synergies professionnelles
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Nom complet *"
                          value={partnerForm.nom}
                          onChange={(e) => setPartnerForm({...partnerForm, nom: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email *"
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Téléphone"
                          value={partnerForm.telephone}
                          onChange={(e) => setPartnerForm({...partnerForm, telephone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Ville"
                          value={partnerForm.ville}
                          onChange={(e) => setPartnerForm({...partnerForm, ville: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Profil LinkedIn"
                          value={partnerForm.linkedin}
                          onChange={(e) => setPartnerForm({...partnerForm, linkedin: e.target.value})}
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Domaine d'expertise"
                          value={partnerForm.expertise}
                          onChange={(e) => setPartnerForm({...partnerForm, expertise: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Présentez votre activité et les synergies envisagées"
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Proposer un partenariat
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Quelle est la différence entre coach et partenaire KLYRA ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Les coachs KLYRA sont certifiés à notre méthode et interviennent directement auprès des clients 
                      en suivant notre approche structurée. Les partenaires sont des experts complémentaires 
                      (techniques, sectoriels, fonctionnels) qui enrichissent nos missions sans nécessairement 
                      être certifiés KLYRA.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Combien coûte la formation de coach KLYRA ?
                    </AccordionTrigger>
                    <AccordionContent>
                      La formation est entièrement financée par KLYRA pour les profils sélectionnés. 
                      En contrepartie, nous demandons un engagement minimal de 2 ans dans le réseau 
                      et le respect de nos standards qualité.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Comment se déroule la collaboration avec les partenaires ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Nous développons des partenariats gagnant-gagnant basés sur la complémentarité. 
                      Selon les besoins clients, nous pouvons co-intervenir, vous référencer, 
                      ou co-construire des offres. Chaque partenariat fait l'objet d'un accord 
                      spécifique définissant les modalités de collaboration.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Construisons un réseau d'exécution fiable
              </h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                Rejoignez KLYRA et participez à l'accompagnement d'excellence des dirigeants et organisations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => document.getElementById('coachs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-2xl shadow-soft"
                >
                  <UserPlus className="mr-2 w-5 h-5" />
                  Devenir Coach
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => document.getElementById('partenaires')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-2xl shadow-soft"
                >
                  <Building2 className="mr-2 w-5 h-5" />
                  Devenir Partenaire
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NousRejoindre;