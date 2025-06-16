
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, CheckCircle, Play, ExternalLink } from "lucide-react";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  sector: string;
  duration: string;
  icon: React.ReactNode;
  image: string;
  videoUrl?: string;
}

interface ProjectDetailsDialogProps {
  project: ProjectProps | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsDialog({ project, isOpen, onClose }: ProjectDetailsDialogProps) {
  if (!project) return null;

  const getDetailedDescription = (projectId: string) => {
    switch (projectId) {
      case "1":
        return {
          overview: "Proyecto pionero para el desarrollo de una plataforma integral que promueve el turismo responsable y sostenible en las Islas Canarias, integrando tecnologías avanzadas para la gestión eficiente de recursos turísticos.",
          objectives: [
            "Desarrollar plataforma digital para turismo sostenible",
            "Implementar sistemas de monitoreo ambiental",
            "Crear red de colaboración entre stakeholders",
            "Establecer métricas de sostenibilidad",
            "Promover experiencias turísticas responsables"
          ],
          methodology: "Metodología ágil con enfoque en sostenibilidad, utilizando tecnologías de vanguardia, análisis de datos ambientales y colaboración estrecha con instituciones locales.",
          target: "Sector turístico canario, instituciones públicas, empresas de turismo sostenible y organizaciones ambientales.",
          benefits: [
            "Plataforma tecnológica completa",
            "Reducción del impacto ambiental",
            "Mayor competitividad turística",
            "Red de colaboración establecida",
            "Certificación de sostenibilidad"
          ],
          features: ["Sostenibilidad", "Turismo Digital", "Plataforma Web", "Monitoreo Ambiental", "Red Colaborativa"]
        };
      case "2":
        return {
          overview: "Implementación de un sistema integral de inteligencia artificial para la optimización de reservas hoteleras y la mejora significativa de la experiencia del huésped.",
          objectives: [
            "Optimizar procesos de reservas con IA",
            "Personalizar experiencia del huésped",
            "Implementar analytics predictivo",
            "Automatizar servicios hoteleros",
            "Mejorar rentabilidad operacional"
          ],
          methodology: "Desarrollo iterativo con implementación de machine learning, análisis de datos de huéspedes y integración de sistemas hoteleros existentes.",
          target: "Cadenas hoteleras, hoteles independientes, gestores de propiedades turísticas y empresas de hospitalidad.",
          benefits: [
            "Sistema IA completamente integrado",
            "Aumento en satisfacción del cliente",
            "Optimización de ingresos",
            "Automatización de procesos",
            "Dashboard analítico avanzado"
          ],
          features: ["Inteligencia Artificial", "Optimización", "Analytics", "Automatización", "Hospitalidad"]
        };
      case "3":
        return {
          overview: "Creación de un laboratorio de innovación digital especializado para cadenas de retail, enfocado en revolucionar la experiencia del cliente a través de tecnologías emergentes.",
          objectives: [
            "Establecer laboratorio de innovación retail",
            "Desarrollar experiencias de cliente inmersivas",
            "Implementar tecnologías emergentes",
            "Crear prototipos de soluciones retail",
            "Formar equipo especializado en retail tech"
          ],
          methodology: "Metodología de design thinking aplicada al retail, prototipado rápido, testing con usuarios reales y iteración continua de soluciones.",
          target: "Cadenas de retail, centros comerciales, empresas de e-commerce y startups de retail technology.",
          benefits: [
            "Laboratorio completamente equipado",
            "Portfolio de soluciones innovadoras",
            "Equipo formado en retail tech",
            "Prototipos funcionales",
            "Metodologías de innovación implantadas"
          ],
          features: ["Laboratorio Digital", "Retail Tech", "Experiencia Cliente", "Prototipado", "Innovación"]
        };
      case "4":
        return {
          overview: "Proyecto Industry 4.0 que integra Internet of Things (IoT) y análisis predictivo para la transformación digital completa de oficinas corporativas hacia espacios inteligentes.",
          objectives: [
            "Implementar ecosistema IoT integral",
            "Desarrollar análisis predictivo avanzado",
            "Crear oficinas inteligentes y eficientes",
            "Optimizar uso de recursos corporativos",
            "Establecer cultura de innovación tecnológica"
          ],
          methodology: "Implementación por fases con tecnologías IoT, desarrollo de algoritmos predictivos, integración de sistemas y formación del equipo interno.",
          target: "Empresas corporativas, oficinas centrales, coworkings premium y organizaciones que buscan transformación digital.",
          benefits: [
            "Oficinas completamente inteligentes",
            "Reducción de costos operativos",
            "Análisis predictivo operativo",
            "Mejora en productividad",
            "Infraestructura IoT escalable"
          ],
          features: ["Industry 4.0", "IoT", "Análisis Predictivo", "Oficinas Inteligentes", "Optimización"]
        };
      case "5":
        return {
          overview: "Desarrollo de una plataforma colaborativa especializada para startups fintech en Canarias, facilitando el networking, financiación y crecimiento del ecosistema financiero tecnológico.",
          objectives: [
            "Crear plataforma colaborativa fintech",
            "Facilitar networking entre startups",
            "Conectar con inversores y mentores",
            "Proporcionar recursos especializados",
            "Fomentar crecimiento del ecosistema fintech"
          ],
          methodology: "Desarrollo colaborativo con stakeholders del ecosistema fintech, metodologías de community building y tecnologías de networking avanzadas.",
          target: "Startups fintech, inversores, instituciones financieras, reguladores y profesionales del sector financiero tecnológico.",
          benefits: [
            "Plataforma colaborativa activa",
            "Red de contactos especializada",
            "Acceso a financiación",
            "Recursos y herramientas fintech",
            "Comunidad fintech consolidada"
          ],
          features: ["Fintech", "Plataforma Colaborativa", "Networking", "Startups", "Ecosistema Digital"]
        };
      default:
        return {
          overview: project.description,
          objectives: ["Información detallada próximamente"],
          methodology: "Metodología personalizada según necesidades del cliente.",
          target: "Profesionales y empresas del sector.",
          benefits: ["Consultar con nuestro equipo"],
          features: ["Innovación", "Tecnología", "Transformación Digital"]
        };
    }
  };

  const details = getDetailedDescription(project.id);

  const handleVideoClick = () => {
    if (project.videoUrl) {
      window.open(project.videoUrl, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="aspect-video w-full rounded-lg overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.videoUrl && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                   onClick={handleVideoClick}>
                <Button size="lg" variant="hero" className="text-white">
                  <Play className="mr-2 h-6 w-6" />
                  Ver Video del Proyecto
                </Button>
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span><strong>Sector:</strong> {project.sector}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span><strong>Duración:</strong> {project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong>Estado:</strong> Completado</span>
            </div>
          </div>

          {/* Video Button */}
          {project.videoUrl && (
            <div className="flex justify-center">
              <Button onClick={handleVideoClick} size="lg" className="btn-primary">
                <Play className="mr-2 h-5 w-5" />
                Ver Video del Proyecto
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Descripción General</h3>
            <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Objetivos</h3>
            <ul className="space-y-2">
              {details.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Metodología</h3>
            <p className="text-muted-foreground leading-relaxed">{details.methodology}</p>
          </div>

          {/* Target Audience */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Dirigido a</h3>
            <p className="text-muted-foreground leading-relaxed">{details.target}</p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Resultados Alcanzados</h3>
            <ul className="space-y-2">
              {details.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tecnologías y Enfoques</h3>
            <div className="flex flex-wrap gap-2">
              {details.features.map((feature, index) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
