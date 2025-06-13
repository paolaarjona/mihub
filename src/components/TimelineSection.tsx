
import { Calendar, Users, Lightbulb, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TimelineSection() {
  const { t } = useLanguage();
  
  const timelineEvents = [
    {
      year: "2018-2020",
      title: "Lanzamiento de miHUB",
      description: "Creación del espacio físico y establecimiento de las bases del ecosistema de innovación.",
      icon: <Lightbulb className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      year: "2021",
      title: "Evento de Inauguración",
      description: "Gran inauguración con CEOs de Air Europa, Mahou, Telefónica y otras empresas líderes.",
      icon: <Users className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      year: "2022-2024",
      title: "Consolidación",
      description: "Laboratorios de innovación, formaciones y eventos sectoriales con más de 3000 asistentes.",
      icon: <Calendar className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      year: "2025",
      title: "Nueva Etapa: IA",
      description: "Foco en Inteligencia Artificial con nuevos socios, equipo directivo y metodología propia.",
      icon: <Zap className="h-6 w-6" />,
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
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-primary to-transparent hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        {event.icon}
                      </div>
                      <span className="text-2xl font-bold text-primary">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Image */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mt-4 md:mt-0`}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
