
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Lightbulb, Building2, Leaf, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax - Nueva imagen futurista */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/d10959a5-8a10-43d3-b29c-d5d78fedf564.png')",
          transform: `translateY(${backgroundY}px)`,
          backgroundPosition: `center ${50 + scrollY * 0.05}%`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      
      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-center items-center text-center px-4"
        style={{ transform: `translateY(${contentY}px)` }}
      >
        <div className="max-w-4xl animate-fade-in">
          {/* Logo de miHUB */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/ad78434e-4c01-4a38-bdc2-49ec020f6be1.png"
              alt="miHUB Logo"
              className="mx-auto h-24 md:h-32 w-auto filter brightness-0 invert"
            />
          </div>
          
          <span className="inline-block text-white/90 text-lg mb-4 tracking-wide border-b border-white/30 pb-2">
            miHUB
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turismo sostenible y desarrollo digital de las empresas canarias
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Impulsamos la transformación digital y sostenible del sector empresarial canario a través de soluciones innovadoras que conectan el turismo responsable con las nuevas tecnologías.
          </p>
          
          {/* Líneas de actuación */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Lightbulb className="h-8 w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-sm">Innovación</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Building2 className="h-8 w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-sm">Transformación Empresarial</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Leaf className="h-8 w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-sm">Sostenibilidad</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Brain className="h-8 w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-sm">Inteligencia Artificial</h3>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="heroSolid" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/booking">{t.hero.bookStay}</Link>
            </Button>
            <Button asChild variant="hero" size="lg" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/apartments">{t.hero.exploreApartments}</Link>
            </Button>
          </div>
          
          <p className="text-white/90 mt-6 font-medium">
            miHUB no es solo un Hub. Es un socio estratégico para la transformación del ecosistema empresarial canario.
          </p>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a 
          href="#welcome" 
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm mb-2">{t.hero.scrollDown}</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-50"
          />
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-100 [animation-delay:-4s]"
          />
        </svg>
      </div>
    </section>
  );
}
