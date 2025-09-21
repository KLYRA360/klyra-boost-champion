import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  UserX,
  CircleDollarSign,
  AlertTriangle,
  HeartPulse,
  CheckCircle,
  Network,
  FileText,
  Clock,
  ExternalLink,
  Phone,
  Mail
} from "lucide-react";

// TODO: Replace with actual Stripe Payment Links
const STRIPE_ROUGE = "https://stripe.link/ROUGE_PLACEHOLDER";
const STRIPE_ORANGE = "https://stripe.link/ORANGE_PLACEHOLDER";

// Business hours: Monday to Friday, 9:00-19:00 Europe/Paris
const isWithinBusinessHours = (): boolean => {
  const now = new Date();
  const parisTime = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(now);

  const dayName = parisTime.find(part => part.type === 'weekday')?.value;
  const hour = parseInt(parisTime.find(part => part.type === 'hour')?.value || '0');
  
  const isWeekday = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'].includes(dayName || '');
  const isWorkingHour = hour >= 9 && hour < 19;
  
  return isWeekday && isWorkingHour;
};

const getNextOpeningMessage = (level: "rouge" | "orange"): string => {
  if (level === "rouge") {
    return "Rappel prioritaire le jour ouvré suivant entre 09:00 et 10:00.";
  }
  return "Rappel le jour ouvré suivant avant 13:00.";
};

const Urgence = () => {
  const [selectedLevel, setSelectedLevel] = useState<"rouge" | "orange">("rouge");
  const [modeRouge, setModeRouge] = useState<"appel" | "visio">("appel");
  const [modeOrange, setModeOrange] = useState<"appel" | "visio">("appel");
  const [isBusinessHours, setIsBusinessHours] = useState<boolean>(true);

  useEffect(() => {
    const checkBusinessHours = () => {
      setIsBusinessHours(isWithinBusinessHours());
    };
    
    checkBusinessHours();
    // Check every minute
    const interval = setInterval(checkBusinessHours, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePayment = (level: "rouge" | "orange") => {
    if (!isBusinessHours) return;
    const url = level === "rouge" ? STRIPE_ROUGE : STRIPE_ORANGE;
    window.open(url, "_blank");
  };

  const handleContactOutOfHours = () => {
    const subject = encodeURIComponent("Demande d'urgence - Rappel à l'ouverture");
    const body = encodeURIComponent(`Bonjour,

Je souhaite être rappelé dès l'ouverture pour une situation d'urgence.

Niveau souhaité : ${selectedLevel === "rouge" ? "Code Rouge (≤ 60 min)" : "Code Orange (≤ 4 h)"}
Mode de contact : ${selectedLevel === "rouge" ? modeRouge : modeOrange}

Contexte de l'urgence :
[Décrivez brièvement votre situation]

Coordonnées :
Nom : 
Téléphone : 
Email : 

Merci de me recontacter ${getNextOpeningMessage(selectedLevel).toLowerCase()}

Cordialement`);
    
    window.open(`mailto:TODO_EMAIL_ADDRESS?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Business Hours Banner */}
        <section className="bg-accent/10 border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-center gap-2 text-center">
              <Clock className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium">
                <strong>Disponibilité :</strong> LUN→VEN, 09:00–19:00 (Europe/Paris). 
                Les délais (≤ 60 min / ≤ 4 h) démarrent uniquement dans cette plage.
              </p>
            </div>
            
            {!isBusinessHours && (
              <div className="mt-2 text-center">
                <p className="text-sm text-muted-foreground bg-muted rounded-md px-3 py-2 inline-block">
                  Actuellement hors plage d'ouverture. Nous vous recontactons à l'ouverture (dès 09:00).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support d'urgence — on vous répond maintenant
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Besoin immédiat ? Nous priorisons votre situation et vous aidons à stabiliser rapidement.
          </p>
        </section>

        {/* Level Selection */}
        <section className="container mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold text-center mb-8">Choisissez votre niveau</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Code Rouge */}
            <Card className={`rounded-2xl border-2 transition-all duration-300 ${
              selectedLevel === "rouge" 
                ? "border-primary shadow-lg" 
                : "border-border hover:border-primary/50"
            }`}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Badge variant="destructive" className="px-3 py-1">
                    Prioritaire
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Code Rouge</CardTitle>
                <CardDescription className="text-lg">≤ 60 min</CardDescription>
                <div className="text-3xl font-bold text-primary mt-2">490 € HT</div>
                <p className="text-sm text-muted-foreground">Appel/visio 45–60 min</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Mode de contact</Label>
                  <RadioGroup 
                    value={modeRouge} 
                    onValueChange={(value: "appel" | "visio") => setModeRouge(value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="appel" id="rouge-appel" />
                      <Label htmlFor="rouge-appel">Appel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="visio" id="rouge-visio" />
                      <Label htmlFor="rouge-visio">Visio</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {!isBusinessHours && (
                  <div className="mb-4 p-3 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {getNextOpeningMessage("rouge")}
                    </p>
                  </div>
                )}
                
                {isBusinessHours ? (
                  <Button 
                    onClick={() => handlePayment("rouge")}
                    className="w-full"
                    size="lg"
                  >
                    Payer & démarrer
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleContactOutOfHours}
                    variant="secondary"
                    className="w-full"
                    size="lg"
                  >
                    Être rappelé à l'ouverture (dès 09:00)
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                )}
                
                <p className="text-xs text-muted-foreground text-center">
                  Après paiement, vous serez redirigé vers /urgence/merci
                </p>
                
                <a 
                  href="#inclus" 
                  className="block text-center text-sm text-primary hover:underline"
                >
                  Voir ce qui est inclus
                </a>
              </CardContent>
            </Card>

            {/* Code Orange */}
            <Card className={`rounded-2xl border-2 transition-all duration-300 ${
              selectedLevel === "orange" 
                ? "border-primary shadow-lg" 
                : "border-border hover:border-primary/50"
            }`}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Badge variant="secondary" className="px-3 py-1">
                    Rapide
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Code Orange</CardTitle>
                <CardDescription className="text-lg">≤ 4 h</CardDescription>
                <div className="text-3xl font-bold text-primary mt-2">390 € HT</div>
                <p className="text-sm text-muted-foreground">Appel/visio 60 min</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Mode de contact</Label>
                  <RadioGroup 
                    value={modeOrange} 
                    onValueChange={(value: "appel" | "visio") => setModeOrange(value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="appel" id="orange-appel" />
                      <Label htmlFor="orange-appel">Appel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="visio" id="orange-visio" />
                      <Label htmlFor="orange-visio">Visio</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {!isBusinessHours && (
                  <div className="mb-4 p-3 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {getNextOpeningMessage("orange")}
                    </p>
                  </div>
                )}
                
                {isBusinessHours ? (
                  <Button 
                    onClick={() => handlePayment("orange")}
                    className="w-full"
                    size="lg"
                  >
                    Payer & démarrer
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleContactOutOfHours}
                    variant="secondary"
                    className="w-full"
                    size="lg"
                  >
                    Être rappelé à l'ouverture (dès 09:00)
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                )}
                
                <p className="text-xs text-muted-foreground text-center">
                  Après paiement, vous serez redirigé vers /urgence/merci
                </p>
                
                <a 
                  href="#inclus" 
                  className="block text-center text-sm text-primary hover:underline"
                >
                  Voir ce qui est inclus
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Situations typiques */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">Situations typiques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                <UserX className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Problème collaborateur / conflit</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                <CircleDollarSign className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Trésorerie / banque / client critique</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Incident client / crise qualité / bad buzz</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                <HeartPulse className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Problème personnel impactant l'activité</p>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section id="inclus" className="bg-muted/30 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-12">Ce qui est inclus</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Diagnostic à chaud</h3>
                <p className="text-sm text-muted-foreground">
                  Pendant l'appel/visio
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Plan d'action en 3 points</h3>
                <p className="text-sm text-muted-foreground">
                  Envoyé sous 24 h
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Mise en relation</h3>
                <p className="text-sm text-muted-foreground">
                  Via le réseau KLYRA si nécessaire
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Règles & conditions */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">Règles & conditions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-sm font-medium text-destructive">
                <strong>Pas de no-show possible :</strong> en cas d'absence au rendez-vous, 
                la session est due et non remboursable.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm">
                <strong>Urgences médicales/sécuritaires :</strong> ne sont pas traitées → composer le 112.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm">
                <strong>Tarifs :</strong> les tarifs sont HT ; soir/week-end : 
                (pas de majoration automatique pour l'instant).
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>No-show :</strong> séance due et non remboursable.
            </p>
          </div>
        </section>

        {/* Après paiement */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Après paiement</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-center text-muted-foreground leading-relaxed">
                Après paiement, vous recevez un e-mail de confirmation. Nous vous contactons 
                dans le délai garanti (Rouge ≤ 60 min, Orange ≤ 4 h). Pour le mode Visio, 
                nous envoyons un lien (Meet/Teams).
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Button variant="outline" asChild>
                  <a href="tel:TODO_PHONE_NUMBER">
                    {/* TODO: Replace with actual phone number */}
                    Appeler maintenant
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="mailto:TODO_EMAIL_ADDRESS">
                    {/* TODO: Replace with actual email address */}
                    E-mail de secours
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Urgence;