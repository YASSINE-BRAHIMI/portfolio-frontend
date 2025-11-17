import { Package, Users, FileText, AlertCircle, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dashboardImg from "@/assets/dashboard-screenshot.jpg";
import productsImg from "@/assets/products-screenshot.jpg";
import invoicesImg from "@/assets/invoices-screenshot.jpg";
import alertsImg from "@/assets/alerts-screenshot.jpg";

const Features = () => {
  const features = [
    {
      title: "Product Management",
      description: "Add, edit, delete, and view products with comprehensive tracking",
      icon: Package,
      image: productsImg,
      tech: ["VB.NET", "MySQL", ".NET Framework"],
    },
    {
      title: "User & Role Management",
      description: "Advanced permission system with role-based access control",
      icon: Users,
      image: dashboardImg,
      tech: ["Authentication", "Authorization", "Security"],
    },
    {
      title: "Invoice & Orders",
      description: "Create and monitor invoices with supplier order traceability",
      icon: FileText,
      image: invoicesImg,
      tech: ["PDF Generation", "Reporting", "Analytics"],
    },
    {
      title: "Smart Alerts",
      description: "Real-time notifications for low stock and expiry dates",
      icon: AlertCircle,
      image: alertsImg,
      tech: ["Notifications", "Monitoring", "Automation"],
    },
    {
      title: "Storage Management",
      description: "Organize warehouse zones with precise location tracking",
      icon: MapPin,
      image: dashboardImg,
      tech: ["Warehouse", "Organization", "Tracking"],
    },
    {
      title: "Validation System",
      description: "Approval workflows for orders and inventory items",
      icon: CheckCircle,
      image: productsImg,
      tech: ["Workflow", "Approval", "Quality Control"],
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">LabStock</span> — Smarter Stock Management
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A comprehensive desktop application built to simplify laboratory and warehouse management
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              VB.NET
            </div>
            <div className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
              MySQL
            </div>
            <div className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
              .NET Framework
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-primary/5 text-primary border border-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Features List */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Complete Feature Set
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Product management (CRUD operations)",
                "User authentication & role management",
                "Invoice creation and monitoring",
                "Storage zone & warehouse organization",
                "Real-time stock tracking",
                "Expiry and low-stock alerts",
                "Order & supplier traceability",
                "Validation system for approvals",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
