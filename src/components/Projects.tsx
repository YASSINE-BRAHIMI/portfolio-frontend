import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Données statiques des projets
  const projects = [
    {
      id: 13,
      title: "Système de Gestion de Stock pour Laboratoire",
      slug: "gestion-stock-laboratoire-vbnet",
      short_description: "Application desktop de gestion de stock avec factures PDF et alertes.",
      description: "Système complet de gestion de stock destiné à un laboratoire d'analyses médicales...",
      technologies: ["VB.NET", "MySQL", "WinForms"],
      image_cover: "../src/assets/stock-app.png",
      demo_link: null,
      github_link: null,
      category: { name: "Desktop App" }
    },
    {
      id: 14,
      title: "Anabio Laboratory Website",
      slug: "anabio-laboratory-website",
      short_description: "Site web professionnel pour laboratoire médical avec réservation en ligne et gestion administrative.",
      description: "Plateforme web complète pour le laboratoire médical Anabio...",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Google Maps API", "jQuery"],
      image_cover: "../src/assets/labanabio-home.png",
      demo_link: "https://www.labanabio.com/",
      github_link: null,
      category: { name: "Web Application" }
    },
    {
      id: 15,
      title: "Prédiction des Prix de Voitures au Maroc",
      slug: "prediction-prix-voitures-maroc-ml",
      short_description: "Modèle ML de prédiction de prix avec 96% de précision basé sur données Avito.ma.",
      description: "Développement d'un modèle prédictif basé sur l'Intelligence Artificielle...",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "BeautifulSoup", "Google Colab", "Seaborn", "Matplotlib"],
      image_cover: "../src/assets/prediction_home.png",
      demo_link: null,
      github_link: null,
      category: { name: "AI Project" }
    },
    {
      id: 16,
      title: "Système de Recommandation de Formations",
      slug: "systeme-recommandation-formations-maroc",
      short_description: "Moteur de recommandation intelligent pour orienter les jeunes vers les formations adaptées.",
      description: "Mise en place d'un moteur de recommandation intelligent destiné aux jeunes marocains...",
      technologies: ["Python", "FastAPI", "React", "FAISS", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLP", "Google Colab"],
      image_cover: "../src/assets/recommendation_home.png",
      demo_link: null,
      github_link: null,
      category: { name: "AI Project" }
    },
    {
      id: 18,
      title: "Détection d'Objets en Temps Réel avec YOLOv8",
      slug: "detection-objets-temps-reel-yolov8",
      short_description: "Système de détection d'objets temps réel avec YOLOv8m - 85.6% de précision sur 20 classes.",
      description: "Projet de Computer Vision développé dans le cadre de la Licence d'Excellence en Intelligence Artificielle...",
      technologies: ["Python", "YOLOv8", "PyTorch", "Ultralytics", "Computer Vision", "Deep Learning", "Roboflow", "OpenCV"],
      image_cover: "../src/assets/deploiment.png",
      demo_link: null,
      github_link: null,
      category: { name: "AI Project" }
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Explore my portfolio of web applications, desktop software, and AI-powered solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img
                    src={project.image_cover || "/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium shadow-lg">
                    {project.category?.name || "Uncategorized"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.short_description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-primary/5 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link to={`/projects/${project.slug}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 group/btn">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    {project.demo_link && (
                      <Button
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                        onClick={() => window.open(project.demo_link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.github_link && (
                      <Button
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                        onClick={() => window.open(project.github_link, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
