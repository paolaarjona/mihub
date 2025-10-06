import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, GraduationCap, Building2, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProyectoDetailsDialog, { ProyectoDetails } from "@/components/ProyectoDetailsDialog";

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
const proyectosAdHocData: ProyectoDetails[] = [
  {
    id: 1,
    name: "Turismo 360",
    codigo: "LI01_TURISMO360",
    descripcion: "Proyecto adjudicado que busca transformar la actitud y huella de los turistas en Lanzarote, promoviendo turismo ético y responsable mediante comunicación innovadora, gamificación y participación local. Incluye siete pilotos en servicios turísticos.",
    objetivos: [
      "Estrategia de comunicación innovadora",
      "Cambios reales en comportamiento turístico",
      "Implementación de gamificación",
      "Participación activa de la comunidad local"
    ],
    entidadLider: "CARSA",
    estado: "Adjudicado",
    duracion: "Junio 2025 – Octubre 2025 (4 meses)",
    palabrasClave: ["Sostenibilidad", "Innovación", "Transformación digital", "IA"]
  },
  {
    id: 2,
    name: "ETI-DTI",
    codigo: "ETI-DTI",
    descripcion: "Proyecto de transformación digital enfocado en la innovación tecnológica.",
    objetivos: ["Implementación de soluciones tecnológicas avanzadas"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Transformación digital"]
  },
  {
    id: 3,
    name: "3D Visit & Preserve",
    codigo: "3D_VISIT_PRESERVE",
    descripcion: "Iniciativa para preservación y visitas virtuales mediante tecnología 3D.",
    objetivos: ["Digitalización de patrimonio", "Experiencias virtuales inmersivas"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Transformación digital"]
  },
  {
    id: 4,
    name: "Digitour-Twin",
    codigo: "DIGITOUR_TWIN",
    descripcion: "Proyecto de gemelo digital para el sector turístico.",
    objetivos: ["Crear réplicas digitales de espacios turísticos"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Transformación digital"]
  },
  {
    id: 5,
    name: "ETICNOVA360",
    codigo: "ETICNOVA360",
    descripcion: "Programa integral de innovación ética y tecnológica.",
    objetivos: ["Promover innovación responsable"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad"]
  },
  {
    id: 6,
    name: "HealthShare",
    codigo: "HEALTHSHARE",
    descripcion: "Plataforma de compartición de datos de salud.",
    objetivos: ["Facilitar intercambio seguro de información sanitaria"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Transformación digital"]
  },
  {
    id: 7,
    name: "HO2",
    codigo: "HO2",
    descripcion: "Proyecto de innovación en gestión hotelera.",
    objetivos: ["Optimizar procesos hoteleros mediante tecnología"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Transformación digital"]
  },
  {
    id: 8,
    name: "Economía azul PLOCAN",
    codigo: "PLOCAN",
    descripcion: "Iniciativa de economía azul en colaboración con PLOCAN.",
    objetivos: ["Promover sostenibilidad marina y economía azul"],
    estado: "En desarrollo",
    duracion: "Por definir",
    palabrasClave: ["Sostenibilidad", "Innovación"]
  }
];

// Portfolio de Proyectos con Empresas
const portfolioEmpresasData: ProyectoDetails[] = [
  {
    id: 1,
    name: "Bodegas",
    codigo: "LI01_BODEGAS",
    descripcion: "Programa de Open Innovation para convertir las Bodegas de Lanzarote en referente internacional en innovación vitivinícola.",
    objetivos: [
      "Resolver retos del ecosistema vitivinícola",
      "Formar profesionales especializados",
      "Atraer talento al sector",
      "Activar ecosistema emprendedor",
      "Potenciar posicionamiento digital"
    ],
    importe: "196.300 €",
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 2,
    name: "Cabildo 3.0",
    codigo: "LI02_CABILDO 3.0",
    descripcion: "Programa integral para construir cultura de innovación institucional en el Cabildo.",
    objetivos: [
      "Impulsar cultura de innovación en funcionarios",
      "Detectar necesidades organizativas",
      "Empoderar equipos técnicos",
      "Posicionar al Cabildo como administración colaborativa y ágil"
    ],
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 3,
    name: "Digital Island",
    codigo: "LI03_DIGITAL ISLAND",
    descripcion: "Programa experiencial para decisores corporativos, mostrando Lanzarote como laboratorio vivo de innovación y sostenibilidad.",
    objetivos: [
      "Posicionar Lanzarote como destino corporativo inteligente",
      "Activar relaciones estratégicas",
      "Mostrar valor del territorio"
    ],
    estado: "Portfolio",
    importe: "35.000–50.000 €",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 4,
    name: "Digital Innovation Center",
    codigo: "LI04_DIGITAL INNOVATION CENTER",
    descripcion: "Creación de centro de innovación digital con universidades, ofreciendo formación avanzada en IA, sostenibilidad y liderazgo.",
    objetivos: [
      "Atraer formación de alto nivel",
      "Puente academia-empresa",
      "Posicionar miHUB como centro de referencia"
    ],
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 5,
    name: "Smart Island",
    codigo: "LI05_SMART ISLAND",
    descripcion: "Colaboración público-privada para rediseñar modelo de isla inteligente en Lanzarote, con infraestructura de datos turísticos.",
    objetivos: [
      "Estrategia avanzada de datos abiertos",
      "Gobernanza público-privada",
      "Posicionamiento internacional de Lanzarote"
    ],
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 6,
    name: "Oficinas de Adopción de la IA",
    codigo: "LI06_OFICINAS ADOPCIÓN IA",
    descripcion: "Oficina estructurada para adopción y aceleración de IA en empresas y administraciones.",
    objetivos: [
      "Acelerar adopción estratégica de IA",
      "Formación especializada",
      "Implementación de pilotos",
      "Desarrollo de narrativa interna",
      "Crear modelo replicable"
    ],
    importe: "80.000 €",
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 7,
    name: "Detección de retos en Administración Pública",
    codigo: "LI07_DETECCIÓN RETOS AP",
    descripcion: "Programa integral para identificar retos en administraciones públicas y activar soluciones con pilotos.",
    objetivos: [
      "Detectar retos organizativos",
      "Involucrar personal técnico",
      "Priorizar oportunidades",
      "Diseñar pilotos",
      "Generar casos de éxito replicables"
    ],
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  },
  {
    id: 8,
    name: "Detección de retos en Empresa privada",
    codigo: "LI08_DETECCIÓN RETOS EMPRESA PRIVADA",
    descripcion: "Programa para identificar bloqueos y oportunidades estratégicas en empresas privadas, con pilotos de soluciones de alto impacto.",
    objetivos: [
      "Identificar frenos internos",
      "Visibilizar oportunidades",
      "Activar pilotos",
      "Alinear equipos",
      "Posicionar miHUB como partner de innovación"
    ],
    importe: "40.000 €",
    estado: "Portfolio",
    duracion: "Por definir",
    palabrasClave: ["Innovación", "Sostenibilidad", "Transformación digital", "IA"]
  }
];

export default function Proyectos() {
  const [selectedProyecto, setSelectedProyecto] = useState<ProyectoDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProyectoClick = (proyecto: ProyectoDetails) => {
    setSelectedProyecto(proyecto);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProyecto(null);
  };

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
                  {proyectosAdHocData.map((proyecto) => (
                    <li key={proyecto.id} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold mr-3">{proyecto.id}.</span>
                      <button
                        onClick={() => handleProyectoClick(proyecto)}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline text-left transition-colors"
                      >
                        {proyecto.name}
                      </button>
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
                  {portfolioEmpresasData.map((proyecto) => (
                    <li key={proyecto.id} className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 font-semibold mr-3">{proyecto.id}.</span>
                      <button
                        onClick={() => handleProyectoClick(proyecto)}
                        className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:underline text-left transition-colors"
                      >
                        {proyecto.name}
                      </button>
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

      {/* Proyecto Details Dialog */}
      <ProyectoDetailsDialog 
        proyecto={selectedProyecto}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
}
