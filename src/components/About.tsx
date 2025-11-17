import { Code2, Cpu, Database, Globe, Palette, Server } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePDF from "@/assets/resume.pdf"; // <-- Import du CV

const About = () => {
  const skills = [
    { name: "Python", icon: Code2 },
    { name: "PHP / Laravel", icon: Server },
    { name: "React / JavaScript", icon: Code2 },
    { name: "VB.NET", icon: Database },
    { name: "MySQL / SQL Server", icon: Database },
    { name: "Machine Learning", icon: Cpu },
    { name: "Deep Learning", icon: Cpu },
    { name: "Power BI", icon: Globe },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Arrière-plan */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Côté Image */}
            <div className="relative group animate-fade-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Yassine Brahimi - Développeur Full Stack & IA"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary shadow-xl rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Disponible pour des projets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Côté Contenu */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  À propos <span className="text-gradient">de moi</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">
                  Je m’appelle <span className="text-foreground font-semibold">Yassine Brahimi</span>, 
                  un <span className="text-primary font-semibold">Développeur Full Stack</span> passionné 
                  par l’<span className="text-primary font-semibold">Intelligence Artificielle</span> et les technologies modernes.
                </p>
                <p className="text-base sm:text-lg">
                  Titulaire d’un <span className="text-foreground font-semibold">BTS en Développement des Systèmes d’Information </span> 
                  et d’une <span className="text-foreground font-semibold">Licence d’Excellence en Intelligence Artificielle </span> 
                  à l’Université Hassan II de Casablanca, j’allie programmation, analyse de données et innovation.
                </p>
                <p className="text-base sm:text-lg">
                  Mon objectif est de concevoir des <span className="text-primary font-semibold">solutions numériques intelligentes et efficaces</span>, 
                  capables d’optimiser la gestion et d’améliorer l’expérience utilisateur.
                </p>

                {/* Bouton Télécharger CV */}
                <div className="mt-4">
                  <a
                    href={resumePDF}
                    download="Yassine_Brahimi_CV.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all"
                  >
                    Télécharger mon CV
                  </a>
                </div>
              </div>

              {/* Grille des Compétences */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Compétences techniques</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
