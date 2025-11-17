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
  images?: string[]; // <- ajout pour la galerie
  demo_link?: string;
  github_link?: string;
  category?: Category;
  tags?: Tag[];
}
