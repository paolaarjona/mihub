import { Calendar, Users, Lightbulb, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TimelineSection() {
  const { t } = useLanguage();
  
  const timelineEvents = [
    {
      year: "2018-2020",
      title: "Construcción de MiHub",
      description: "Desarrollo e implementación del espacio físico de MiHub, estableciendo las bases del ecosistema de innovación.",
      icon: <Lightbulb className="h-5 w-5" />,
      image: "/lovable-uploads/cd7c6c89-4d65-4c73-9e73-a0148dcec9e5.png"
    },
    {
      year: "2022",
      title: "Evento de Inauguración",
      description: "Gran inauguración con CEOs de Air Europa, Mahou, Telefónica y otras empresas líderes del sector.",
      icon: <Users className="h-5 w-5" />,
      image: "/lovable-uploads/85efec9f-981d-4c89-bbce-c686a98b3331.png"
    },
    {
      year: "2022-2024",
      title: "Consolidación",
      description: "Laboratorios de innovación, formaciones y eventos sectoriales con más de 3000 asistentes.",
      icon: <Calendar className="h-5 w-5" />,
      image: "/lovable-uploads/42a648f5-29cb-44d1-a727-c647080bc537.png"
    },
    {
      year: "2025",
      title: "Profesionalización",
      description: "Foco en Inteligencia Artificial con nuevos socios, equipo directivo y metodología propia.",
      icon: <Zap className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ];
  
  return (
    <section className="section bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            7 años transformando Canarias
          </h2>
          <p className="text-muted-foreground">
            Desde 2018, hemos evolucionado hasta convertirnos en el centro de referencia para la innovación empresarial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="glass-card rounded-xl p-5 h-full animate-fade-in" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
              {/* Image */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
                  {event.icon}
                </div>
                <span className="text-lg font-bold text-primary">{event.year}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
