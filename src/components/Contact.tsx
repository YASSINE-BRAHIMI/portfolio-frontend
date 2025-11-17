import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_rdw9z1x";      // Remplace par ton Service ID EmailJS
    const templateID = "template_5sweqbk";    // Remplace par ton Template ID EmailJS
    const publicKey = "2d5k1bztM-mm8AeB7";      // Remplace par ta Public Key EmailJS

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          toast({
            title: "Message envoyé !",
            description: "Merci de m’avoir contacté. Je vous répondrai très bientôt.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Erreur",
            description: "Une erreur est survenue lors de l'envoi du message.",
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Entrons en <span className="text-gradient">Contact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Vous avez un projet en tête ? Discutons ensemble de la meilleure
              façon de le concrétiser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Formulaire */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Adresse e-mail</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Parlez-moi de votre projet..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 glow-hover group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Email */}
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <a
                      href="mailto:brahimiyassine589@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      brahimiyassine589@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Réseaux professionnels</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/yassine-brahimi-officiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center gap-2 group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Ouvert aux opportunités */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="font-semibold mb-2">Ouvert aux opportunités</h3>
                <p className="text-sm text-muted-foreground">
                  Actuellement disponible pour des projets freelance ou des postes à temps plein en développement Full Stack et Intelligence Artificielle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
