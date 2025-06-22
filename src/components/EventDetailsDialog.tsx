
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Euro, Clock, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface EventDetailsDialogProps {
  evento: {
    id: string;
    title: string;
    description: string;
    fecha: string;
    ubicacion: string;
    asistentes: string;
    tipo: string;
    image: string;
  };
  children: React.ReactNode;
}

export default function EventDetailsDialog({ evento, children }: EventDetailsDialogProps) {
  const { t } = useLanguage();

  const getEventDetails = (id: string) => {
    const details = {
      "1": {
        price: t.corporateEvents.eventDetails.congress.price,
        duration: t.corporateEvents.eventDetails.congress.duration,
        instructor: t.corporateEvents.eventDetails.congress.instructor,
        requirements: t.corporateEvents.eventDetails.congress.requirements,
        includes: t.corporateEvents.eventDetails.congress.includes,
        longDescription: t.corporateEvents.eventDetails.congress.longDescription
      },
      "2": {
        price: t.corporateEvents.eventDetails.workshop.price,
        duration: t.corporateEvents.eventDetails.workshop.duration,
        instructor: t.corporateEvents.eventDetails.workshop.instructor,
        requirements: t.corporateEvents.eventDetails.workshop.requirements,
        includes: t.corporateEvents.eventDetails.workshop.includes,
        longDescription: t.corporateEvents.eventDetails.workshop.longDescription
      },
      "3": {
        price: t.corporateEvents.eventDetails.hackathon.price,
        duration: t.corporateEvents.eventDetails.hackathon.duration,
        instructor: t.corporateEvents.eventDetails.hackathon.instructor,
        requirements: t.corporateEvents.eventDetails.hackathon.requirements,
        includes: t.corporateEvents.eventDetails.hackathon.includes,
        longDescription: t.corporateEvents.eventDetails.hackathon.longDescription
      },
      "4": {
        price: t.corporateEvents.eventDetails.roundtable.price,
        duration: t.corporateEvents.eventDetails.roundtable.duration,
        instructor: t.corporateEvents.eventDetails.roundtable.instructor,
        requirements: t.corporateEvents.eventDetails.roundtable.requirements,
        includes: t.corporateEvents.eventDetails.roundtable.includes,
        longDescription: t.corporateEvents.eventDetails.roundtable.longDescription
      }
    };
    return details[id as keyof typeof details];
  };

  const eventDetails = getEventDetails(evento.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{evento.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Imagen del evento */}
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img 
              src={evento.image}
              alt={evento.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {evento.tipo}
              </Badge>
            </div>
          </div>

          {/* Información básica */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{t.corporateEvents.eventDetails.date}</p>
                <p className="font-medium">{evento.fecha}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{t.corporateEvents.eventDetails.location}</p>
                <p className="font-medium">{evento.ubicacion}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{t.corporateEvents.eventDetails.attendees}</p>
                <p className="font-medium">{evento.asistentes}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{t.corporateEvents.eventDetails.price}</p>
                <p className="font-medium">{eventDetails?.price}</p>
              </div>
            </div>
          </div>

          {/* Descripción larga */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t.corporateEvents.eventDetails.about}</h3>
            <p className="text-muted-foreground">{eventDetails?.longDescription}</p>
          </div>

          {/* Detalles adicionales */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">{t.corporateEvents.eventDetails.duration}</h4>
              </div>
              <p className="text-muted-foreground">{eventDetails?.duration}</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">{t.corporateEvents.eventDetails.instructor}</h4>
              </div>
              <p className="text-muted-foreground">{eventDetails?.instructor}</p>
            </div>
          </div>

          {/* Requisitos */}
          <div>
            <h4 className="font-semibold mb-2">{t.corporateEvents.eventDetails.requirements}</h4>
            <p className="text-muted-foreground">{eventDetails?.requirements}</p>
          </div>

          {/* Incluye */}
          <div>
            <h4 className="font-semibold mb-2">{t.corporateEvents.eventDetails.includes}</h4>
            <p className="text-muted-foreground">{eventDetails?.includes}</p>
          </div>

          {/* Botón de inscripción */}
          <div className="pt-4 border-t">
            <Button className="w-full btn-primary" size="lg">
              {t.corporateEvents.eventDetails.register}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
