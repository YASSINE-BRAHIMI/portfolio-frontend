import { Play, Pause, Volume2, VolumeX, Maximize, Zap, Code, ShieldCheck } from "lucide-react";
import { useState, useRef } from "react";
import promoVideo from "@/assets/promo-video.mp4";

const PromoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="py-20 sm:py-32 relative overflow-hidden bg-background/50">
      {/* Arrière-plan */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Découvrez mon <span className="text-gradient">univers</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Une présentation visuelle de mes compétences, projets et vision du développement
            </p>
          </div>

          {/* Conteneur Vidéo */}
          <div className="relative group animate-slide-in-up">
            {/* Effet lumineux */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-card">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                muted={isMuted}
                loop
                playsInline
                onEnded={() => setIsPlaying(false)}
              >
                <source src={promoVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {/* Overlay de contrôles */}
              <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100">
                {/* Fullscreen en haut à gauche */}
                <button
                  onClick={toggleFullscreen}
                  className="absolute top-4 left-4 p-2 bg-card/80 hover:bg-card text-foreground rounded-lg transition-all hover:scale-105 shadow-lg border border-border/50 z-20"
                >
                  <Maximize className="w-5 h-5" />
                </button>

                {/* Mute en haut à droite */}
                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 p-2 bg-card/80 hover:bg-card text-foreground rounded-lg transition-all hover:scale-105 shadow-lg border border-border/50 z-20"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {/* Play/Pause centré */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 shadow-2xl"
                  >
                    {isPlaying ? (
                      <Pause className="w-10 h-10 text-white" />
                    ) : (
                      <Play className="w-10 h-10 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Badge flottant */}
            <div className="absolute -bottom-4 -right-4 bg-card border-2 border-accent shadow-xl rounded-2xl p-4 animate-float hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Vidéo promotionnelle</span>
              </div>
            </div>
          </div>

          {/* Points clés du portfolio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in">
            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Solutions créatives et modernes adaptées aux besoins réels.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Code propre, performant et maintenable pour chaque projet.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fiabilité</h3>
              <p className="text-sm text-muted-foreground">
                Projets livrés avec soin, respect des délais et qualité garantie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
