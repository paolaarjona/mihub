import { Calendar, Users, Lightbulb, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TimelineSection() {
  const { t } = useLanguage();
  
  const timelineEvents = [
    {
      year: "2018-2020",
      title: "Construcción de miHUB",
      description: "Desarrollo e implementación del espacio físico de miHUB, estableciendo las bases del ecosistema de innovación.",
      icon: <Lightbulb className="h-6 w-6" />,
      image: "/lovable-uploads/cd7c6c89-4d65-4c73-9e73-a0148dcec9e5.png"
    },
    {
      year: "2022",
      title: "Evento de Inauguración",
      description: "Gran inauguración con CEOs de Air Europa, Mahou, Telefónica y otras empresas líderes del sector.",
      icon: <Users className="h-6 w-6" />,
      image: "/lovable-uploads/85efec9f-981d-4c89-bbce-c686a98b3331.png"
    },
    {
      year: "2022-2024",
      title: "Consolidación",
      description: "Laboratorios de innovación, formaciones y eventos sectoriales con más de 3000 asistentes.",
      icon: <Calendar className="h-6 w-6" />,
      image: "/lovable-uploads/42a648f5-29cb-44d1-a727-c647080bc537.png"
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
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {timelineEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="glass-card rounded-xl p-6 h-full animate-fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                      {/* Image */}
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
                        <img 
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">
                          {event.icon}
                        </div>
                        <span className="text-2xl font-bold text-primary">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Flechas personalizadas con mejor visibilidad */}
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
              Desliza para ver más
              <ChevronRight className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
