import { Project } from "@/types/project";
import dashboardImg from "@/assets/dashboard-screenshot.jpg";
import productsImg from "@/assets/products-screenshot.jpg";
import invoicesImg from "@/assets/invoices-screenshot.jpg";
import alertsImg from "@/assets/alerts-screenshot.jpg";

export const projects: Project[] = [
  {
    id: "labstock",
    title: "LabStock",
    shortDescription: "Smart inventory management system for laboratories and warehouses",
    fullDescription: "LabStock is a comprehensive desktop application designed to simplify laboratory and warehouse stock management. Built with VB.NET and MySQL, it offers a complete solution for product tracking, user management, invoice generation, and real-time alerts.",
    image: dashboardImg,
    technologies: ["VB.NET", "MySQL", ".NET Framework", "Windows Forms"],
    features: [
      "Product management with CRUD operations",
      "User authentication & role-based access control",
      "Invoice creation and supplier order tracking",
      "Storage zone & warehouse organization",
      "Real-time stock monitoring",
      "Automated alerts for low stock and expiry dates",
      "PDF report generation",
      "Validation workflows for approvals"
    ],
    demoUrl: "#",
    category: "Desktop Application"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Modern online shopping platform with payment integration",
    fullDescription: "A full-featured e-commerce platform built with React and Laravel. Features include product catalog, shopping cart, payment processing, order management, and admin dashboard.",
    image: productsImg,
    technologies: ["React", "Laravel", "MySQL", "Stripe", "Tailwind CSS"],
    features: [
      "Responsive product catalog with filtering",
      "Shopping cart with session persistence",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory",
      "Customer reviews and ratings",
      "Email notifications"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    category: "Web Application"
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Bot",
    shortDescription: "Intelligent chatbot powered by machine learning for customer service",
    fullDescription: "An AI-powered chatbot that provides automated customer support using natural language processing. Built with Python and integrated with popular messaging platforms.",
    image: invoicesImg,
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "WebSocket"],
    features: [
      "Natural language understanding",
      "Multi-language support",
      "Intent recognition and classification",
      "Integration with CRM systems",
      "Real-time conversation handling",
      "Analytics dashboard",
      "Continuous learning from interactions"
    ],
    demoUrl: "https://chatbot-demo.example.com",
    category: "AI/ML Project"
  },
  {
    id: "task-manager",
    title: "Project Task Manager",
    shortDescription: "Collaborative project management tool with real-time updates",
    fullDescription: "A modern task management application that helps teams organize, track, and collaborate on projects. Features real-time updates, team collaboration, and progress tracking.",
    image: alertsImg,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
    features: [
      "Kanban board interface",
      "Real-time task updates",
      "Team collaboration tools",
      "File attachments and comments",
      "Project timeline visualization",
      "Activity tracking and notifications",
      "Role-based permissions"
    ],
    demoUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/yourusername/taskmanager",
    category: "Web Application"
  }
];
