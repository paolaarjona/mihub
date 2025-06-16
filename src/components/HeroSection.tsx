
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
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with parallax */}
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
        className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        style={{ transform: `translateY(${contentY}px)` }}
      >
        <div className="max-w-4xl animate-fade-in">
          {/* Logo de miHUB */}
          <div className="mb-6 sm:mb-8">
            <img 
              src="/lovable-uploads/ad78434e-4c01-4a38-bdc2-49ec020f6be1.png"
              alt="miHUB Logo"
              className="mx-auto h-16 sm:h-20 md:h-24 lg:h-32 w-auto filter brightness-0 invert"
            />
          </div>
          
          <span className="inline-block text-white/90 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 tracking-wide border-b border-white/30 pb-2">
            Un proyecto de Grupo Martínez
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Turismo sostenible y desarrollo digital de las empresas canarias
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Impulsamos la transformación digital y sostenible del sector empresarial canario a través de soluciones innovadoras que conectan el turismo responsable con las nuevas tecnologías.
          </p>
          
          {/* Líneas de actuación */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
              <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-xs sm:text-sm">Innovación</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-xs sm:text-sm">Transformación Empresarial</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-xs sm:text-sm">Sostenibilidad</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-white mb-2 mx-auto" />
              <h3 className="text-white font-semibold text-xs sm:text-sm">Inteligencia Artificial</h3>
            </div>
          </div>
          
          <div className="flex justify-center mb-8 sm:mb-12">
            <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/servicios">{t.hero.exploreApartments}</Link>
            </Button>
          </div>
          
          <p className="text-white/90 font-medium text-sm sm:text-base">
            miHUB no es solo un Hub. Es un socio estratégico para la transformación del ecosistema empresarial canario.
          </p>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a 
          href="#welcome" 
          className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
        </a>
      </div>
    </section>
  );
}
