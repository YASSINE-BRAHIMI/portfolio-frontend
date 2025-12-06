import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = ["Accueil", "À propos", "Projets", "Contact"];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* Identité */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Yassine Brahimi</h3>
              <p className="text-sm text-muted-foreground">
                Développeur Full Stack & IA — création d’expériences web modernes,
                performantes et axées sur l’innovation.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-semibold">Navigation</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`/#${item.toLowerCase().replace(" ", "")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Réseaux</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/yassine-brahimi-officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Bas du Footer */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Portfolio — Yassine Brahimi. Tous droits réservés.
            </p>
            <p>
              Conçu avec <span className="text-primary font-medium">React</span>{" "}
              & <span className="text-primary font-medium">TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
