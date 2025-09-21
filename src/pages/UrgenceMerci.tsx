import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, Mail, Clock } from "lucide-react";

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

const getOutOfHoursMessage = (type: "rouge" | "orange" | null): string => {
  if (type === "rouge") {
    return "Rappel prioritaire le jour ouvré suivant entre 09:00 et 10:00.";
  }
  if (type === "orange") {
    return "Rappel le jour ouvré suivant avant 13:00.";
  }
  return "Nous vous recontacterons dès l'ouverture.";
};

const UrgenceMerci = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") as "rouge" | "orange" | null;
  const [isBusinessHours, setIsBusinessHours] = useState<boolean>(true);
  const [urgenceMode, setUrgenceMode] = useState<"appel" | "visio">("appel");
  
  const [slaInfo, setSlaInfo] = useState<{
    title: string;
    delay: string;
    badge: string;
    variant: "destructive" | "secondary";
  }>({
    title: "Code Rouge",
    delay: "≤ 60 min",
    badge: "Prioritaire",
    variant: "destructive"
  });

  useEffect(() => {
    const checkBusinessHours = () => {
      setIsBusinessHours(isWithinBusinessHours());
    };
    
    // Read mode from localStorage
    const savedMode = localStorage.getItem("urgence_mode") as "appel" | "visio" | null;
    if (savedMode) {
      setUrgenceMode(savedMode);
    }
    
    checkBusinessHours();
    // Check every minute
    const interval = setInterval(checkBusinessHours, 60000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (type === "orange") {
      setSlaInfo({
        title: "Code Orange",
        delay: "≤ 4 h",
        badge: "Rapide",
        variant: "secondary"
      });
    }
  }, [type]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Paiement confirmé — nous revenons vers vous
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre demande de support d'urgence a été enregistrée et confirmée.
            </p>
          </section>

          {/* SLA Reminder */}
          <section className="max-w-2xl mx-auto mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Badge variant={slaInfo.variant} className="px-3 py-1">
                    {slaInfo.badge}
                  </Badge>
                </div>
                <CardTitle className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  {slaInfo.title} — {slaInfo.delay}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isBusinessHours ? (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      {urgenceMode === "appel" 
                        ? "Nous vous appelons dans le délai garanti." 
                        : "Lien Meet/Teams envoyé."}
                    </p>
                    <p className="text-muted-foreground">
                      Vous recevrez un e-mail de confirmation avec tous les détails.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Vous recevrez un e-mail de confirmation avec tous les détails.
                    </p>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <strong>Hors horaires d'ouverture :</strong> {getOutOfHoursMessage(type)}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Actions */}
          <section className="max-w-lg mx-auto space-y-6">
            <div className="flex flex-col gap-4">
              {urgenceMode === "appel" ? (
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="tel:TODO_PHONE_NUMBER">
                    <Phone className="w-4 h-4 mr-2" />
                    {/* TODO: Replace with actual phone number */}
                    Être appelé maintenant
                  </a>
                </Button>
              ) : (
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="mailto:TODO_EMAIL_ADDRESS?subject=Demande lien visio - Commande confirmée&body=Bonjour,%0D%0A%0D%0AJe viens de confirmer ma commande de support d'urgence en mode visio.%0D%0A%0D%0AMerci de m'envoyer le lien Meet/Teams.%0D%0A%0D%0ACordialement">
                    <Mail className="w-4 h-4 mr-2" />
                    {/* TODO: Replace with actual email address */}
                    Recevoir un lien visio
                  </a>
                </Button>
              )}
              
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="mailto:TODO_EMAIL_ADDRESS?subject=Contexte urgence - Commande confirmée&body=Bonjour,%0D%0A%0D%0AJe viens de confirmer ma commande de support d'urgence.%0D%0A%0D%0AContexte de ma situation :%0D%0A[Décrivez votre situation ici]%0D%0A%0D%0ACordialement">
                  <Mail className="w-4 h-4 mr-2" />
                  {/* TODO: Replace with actual email address */}
                  Envoyer le contexte
                </a>
              </Button>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Important :</strong> Si vous n'avez pas de nouvelles dans le délai promis, 
                utilisez le numéro de téléphone ci-dessus.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="max-w-3xl mx-auto mt-16">
            <h2 className="text-xl font-bold text-center mb-8">Prochaines étapes</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold">Confirmation e-mail</h3>
                <p className="text-sm text-muted-foreground">
                  Vous recevez les détails de votre commande
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold">Contact rapide</h3>
                <p className="text-sm text-muted-foreground">
                  Nous vous contactons dans le délai garanti
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold">Plan d'action</h3>
                <p className="text-sm text-muted-foreground">
                  Vous recevez votre plan sous 24h
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UrgenceMerci;