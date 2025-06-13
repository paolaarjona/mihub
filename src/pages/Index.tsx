
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import PartnersSection from "@/components/PartnersSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Target, Cog, Users, Lightbulb, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Programas de miHUB - sin precios
const featuredPrograms: ApartmentProps[] = [
  {
    id: "1",
    name: "Programa CEO & Directivos",
    description: "Programa semestral especializado para equipos directivos, enfocado en liderazgo en la era de la IA.",
    price: 0,
    capacity: 8,
    size: 6,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    location: "Presencial",
    features: ["Certificación", "Metodología propia", "Networking", "Seguimiento personalizado", "Acceso a partners", "Materiales exclusivos"]
  },
  {
    id: "2",
    name: "Workshop Adopción de IA",
    description: "Sesión intensiva de un día para identificar oportunidades inmediatas de IA en tu empresa.",
    price: 0,
    capacity: 12,
    size: 1,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    location: "Híbrido",
    features: ["Un día intensivo", "Casos de uso", "Plan de acción", "Material de trabajo", "Seguimiento"]
  },
  {
    id: "3",
    name: "Oficina de IA - Implementación",
    description: "Programa completo de 6 meses para crear e implementar la oficina interna de IA de tu empresa.",
    price: 0,
    capacity: 4,
    size: 6,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    location: "Personalizado",
    features: ["6 meses de duración", "Implementación completa", "Equipo dedicado", "Formación interna", "Tecnología incluida"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Metodología en 3 fases
  const methodology = [
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Fase 1: Generación de Conocimiento",
      description: "Formación especializada para el equipo directivo en IA y transformación digital, creando la base necesaria para liderar el cambio."
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Fase 2: Estrategia y Casos de Uso", 
      description: "Identificación de oportunidades específicas, análisis de retos empresariales y definición del plan de acción personalizado."
    },
    {
      icon: <Cog className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Fase 3: Oficina de IA",
      description: "Creación e implementación de la oficina interna de IA, con proyectos piloto y estructura organizativa definida."
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
        
        {/* Welcome Section - Quiénes Somos */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms] order-2 lg:order-1">
                <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/contact">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms] order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
                    alt="Equipo colaborativo trabajando en innovación" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
                    alt="Workspace de innovación tecnológica" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                    alt="Desarrollo de soluciones IA" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section - Nuestra Historia */}
        <TimelineSection />
        
        {/* Metodología Section */}
        <section className="relative section bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                Nuestra Metodología
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Un viaje en 3 fases hacia la IA
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Guiamos a cada organización a través de nuestro proceso probado de transformación digital.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {methodology.map((phase, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl animate-fade-in text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-primary/10 inline-flex">
                    {phase.icon}
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
        
        {/* Booking Form Section */}
        <section className="relative section bg-muted/30 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in order-2 lg:order-1">
                <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.booking.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
                  {t.home.booking.title}
                </h2>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  {t.home.booking.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {t.home.booking.benefits.map((item, index) => (
                    <li key={index} className="flex items-center text-sm sm:text-base">
                      <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                        <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="order-1 lg:order-2">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Programs */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredPrograms.map((program, index) => (
                <div key={program.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={program} />
                </div>
              ))}
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
        
        {/* CTA Section - Sin efecto de ola */}
        <section className="relative section bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/booking">¿Quiere organizar un congreso de Innovación?</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
