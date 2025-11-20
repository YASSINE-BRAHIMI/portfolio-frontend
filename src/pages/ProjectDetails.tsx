import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  short_description?: string;
  technologies: string[];
  image_cover: string;
  images?: string[] | string; // Peut être un tableau ou une chaîne JSON
  gallery?: string[]; // Champ alternatif
  demo_link?: string;
  github_link?: string;
  category?: Category;
  tags?: Tag[];
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://yassinebrahimi.great-site.net/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Project data received:", data);
        
        // Parser le champ images s'il est une chaîne JSON
        if (typeof data.images === 'string') {
          try {
            data.images = JSON.parse(data.images);
            console.log("Parsed images:", data.images);
          } catch (e) {
            console.error("Error parsing images JSON:", e);
            data.images = [];
          }
        }
        
        // S'assurer que images est un tableau, sinon utiliser un tableau vide
        if (!Array.isArray(data.images)) {
          data.images = [];
        }
        
        // Utiliser gallery si images est vide
        if (data.images.length === 0 && data.gallery && Array.isArray(data.gallery)) {
          data.images = data.gallery;
        }
        
        // Convertir les chemins relatifs en chemins absolus pour Vite
        data.images = data.images.map((img: string) => {
          // Si le chemin commence par /assets, le convertir en chemin src
          if (img.startsWith('/assets/projects/')) {
            return img.replace('/assets/', '/src/assets/');
          }
          return img;
        });
        
        console.log("Final images array:", data.images);
        
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>

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

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mt-6 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm border border-accent/20"
                        >
                          #{tag.name}
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