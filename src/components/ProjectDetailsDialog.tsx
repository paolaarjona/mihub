
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
          overview: "Desarrollamos una plataforma digital integral que conecta a turistas responsables con experiencias sostenibles en las Islas Canarias. El sistema incluye certificación de sostenibilidad, monitoreo de impacto ambiental en tiempo real y herramientas de gestión para empresas turísticas locales que quieren reducir su huella ecológica.",
          objectives: [
            "Crear marketplace de turismo sostenible certificado",
            "Implementar sistema de medición de impacto ambiental",
            "Desarrollar app móvil para turistas conscientes",
            "Establecer red de partners turísticos sostenibles",
            "Integrar pagos y reservas con criterios de sostenibilidad"
          ],
          target: "Turistas responsables, empresas turísticas locales, alojamientos rurales, operadores de experiencias sostenibles y autoridades de turismo de Canarias.",
          benefits: [
            "Plataforma web y móvil completamente funcional",
            "Red de 50+ empresas turísticas certificadas",
            "Sistema de métricas ambientales automatizado",
            "Aumento del 40% en reservas sostenibles",
            "Reducción documentada del impacto ambiental"
          ],
          features: ["Certificación Verde", "Reservas Sostenibles", "Impacto Ambiental", "App Móvil", "Dashboard Analytics"]
        };
      case "2":
        return {
          overview: "Implementamos un sistema de inteligencia artificial avanzado que revoluciona la gestión hotelera mediante predicción de demanda, personalización automática de servicios y optimización dinámica de precios. El sistema aprende de los patrones de comportamiento de los huéspedes para ofrecer experiencias completamente personalizadas.",
          objectives: [
            "Desarrollar motor de IA para predicción de ocupación",
            "Crear sistema de personalización automática de servicios",
            "Implementar chatbot inteligente multiidioma",
            "Optimizar revenue management con machine learning",
            "Integrar IoT para servicios automáticos en habitaciones"
          ],
          target: "Cadenas hoteleras de 4-5 estrellas, hoteles boutique, resorts de lujo y grupos hoteleros que buscan diferenciación tecnológica.",
          benefits: [
            "Sistema IA completamente integrado con PMS existente",
            "Incremento del 25% en satisfacción del cliente",
            "Optimización del 18% en ingresos por habitación",
            "Reducción del 30% en tiempo de check-in/out",
            "Dashboard predictivo para gestión estratégica"
          ],
          features: ["Predicción IA", "Personalización", "Chatbot", "Revenue Management", "IoT Habitaciones"]
        };
      case "3":
        return {
          overview: "Creamos un programa intensivo de formación empresarial que combina viajes a las Islas Canarias con workshops prácticos sobre innovación digital e inteligencia artificial. Los participantes viven experiencias inmersivas mientras aprenden a implementar tecnologías disruptivas en sus empresas a través de casos reales y mentorías especializadas.",
          objectives: [
            "Diseñar curriculum de formación IA empresarial",
            "Crear experiencias de aprendizaje inmersivo",
            "Establecer red de mentores expertos en IA",
            "Desarrollar casos de estudio reales canarios",
            "Implementar programa de seguimiento post-formación"
          ],
          target: "Directivos de empresas medianas y grandes, emprendedores en fase de escalamiento, equipos de innovación corporativa y consultores de transformación digital.",
          benefits: [
            "Programa formativo completo de 5 días",
            "Red de contactos especializados en IA",
            "Casos de uso implementables inmediatamente",
            "Certificación en innovación empresarial",
            "Seguimiento y mentorías durante 6 meses"
          ],
          features: ["Formación Inmersiva", "Casos Reales", "Networking", "Mentorías", "Certificación"]
        };
      case "4":
        return {
          overview: "Transformamos oficinas tradicionales en espacios inteligentes mediante la implementación de una red IoT completa que monitoriza y optimiza automáticamente la climatización, iluminación, ocupación y recursos. El sistema incluye análisis predictivo para mantenimiento y gestión eficiente de espacios de trabajo colaborativo.",
          objectives: [
            "Instalar red IoT integral en oficinas corporativas",
            "Desarrollar sistema de gestión inteligente de espacios",
            "Implementar análisis predictivo para mantenimiento",
            "Crear dashboard de control centralizado",
            "Optimizar consumo energético automáticamente"
          ],
          target: "Corporaciones con oficinas centrales, empresas de coworking premium, estudios de arquitectura innovadores y organizaciones comprometidas con la sostenibilidad.",
          benefits: [
            "Oficinas completamente automatizadas e inteligentes",
            "Reducción del 35% en costos energéticos",
            "Sistema predictivo de mantenimiento operativo",
            "Mejora del 20% en productividad de empleados",
            "ROI documentado en menos de 18 meses"
          ],
          features: ["IoT Avanzado", "Espacios Inteligentes", "Predictivo", "Eficiencia Energética", "Control Centralizado"]
        };
      case "5":
        return {
          overview: "Desarrollamos una metodología sistemática para identificar y priorizar retos de innovación específicos en ayuntamientos y empresas canarias. Utilizamos workshops colaborativos, análisis de datos y técnicas de design thinking para detectar oportunidades reales donde la inteligencia artificial puede generar impacto measurable y sostenible.",
          objectives: [
            "Crear metodología de detección de retos innovación",
            "Facilitar workshops de ideación colaborativa",
            "Desarrollar banco de casos de uso IA validados",
            "Establecer criterios de priorización de proyectos",
            "Formar equipos internos en detección de oportunidades"
          ],
          target: "Ayuntamientos canarios, empresas públicas, corporaciones locales, instituciones educativas y organizaciones que buscan innovar con propósito social.",
          benefits: [
            "Metodología probada de detección de retos",
            "Portfolio de 100+ casos de uso IA validados",
            "Equipos formados en innovación sistemática",
            "Roadmap de proyectos priorizados y viables",
            "Red colaborativa activa entre organizaciones"
          ],
          features: ["Metodología Propia", "Design Thinking", "Casos Validados", "Priorización", "Formación Equipos"]
        };
      default:
        return {
          overview: project.description,
          objectives: ["Información detallada próximamente"],
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
            <h3 className="text-xl font-semibold mb-3">Descripción del Proyecto</h3>
            <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Objetivos Alcanzados</h3>
            <ul className="space-y-2">
              {details.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Dirigido a</h3>
            <p className="text-muted-foreground leading-relaxed">{details.target}</p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Resultados Obtenidos</h3>
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
            <h3 className="text-xl font-semibold mb-3">Tecnologías y Enfoques Clave</h3>
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
