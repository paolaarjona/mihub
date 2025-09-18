import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";

import PartnersSection from "@/components/PartnersSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Target, Cog, Users, Lightbulb, Zap, ChevronLeft, ChevronRight, Camera, Wifi } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";

// Programas de miHUB - programas de formación con tiempo de ejecución
const featuredPrograms: ApartmentProps[] = [
  {
    id: "1",
    name: "Programa CEO & Directivos",
    description: "Programa semestral especializado para equipos directivos, enfocado en liderazgo en la era de la IA.",
    price: 0,
    capacity: 8,
    size: 0.5, // 1/2 día
    image: "/lovable-uploads/5b5c64b9-3a51-426e-bd2f-5f0e23f02874.png",
    location: "Presencial",
    features: ["Certificación", "Metodología propia", "Networking", "Seguimiento personalizado", "Acceso a partners", "Materiales exclusivos"]
  },
  {
    id: "2",
    name: "Workshop Adopción de IA",
    description: "Sesión intensiva de un día para identificar oportunidades inmediatas de IA en tu empresa.",
    price: 0,
    capacity: 12,
    size: 1, // 1 día completo
    image: "/lovable-uploads/e393983a-92e2-4bfe-bc08-b4ae09d9c5d6.png",
    location: "Híbrido",
    features: ["Un día intensivo", "Casos de uso", "Plan de acción", "Material de trabajo", "Seguimiento"]
  },
  {
    id: "3",
    name: "Oficina de IA - Implementación",
    description: "Programa completo de 6 meses para crear e implementar la oficina interna de IA de tu empresa.",
    price: 0,
    capacity: 4,
    size: 8, // 8 semanas
    image: "/lovable-uploads/c466127a-cb17-4b0a-acef-1ae82b555993.png",
    location: "Personalizado",
    features: ["6 meses de duración", "Implementación completa", "Equipo dedicado", "Formación interna", "Tecnología incluida"]
  },
  {
    id: "4",
    name: "Detección de Retos",
    description: "Sesión de medio día para identificar los principales retos y oportunidades de tu organización.",
    price: 0,
    capacity: 6,
    size: 0.5, // 1/2 día
    image: "/lovable-uploads/0330ec35-bffc-43bc-8054-a3be8d9d93d1.png",
    location: "Presencial",
    features: ["Análisis de retos", "Identificación de oportunidades", "Roadmap inicial", "Metodología ágil", "Informe de resultados"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Metodología en 3 fases - orientada a implementar proyectos de innovación
  const methodology = [
    {
      image: "/lovable-uploads/2664fe00-ee18-44e7-9f27-fc98890ca4ca.png",
      title: "Fase 1: Identificación de Oportunidades",
      description: "Análisis del negocio para identificar áreas de mejora y oportunidades de innovación específicas que generen valor real."
    },
    {
      image: "/lovable-uploads/c9fe5c4c-cc22-496f-b047-6b772dd6252e.png", 
      title: "Fase 2: Desarrollo de Proyectos",
      description: "Diseño y planificación de proyectos de innovación personalizados, con metodologías ágiles y equipos multidisciplinares."
    },
    {
      image: "/lovable-uploads/b30dc2b6-a7e7-45c2-b152-6863801121b4.png",
      title: "Fase 3: Implementación y Seguimiento",
      description: "Puesta en marcha de los proyectos con acompañamiento continuo, medición de resultados y optimización."
    }
  ];
  
  // Ventajas competitivas
  const advantages = [
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Metodología Propia",
      description: "Proceso validado de transformación en 3 fases específico para empresas canarias."
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Ecosistema de Partners",
      description: "Red de colaboradores estratégicos: Oracle, Santander, Telefónica, Air Europa y más."
    },
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Formación Especializada",
      description: "Programas de capacitación diseñados para profesionales y equipos directivos."
    },
    {
      icon: <Cog className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Laboratorios de Innovación",
      description: "Espacios equipados para desarrollo de proyectos y pruebas de concepto."
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Think Tanks",
      description: "Sesiones de trabajo colaborativo con expertos del sector y la academia."
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "50 años de experiencia",
      description: "Respaldo del Grupo Martínez Abolafio, líder industrial en Canarias."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About miHUB Summary */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Una iniciativa de Grupo Martínez Abolafio</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Qué es <span className="text-primary">miHUB</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  miHUB es el primer centro de innovación turística de Canarias, un ecosistema empresarial 
                  diseñado para impulsar la transformación digital y sostenible del sector turístico canario.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Respaldado por <strong>Grupo Martínez Abolafio</strong>, con más de 50 años de experiencia 
                  en el sector turístico y empresarial canario, miHUB conecta empresas, startups, 
                  instituciones y profesionales para crear soluciones innovadoras que posicionen 
                  a Canarias como referente en turismo inteligente y sostenible.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Ecosistema Colaborativo</h3>
                  <p className="text-sm text-muted-foreground">
                    Conectamos empresas, startups e instituciones para crear sinergias
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Turismo Inteligente</h3>
                  <p className="text-sm text-muted-foreground">
                    Desarrollamos soluciones tecnológicas para el sector turístico
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Innovación Sostenible</h3>
                  <p className="text-sm text-muted-foreground">
                    Promovemos la sostenibilidad en todas nuestras iniciativas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Metodología Section */}
        <section className="relative section bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                Nuestra Metodología
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Un viaje en 3 fases a la Innovación
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Guiamos a cada organización a través de nuestro proceso probado de implementación de proyectos de innovación.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {methodology.map((phase, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl animate-fade-in text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 sm:mb-6 inline-flex">
                    <img 
                      src={phase.image}
                      alt={phase.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-20 sm:right-40 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Corporate Events Booking Section - Now positioned before Featured Programs */}
        <section id="eventos-corporativos" className="relative section bg-muted/30 overflow-hidden">
          <div className="container relative z-10">
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
                <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                  Eventos Corporativos
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
                  Contrata nuestros servicios
                </h2>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Organiza tu evento de innovación personalizado. Desde workshops hasta congresos de innovación, creamos experiencias que transforman equipos y empresas.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left max-w-2xl mx-auto">
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Eventos personalizados de innovación
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Facilitadores expertos en transformación digital
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Instalaciones equipadas con tecnología avanzada
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Networking con el ecosistema de innovación canario
                  </li>
                </ul>
                
                {/* Button now appears first, before the form */}
                <div className="mb-8 sm:mb-12">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/eventos-corporativos">Solicitar evento corporativo</Link>
                  </Button>
                </div>
              </div>
              
              {/* Form now appears after the button */}
              <div className="max-w-2xl mx-auto">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Programs - Now with Carousel */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredApartments.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                {t.home.featuredApartments.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t.home.featuredApartments.description}
              </p>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                  containScroll: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {featuredPrograms.map((program, index) => (
                    <CarouselItem key={program.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                        <ApartmentCard apartment={program} hidePrice={true} showDuration={true} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Flechas direccionales con mejor visibilidad */}
                <CarouselPrevious className="flex md:flex -left-4 md:-left-12 bg-white/90 hover:bg-white shadow-lg border-primary/20 text-primary hover:text-primary">
                  <ChevronLeft className="h-5 w-5" />
                </CarouselPrevious>
                <CarouselNext className="flex md:flex -right-4 md:-right-12 bg-white/90 hover:bg-white shadow-lg border-primary/20 text-primary hover:text-primary">
                  <ChevronRight className="h-5 w-5" />
                </CarouselNext>
              </Carousel>
              
              {/* Indicador de dirección para móviles */}
              <div className="flex md:hidden justify-center mt-4 text-xs text-muted-foreground">
                <span className="flex items-center">
                  <ChevronLeft className="h-3 w-3 mr-1" />
                  Desliza para ver más programas
                  <ChevronRight className="h-3 w-3 ml-1" />
                </span>
              </div>
            </div>
            
            <div className="text-center mt-8 sm:mt-12">
              <Button asChild className="btn-primary">
                <Link to="/apartments">
                  {t.home.featuredApartments.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <PartnersSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Features Section - ¿Por qué miHUB? */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                ¿Por qué miHUB?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Ventajas Competitivas
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Nuestro ecosistema de innovación ofrece las mejores condiciones para la transformación empresarial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative section bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                {t.home.cta.description}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
