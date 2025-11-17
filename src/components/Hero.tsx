import { Button } from "@/components/ui/button";
import { Brain, Sparkles, ArrowRight, Code2, Database, Cpu } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { name: "Python", icon: Code2 },
    { name: "PHP", icon: Code2 },
    { name: "VB.NET", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "Laravel", icon: Code2 },
    { name: "MySQL", icon: Database },
    { name: "TensorFlow", icon: Cpu },
    { name: "Power BI", icon: Database },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background 3D avec overlay amélioré */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/interactiveaiwebsite-bJLbML2NMj99wQB5XbtMmTjj/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Background"
          className="opacity-70"
        ></iframe>
      </div>

      {/* Gradient overlay stratifié */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50 z-[1]" />

      {/* Grille de fond subtile */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 px-6 lg:px-16 py-20">
        <div className="max-w-5xl mx-auto lg:mx-0">
          
          {/* Badge avec animation */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm mb-8 hover:bg-cyan-500/15 transition-all duration-300 group">
            <Brain className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-cyan-400 font-semibold tracking-wide">
              Développeur Full Stack & Intelligence Artificielle
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          {/* Main title avec meilleure typographie */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8">
            <span className="block text-white drop-shadow-2xl mb-2">
              Allier Code et
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
              Intelligence
            </span>
            <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              pour Créer l'Avenir
            </span>
          </h1>

          {/* Subtitle amélioré */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed mb-10 drop-shadow-lg">
            Passionné par le <span className="text-cyan-400 font-medium">développement web</span> et 
            l'<span className="text-cyan-400 font-medium">intelligence artificielle</span>,
            je conçois des applications performantes et intelligentes, du front-end
            jusqu'à l'analyse de données et au Machine Learning.
          </p>

          {/* Buttons avec meilleur espacement */}
          <div className="flex flex-wrap gap-5 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              Voir mes Projets
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/20 hover:border-cyan-400/50 px-10 py-7 text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              À propos de moi
            </Button>
          </div>

          {/* Tech stack réorganisé avec icônes */}
          <div className="space-y-4">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Technologies Maîtrisées
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Éléments flottants améliorés avec animation */}
      <div className="absolute top-1/4 right-1/4 z-[2]">
        <div className="relative">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute" />
          <div className="w-3 h-3 bg-cyan-400 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/5 z-[2]">
        <div className="relative" style={{ animationDelay: '0.5s' }}>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute" />
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
        </div>
      </div>
      <div className="absolute top-1/2 right-1/3 z-[2]">
        <div className="relative" style={{ animationDelay: '1s' }}>
          <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-ping absolute" />
          <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full" />
        </div>
      </div>

      {/* Lumières d'ambiance améliorées */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Indicateur de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => scrollToSection("about")}>
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;