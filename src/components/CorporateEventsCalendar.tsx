
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EventDetailsDialog from "./EventDetailsDialog";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  fecha: string;
  ubicacion: string;
  asistentes: string;
  tipo: string;
  image: string;
  date: Date;
}

export default function CorporateEventsCalendar() {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Eventos distribuidos en julio 2024
  const calendarEvents: CalendarEvent[] = [
    {
      id: "1",
      title: t.corporateEvents.events.congress.title,
      description: t.corporateEvents.events.congress.description,
      fecha: "3 de Julio, 2024",
      ubicacion: t.corporateEvents.events.congress.location,
      asistentes: "200+",
      tipo: t.corporateEvents.events.congress.type,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2024, 6, 3) // 3 de julio
    },
    {
      id: "2",
      title: t.corporateEvents.events.workshop.title,
      description: t.corporateEvents.events.workshop.description,
      fecha: "10 de Julio, 2024",
      ubicacion: t.corporateEvents.events.workshop.location,
      asistentes: "25",
      tipo: t.corporateEvents.events.workshop.type,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2024, 6, 10) // 10 de julio
    },
    {
      id: "3",
      title: t.corporateEvents.events.hackathon.title,
      description: t.corporateEvents.events.hackathon.description,
      fecha: "17 de Julio, 2024",
      ubicacion: t.corporateEvents.events.hackathon.location,
      asistentes: "100+",
      tipo: t.corporateEvents.events.hackathon.type,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      date: new Date(2024, 6, 17) // 17 de julio
    },
    {
      id: "4",
      title: t.corporateEvents.events.roundtable.title,
      description: t.corporateEvents.events.roundtable.description,
      fecha: "24 de Julio, 2024",
      ubicacion: t.corporateEvents.events.roundtable.location,
      asistentes: "50",
      tipo: t.corporateEvents.events.roundtable.type,
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      date: new Date(2024, 6, 24) // 24 de julio
    },
    {
      id: "5",
      title: "Seminario de Innovación Digital",
      description: "Descubre las últimas tendencias en transformación digital",
      fecha: "31 de Julio, 2024",
      ubicacion: "Centro de Convenciones",
      asistentes: "75",
      tipo: "Seminario",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      date: new Date(2024, 6, 31) // 31 de julio
    }
  ];

  // Fechas que tienen eventos
  const eventDates = calendarEvents.map(event => event.date);

  // Obtener eventos del día seleccionado
  const getEventsForDate = (date: Date) => {
    return calendarEvents.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendario */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            {t.corporateEvents.calendar?.title || "Calendario de Eventos"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border pointer-events-auto"
            defaultMonth={new Date(2024, 6)} // Julio 2024
            modifiers={{
              hasEvent: eventDates
            }}
            modifiersStyles={{
              hasEvent: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                fontWeight: 'bold'
              }
            }}
          />
          <div className="mt-4 text-sm text-muted-foreground">
            <p>{t.corporateEvents.calendar?.instruction || "Haz clic en una fecha para ver los eventos del día"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Eventos del día seleccionado */}
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDate 
              ? `${t.corporateEvents.calendar?.eventsFor || "Eventos para"} ${selectedDate.toLocaleDateString()}`
              : t.corporateEvents.calendar?.selectDate || "Selecciona una fecha"
            }
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => (
                <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <Badge variant="secondary">{event.tipo}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.fecha}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.asistentes}</span>
                    </div>
                    <div className="flex items-center gap-1 col-span-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.ubicacion}</span>
                    </div>
                  </div>

                  <EventDetailsDialog evento={event}>
                    <Button className="w-full">
                      {t.corporateEvents.moreInfo}
                    </Button>
                  </EventDetailsDialog>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>{t.corporateEvents.calendar?.noEvents || "No hay eventos programados para esta fecha"}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
