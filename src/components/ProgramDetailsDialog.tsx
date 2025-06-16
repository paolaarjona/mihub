
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, CheckCircle } from "lucide-react";
import { ApartmentProps } from "./ApartmentCard";

interface ProgramDetailsDialogProps {
  program: ApartmentProps | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramDetailsDialog({ program, isOpen, onClose }: ProgramDetailsDialogProps) {
  if (!program) return null;

  const getDurationText = (size: number) => {
    if (size < 1) return `${size * 2} días`;
    if (size === 1) return "1 día";
    if (size <= 8) return `${size} semanas`;
    return `${size} semanas`;
  };

  const getDetailedDescription = (programId: string) => {
    switch (programId) {
      case "1":
        return {
          overview: "Programa semestral diseñado específicamente para equipos directivos que buscan liderar la transformación digital de sus organizaciones en la era de la inteligencia artificial.",
          objectives: [
            "Desarrollar competencias de liderazgo digital",
            "Comprender el impacto estratégico de la IA",
            "Crear roadmaps de transformación digital",
            "Establecer marcos de innovación organizacional"
          ],
          methodology: "Metodología experiencial con casos de estudio reales, workshops prácticos y sesiones de networking con otros líderes del ecosistema empresarial canario.",
          target: "CEOs, Directores Generales, CDOs y miembros del comité ejecutivo de empresas medianas y grandes.",
          benefits: [
            "Red de contactos exclusiva",
            "Certificación reconocida",
            "Acceso a partners tecnológicos",
            "Seguimiento post-programa",
            "Materiales exclusivos y actualizados"
          ]
        };
      case "2":
        return {
          overview: "Workshop intensivo que permite a las empresas identificar rápidamente oportunidades de aplicación de inteligencia artificial en sus procesos operativos.",
          objectives: [
            "Mapear procesos susceptibles de automatización",
            "Identificar casos de uso específicos de IA",
            "Evaluar el ROI potencial de implementaciones",
            "Crear un plan de acción inmediato"
          ],
          methodology: "Sesión práctica de trabajo con herramientas de análisis, dinámicas colaborativas y presentación de resultados con roadmap personalizado.",
          target: "Equipos de innovación, responsables de procesos, CTOs y directores de operaciones.",
          benefits: [
            "Resultados inmediatos",
            "Plan de acción personalizado",
            "Identificación de quick wins",
            "Casos de uso documentados",
            "Seguimiento de implementación"
          ]
        };
      case "3":
        return {
          overview: "Programa integral de 6 meses para establecer e implementar una oficina interna de inteligencia artificial que gestione la transformación digital de la empresa.",
          objectives: [
            "Crear estructura organizacional de IA",
            "Implementar procesos y metodologías",
            "Formar equipo interno especializado",
            "Establecer métricas y KPIs",
            "Desarrollar pipeline de proyectos"
          ],
          methodology: "Acompañamiento continuo con entregables semanales, formación del equipo interno, implementación de herramientas y seguimiento de resultados.",
          target: "Empresas que buscan una transformación digital profunda y sostenible con recursos internos.",
          benefits: [
            "Oficina de IA completamente operativa",
            "Equipo formado y certificado",
            "Tecnología implementada",
            "Procesos documentados",
            "Autonomía en innovación"
          ]
        };
      case "4":
        return {
          overview: "Sesión estratégica para realizar un diagnóstico completo de los retos organizacionales y identificar oportunidades de mejora e innovación.",
          objectives: [
            "Diagnosticar retos organizacionales",
            "Identificar oportunidades de innovación",
            "Priorizar iniciativas de transformación",
            "Crear roadmap inicial de actuación"
          ],
          methodology: "Metodología ágil de análisis con entrevistas a stakeholders, dinámicas de design thinking y presentación de conclusiones.",
          target: "Empresas en fase inicial de transformación que necesitan claridad sobre por dónde empezar.",
          benefits: [
            "Diagnóstico completo",
            "Priorización de iniciativas",
            "Roadmap de transformación",
            "Identificación de recursos necesarios",
            "Base para futuras actuaciones"
          ]
        };
      case "5":
        return {
          overview: "Espacio colaborativo equipado con tecnología avanzada para el desarrollo de prototipos, pruebas de concepto y proyectos de innovación.",
          objectives: [
            "Facilitar desarrollo de prototipos",
            "Proporcionar acceso a tecnología avanzada",
            "Crear ambiente de innovación",
            "Conectar con mentores expertos"
          ],
          methodology: "Acceso libre a instalaciones con mentoría disponible, talleres especializados y eventos de networking.",
          target: "Startups, equipos de innovación corporativa, emprendedores y desarrolladores.",
          benefits: [
            "Acceso 24/7 a instalaciones",
            "Tecnología de última generación",
            "Red de mentores expertos",
            "Comunidad de innovadores",
            "Eventos exclusivos"
          ]
        };
      case "6":
        return {
          overview: "Sesiones colaborativas que reúnen a expertos del sector y la academia para abordar desafíos específicos de la industria.",
          objectives: [
            "Resolver desafíos sectoriales específicos",
            "Conectar expertise académico e industrial",
            "Generar soluciones innovadoras",
            "Crear sinergias entre participantes"
          ],
          methodology: "Metodología de think tank con facilitación experta, trabajo en grupos multidisciplinares y documentación de resultados.",
          target: "Profesionales senior, investigadores, consultores y directivos de sectores específicos.",
          benefits: [
            "Acceso a expertise especializado",
            "Soluciones colaborativas",
            "Red de contactos sectorial",
            "Documentación completa",
            "Seguimiento de implementación"
          ]
        };
      case "7":
        return {
          overview: "Sesión estratégica para realizar un diagnóstico completo de los retos organizacionales y identificar oportunidades de mejora e innovación.",
          objectives: [
            "Diagnosticar retos organizacionales",
            "Identificar oportunidades de innovación",
            "Priorizar iniciativas de transformación",
            "Crear roadmap inicial de actuación"
          ],
          methodology: "Metodología ágil de análisis con entrevistas a stakeholders, dinámicas de design thinking y presentación de conclusiones.",
          target: "Empresas en fase inicial de transformación que necesitan claridad sobre por dónde empezar.",
          benefits: [
            "Diagnóstico completo",
            "Priorización de iniciativas",
            "Roadmap de transformación",
            "Identificación de recursos necesarios",
            "Base para futuras actuaciones"
          ]
        };
      default:
        return {
          overview: program.description,
          objectives: ["Información detallada próximamente"],
          methodology: "Metodología personalizada según necesidades del cliente.",
          target: "Profesionales y empresas del sector.",
          benefits: ["Consultar con nuestro equipo"]
        };
    }
  };

  const details = getDetailedDescription(program.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{program.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Program Image */}
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <img 
              src={program.image} 
              alt={program.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span><strong>Modalidad:</strong> {program.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong>Participantes:</strong> {program.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span><strong>Duración:</strong> {getDurationText(program.size)}</span>
            </div>
          </div>

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
            <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
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
            <h3 className="text-xl font-semibold mb-3">Características</h3>
            <div className="flex flex-wrap gap-2">
              {program.features.map((feature, index) => (
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
