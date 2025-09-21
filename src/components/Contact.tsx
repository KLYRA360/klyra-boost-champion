import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-klyra-neutral-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contactez-nous
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Démarrons votre <span className="text-primary">transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour un premier échange gratuit et découvrir comment 
            notre support peut vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl">Demander votre diagnostic gratuit</CardTitle>
              <CardDescription className="text-base">
                Remplissez ce formulaire et nous vous recontactons sous 24h pour planifier 
                votre diagnostic personnalisé.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Prénom *</label>
                  <Input placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nom *</label>
                  <Input placeholder="Votre nom" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email professionnel *</label>
                <Input type="email" placeholder="votre.email@entreprise.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Téléphone</label>
                <Input type="tel" placeholder="+33 6 12 34 56 78" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Entreprise / Organisation</label>
                <Input placeholder="Nom de votre entreprise" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Votre fonction</label>
                <Input placeholder="Dirigeant, Manager, Porteur de projet..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Décrivez votre besoin de support *</label>
                <Textarea 
                  placeholder="Quel est votre principal défi actuel ? Quels résultats souhaitez-vous obtenir ?"
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par KLYRA360 
                  dans le cadre de votre demande de support professionnel.
                </p>
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Demander mon diagnostic gratuit
                <ArrowRight className="ml-2" />
              </Button>
              {/* Alternative CTA ocre : <Button variant="cta" size="lg" className="w-full">Demander mon diagnostic gratuit<ArrowRight className="ml-2" /></Button> */}
            </CardContent>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>Informations de contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground">+33 (0)7 82 35 02 54</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@klyra360.fr</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">France - Déplacements possibles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Disponibilité</p>
                    <p className="text-muted-foreground">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-accent border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent-foreground">Pourquoi choisir KLYRA360 ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-accent-foreground">Diagnostic gratuit</p>
                    <p className="text-accent-foreground/80 text-sm">Premier échange sans engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-accent-foreground">Méthode éprouvée</p>
                    <p className="text-accent-foreground/80 text-sm">Résultats mesurables garantis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-accent-foreground">Accompagnement personnalisé</p>
                    <p className="text-accent-foreground/80 text-sm">Solution sur-mesure pour vos enjeux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-accent-foreground">Réactivité</p>
                    <p className="text-accent-foreground/80 text-sm">Réponse sous 24h garantie</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency CTA */}
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold">Besoin urgent ?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pour les situations urgentes, contactez-nous directement par téléphone 
                  pour un support immédiat.
                </p>
                <Button variant="outline-klyra" className="w-full">
                  Appel d'urgence
                  <Phone className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;