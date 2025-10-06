import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, GraduationCap, Building2, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Servicios/Programas de miHUB
const servicios = [
  {
    id: "1",
    name: "Programa CEO & Directivos",
    description: "Programa semestral especializado para equipos directivos, enfocado en liderazgo en la era de la IA.",
    duration: "6 meses",
    capacity: "8 participantes",
    image: "/lovable-uploads/5b5c64b9-3a51-426e-bd2f-5f0e23f02874.png",
    modalidad: "Presencial",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    features: ["Certificación", "Metodología propia", "Networking", "Seguimiento personalizado", "Acceso a partners", "Materiales exclusivos"]
  },
  {
    id: "2",
    name: "Workshop Adopción de IA",
    description: "Sesión intensiva de un día para identificar oportunidades inmediatas de IA en tu empresa.",
    duration: "1 día completo",
    capacity: "12 participantes",
    image: "/lovable-uploads/e393983a-92e2-4bfe-bc08-b4ae09d9c5d6.png",
    modalidad: "Híbrido",
    icon: <Brain className="h-8 w-8 text-primary" />,
    features: ["Un día intensivo", "Casos de uso", "Plan de acción", "Material de trabajo", "Seguimiento"]
  },
  {
    id: "3",
    name: "Oficina de IA - Implementación",
    description: "Programa completo de 6 meses para crear e implementar la oficina interna de IA de tu empresa.",
    duration: "6 meses",
    capacity: "4 empresas",
    image: "/lovable-uploads/c466127a-cb17-4b0a-acef-1ae82b555993.png",
    modalidad: "Personalizado",
    icon: <Building2 className="h-8 w-8 text-primary" />,
    features: ["6 meses de duración", "Implementación completa", "Equipo dedicado", "Formación interna", "Tecnología incluida"]
  },
  {
    id: "4",
    name: "Detección de Retos",
    description: "Sesión de medio día para identificar los principales retos y oportunidades de tu organización.",
    duration: "Medio día",
    capacity: "6 participantes",
    image: "/lovable-uploads/0330ec35-bffc-43bc-8054-a3be8d9d93d1.png",
    modalidad: "Presencial",
    icon: <Search className="h-8 w-8 text-primary" />,
    features: ["Análisis de retos", "Identificación de oportunidades", "Roadmap inicial", "Metodología ágil", "Informe de resultados"]
  }
];

// Proyectos Ad Hoc con Administraciones e Instituciones
const proyectosAdHoc = [
  { id: 1, name: "Turismo 360" },
  { id: 2, name: "ETI-DTI" },
  { id: 3, name: "3D Visit & Preserve" },
  { id: 4, name: "Digitour- Twin" },
  { id: 5, name: "ETICNOVA360" },
  { id: 6, name: "HealthShare" },
  { id: 7, name: "HO2" },
  { id: 8, name: "Economía azul PLOCAN" }
];

// Portfolio de Proyectos con Empresas
const portfolioEmpresas = [
  { id: 1, name: "Bodegas" },
  { id: 2, name: "Cabildo 3.0" },
  { id: 3, name: "Digital Island" },
  { id: 4, name: "Digital Innovation Center con universidades" },
  { id: 5, name: "Smart Island" },
  { id: 6, name: "Oficinas de Adopción de la IA" },
  { id: 7, name: "Detección de retos en Administración Pública" },
  { id: 8, name: "Detección de retos en Empresa privada" }
];

export default function Proyectos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 to-sea-light/20 pt-24 md:pt-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Nuestros Servicios
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                Programas de Transformación e Innovación
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Programas diseñados para impulsar la innovación y la transformación digital 
                en tu organización, con metodología propia y acompañamiento continuo.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicios.map((servicio, index) => (
                <div 
                  key={servicio.id}
                  className="glass-card rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={servicio.image}
                      alt={servicio.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{servicio.modalidad}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {servicio.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Duración: {servicio.duration}</span>
                        <p className="text-sm text-muted-foreground">Capacidad: {servicio.capacity}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{servicio.name}</h3>
                    <p className="text-muted-foreground mb-4">{servicio.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold">Incluye:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {servicio.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">
                        Solicitar información <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Nuestros Proyectos
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Colaboramos con administraciones públicas y empresas privadas en proyectos de innovación y transformación digital.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Proyectos Ad Hoc con Administraciones */}
              <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-6 text-blue-900 dark:text-blue-100">
                  Proyectos Ad Hoc Administraciones e Instituciones
                </h3>
                <ul className="space-y-3">
                  {proyectosAdHoc.map((proyecto) => (
                    <li key={proyecto.id} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold mr-3">{proyecto.id}.</span>
                      <span className="text-gray-700 dark:text-gray-300">{proyecto.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio de Proyectos con Empresas */}
              <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-2 border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-6 text-green-900 dark:text-green-100">
                  Portfolio de Proyectos con Empresas
                </h3>
                <ul className="space-y-3">
                  {portfolioEmpresas.map((proyecto) => (
                    <li key={proyecto.id} className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 font-semibold mr-3">{proyecto.id}.</span>
                      <span className="text-gray-700 dark:text-gray-300">{proyecto.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                ¿Necesitas un programa personalizado?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Podemos adaptar nuestros servicios a las necesidades específicas de tu organización.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">
                  Contacta con nosotros <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
