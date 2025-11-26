import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  short_description?: string;
  technologies: string[];
  image_cover: string;
  images?: string[];
  gallery?: string[];
  demo_link?: string;
  github_link?: string;
  category?: { name: string };
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll vers le haut au chargement de la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Fonction pour retourner aux projets
  const handleBackToProjects = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Données statiques de tous les projets
  const projects: Project[] = [
    {
      id: 13,
      title: "Système de Gestion de Stock pour Laboratoire",
      slug: "gestion-stock-laboratoire-vbnet",
      description: "Système complet de gestion de stock destiné à un laboratoire d'analyses médicales. L'application permet la gestion des fournisseurs, des utilisateurs avec rôles, des produits et des zones de stockage. Elle offre la création et la validation des commandes, la validation des produits reçus, la génération automatique de factures en PDF, ainsi que des alertes intelligentes pour les dates de péremption et les ruptures de stock. Interface simple, fiable et adaptée au personnel professionnel.",
      short_description: "Application desktop de gestion de stock avec factures PDF et alertes.",
      technologies: ["VB.NET", "MySQL", "WinForms"],
      image_cover: "../src/assets/stock-app.png",
      images: [
        "../src/assets/projects/gestion_stock/commande.png",
        "../src/assets/projects/gestion_stock/fournisseur.png",
        "../src/assets/projects/gestion_stock/menu.png",
        "../src/assets/projects/gestion_stock/produits.png",
        "../src/assets/projects/gestion_stock/utilisateurs.png"
      ],
      demo_link: null,
      github_link: null,
      category: { name: "Desktop App" }
    },
    {
      id: 14,
      title: "Anabio Laboratory Website",
      slug: "anabio-laboratory-website",
      description: "Plateforme web complète pour le laboratoire médical Anabio. Le site offre une présentation professionnelle du laboratoire avec système de géolocalisation interactive, galerie photo personnalisable et dynamique, intégration des réseaux sociaux, et système de prise de rendez-vous en ligne. Les patients peuvent consulter les actualités médicales, soumettre leurs avis via un formulaire de satisfaction, et postuler en ligne via la page recrutement. Le back-office comprend un tableau de bord administrateur robuste permettant la gestion complète des réservations, la publication d'actualités, la modération des avis clients, et la gestion de la galerie multimédia. Architecture développée avec Laravel pour garantir sécurité, performance et évolutivité.",
      short_description: "Site web professionnel pour laboratoire médical avec réservation en ligne et gestion administrative.",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Google Maps API", "jQuery"],
      image_cover: "../src/assets/labanabio-home.png",
      images: [
        "../src/assets/projects/labanabio/home.png",
        "../src/assets/projects/labanabio/emplacement.png",
        "../src/assets/projects/labanabio/gallerie.png",
        "../src/assets/projects/labanabio/actualite.png",
        "../src/assets/projects/labanabio/admin-dashboard.png",
        "../src/assets/projects/labanabio/appointments.png"
      ],
      demo_link: "https://www.labanabio.com/",
      github_link: null,
      category: { name: "Web Application" }
    },
    {
      id: 15,
      title: "Prédiction des Prix de Voitures au Maroc",
      slug: "prediction-prix-voitures-maroc-ml",
      description: "Développement d'un modèle prédictif basé sur l'Intelligence Artificielle (Machine Learning) permettant d'estimer les prix des voitures sur le marché marocain. Les données ont été collectées par web scraping depuis Avito.ma et traitées avec des algorithmes avancés. Le modèle atteint un taux de précision de 96%, offrant une estimation fiable et utile pour les acheteurs, vendeurs et concessionnaires automobiles. Le projet comprend une analyse exploratoire approfondie des données, un nettoyage et une transformation sophistiqués, l'entraînement de plusieurs modèles de régression (Linear Regression, Random Forest), et le déploiement d'une interface utilisateur moderne et responsive.",
      short_description: "Modèle ML de prédiction de prix avec 96% de précision basé sur données Avito.ma.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "BeautifulSoup", "Google Colab", "Seaborn", "Matplotlib"],
      image_cover: "../src/assets/prediction_home.png",
      images: [
        "../src/assets/projects/prediction_voiture/prediction_home.png",
        "../src/assets/projects/prediction_voiture/comment_fct.png",
        "../src/assets/projects/prediction_voiture/formulaire.png",
        "../src/assets/projects/prediction_voiture/resultat.png"
      ],
      demo_link: null,
      github_link: null,
      category: { name: "AI Project" }
    },
    {
      id: 16,
      title: "Système de Recommandation de Formations",
      slug: "systeme-recommandation-formations-maroc",
      description: "Mise en place d'un moteur de recommandation intelligent destiné aux jeunes marocains, afin de proposer des formations adaptées en fonction du métier visé. Le système analyse les compétences nécessaires et oriente automatiquement vers les parcours les plus pertinents. Développé avec Python et FastAPI pour le backend, React pour le frontend, et des algorithmes de recherche de similarité vectorielle via FAISS pour garantir des recommandations rapides et précises.",
      short_description: "Moteur de recommandation intelligent pour orienter les jeunes vers les formations adaptées.",
      technologies: ["Python", "FastAPI", "React", "FAISS", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLP", "Google Colab"],
      image_cover: "../src/assets/recommendation_home.png",
      images: [
        "../src/assets/projects/systeme_recommendation_formation/recommendation_home.png",
        "../src/assets/projects/systeme_recommendation_formation/recherche_intelligent.png",
        "../src/assets/projects/systeme_recommendation_formation/comment_camarche.png",
        "../src/assets/projects/systeme_recommendation_formation/notre_mission.png",
        "../src/assets/projects/systeme_recommendation_formation/resultat.png",
        "../src/assets/projects/systeme_recommendation_formation/contactez_nous.png"
      ],
      demo_link: null,
      github_link: null,
      category: { name: "AI Project" }
    },
    {
      id: 18,
      title: "Détection d'Objets en Temps Réel avec YOLOv8",
      slug: "detection-objets-temps-reel-yolov8",
      description: "Projet de Computer Vision développé dans le cadre de la Licence d'Excellence en Intelligence Artificielle à l'Université Hassan II de Casablanca - Faculté des Sciences Ben M'Sik. Le système utilise YOLOv8m pour détecter efficacement des objets petits et rapides en temps réel, répondant aux besoins des véhicules autonomes, de la robotique et de la surveillance intelligente.",
      short_description: "Système de détection d'objets temps réel avec YOLOv8m - 85.6% de précision sur 20 classes.",
      technologies: ["Python", "YOLOv8", "PyTorch", "Ultralytics", "Computer Vision", "Deep Learning", "Roboflow", "OpenCV"],
      image_cover: "../src/assets/deploiment.png",
      images: [
        "../src/assets/projects/detection_object/resultat.png",
        "../src/assets/projects/detection_object/deploiment.png",
        "../src/assets/projects/detection_object/poster.png"
      ],
      demo_link: null,
      github_link: null,
      category: { name: "AI Project" }
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Trouver le projet par slug ou id
  const project = projects.find(p => p.slug === id || p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Button onClick={handleBackToProjects}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Back Button modifié */}
          <Button 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 mb-8"
            onClick={handleBackToProjects}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                <img
                  src={project.image_cover}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  {project.category && (
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      {project.category.name}
                    </div>
                  )}

                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demo_link && (
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.demo_link, "_blank")}
                    >
                      <ExternalLink className="mr-2 w-5 h-5" />
                      Live Demo
                    </Button>
                  )}
                  {project.github_link && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open(project.github_link, "_blank")}
                    >
                      <Github className="mr-2 w-5 h-5" />
                      View Code
                    </Button>
                  )}
                </div>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-lg bg-card border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Features Section */}
            {project.short_description && (
              <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 sm:p-12 mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Key <span className="text-gradient">Details</span>
                </h2>
                <p className="text-base leading-relaxed">{project.short_description}</p>
              </div>
            )}

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 sm:p-12">
                <h2 className="text-3xl font-bold mb-8">
                  Project <span className="text-gradient">Gallery</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden border border-border/50 cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;
