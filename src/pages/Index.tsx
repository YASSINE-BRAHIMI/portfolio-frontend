import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PromoVideo from "@/components/PromoVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <PromoVideo />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
