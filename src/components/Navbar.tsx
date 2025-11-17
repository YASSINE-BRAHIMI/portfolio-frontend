import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // New scroll / redirect system
  const goToSection = (id: string) => {
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }

    setIsMobileMenuOpen(false);
  };

  const sections = ["home", "about", "video", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl shadow-lg border-b border-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => goToSection("home")}
            className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-400">&lt;YB/&gt;</span> Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => goToSection(section)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {section === "video"
                  ? "Promo Video"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* CTA - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => goToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-full shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-cyan-400/20 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => goToSection(section)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  {section === "video"
                    ? "Promo Video"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button
                onClick={() => goToSection("contact")}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
