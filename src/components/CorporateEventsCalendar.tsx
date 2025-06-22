
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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2025, 6, 1)); // Julio 2025

  // Eventos distribuidos a lo largo del 2025 empezando desde julio - al menos uno por semana
  const calendarEvents: CalendarEvent[] = [
    // Julio 2025
    {
      id: "1",
      title: "Congreso de Innovación Tecnológica",
      description: "Un evento que reúne líderes tecnológicos para discutir las últimas tendencias.",
      fecha: "2 de Julio, 2025",
      ubicacion: "Centro de Convenciones",
      asistentes: "200+",
      tipo: "Congreso",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 6, 2)
    },
    {
      id: "2",
      title: "Workshop de Inteligencia Artificial",
      description: "Taller práctico sobre implementación de IA en empresas turísticas.",
      fecha: "9 de Julio, 2025",
      ubicacion: "Centro de Innovación",
      asistentes: "30",
      tipo: "Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 6, 9)
    },
    {
      id: "3",
      title: "Mesa Redonda: Turismo Sostenible",
      description: "Discusión sobre prácticas sostenibles en la industria turística.",
      fecha: "16 de Julio, 2025",
      ubicacion: "Hotel Ejecutivo",
      asistentes: "45",
      tipo: "Mesa Redonda",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      date: new Date(2025, 6, 16)
    },
    {
      id: "4",
      title: "Seminario de Marketing Digital",
      description: "Estrategias avanzadas de marketing digital para el sector turístico.",
      fecha: "23 de Julio, 2025",
      ubicacion: "Centro Empresarial",
      asistentes: "60",
      tipo: "Seminario",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      date: new Date(2025, 6, 23)
    },
    {
      id: "5",
      title: "Hackathon de Soluciones Turísticas",
      description: "48 horas creando soluciones innovadoras para el turismo.",
      fecha: "30 de Julio, 2025",
      ubicacion: "Hub de Innovación",
      asistentes: "80",
      tipo: "Hackathon",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      date: new Date(2025, 6, 30)
    },
    // Agosto 2025
    {
      id: "6",
      title: "Conferencia de Liderazgo",
      description: "Desarrollo de habilidades de liderazgo para ejecutivos.",
      fecha: "6 de Agosto, 2025",
      ubicacion: "Auditorio Principal",
      asistentes: "150",
      tipo: "Conferencia",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 7, 6)
    },
    {
      id: "7",
      title: "Taller de Transformación Digital",
      description: "Herramientas prácticas para la digitalización empresarial.",
      fecha: "13 de Agosto, 2025",
      ubicacion: "Centro Tecnológico",
      asistentes: "40",
      tipo: "Taller",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 7, 13)
    },
    {
      id: "8",
      title: "Cumbre de Innovación Hotelera",
      description: "Tendencias y tecnologías emergentes en hotelería.",
      fecha: "20 de Agosto, 2025",
      ubicacion: "Resort Internacional",
      asistentes: "120",
      tipo: "Cumbre",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 7, 20)
    },
    {
      id: "9",
      title: "Workshop de Experiencia del Cliente",
      description: "Creando experiencias memorables en el sector turístico.",
      fecha: "27 de Agosto, 2025",
      ubicacion: "Centro de Capacitación",
      asistentes: "35",
      tipo: "Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 7, 27)
    },
    // Septiembre 2025
    {
      id: "10",
      title: "Foro de Startups Turísticas",
      description: "Presentación de startups innovadoras en turismo.",
      fecha: "3 de Septiembre, 2025",
      ubicacion: "Incubadora Tech",
      asistentes: "90",
      tipo: "Foro",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      date: new Date(2025, 8, 3)
    },
    {
      id: "11",
      title: "Seminario de Revenue Management",
      description: "Optimización de ingresos en la industria hotelera.",
      fecha: "10 de Septiembre, 2025",
      ubicacion: "Business Center",
      asistentes: "55",
      tipo: "Seminario",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      date: new Date(2025, 8, 10)
    },
    {
      id: "12",
      title: "Congreso de Turismo Responsable",
      description: "Impacto social y ambiental del turismo moderno.",
      fecha: "17 de Septiembre, 2025",
      ubicacion: "Centro de Convenciones",
      asistentes: "180",
      tipo: "Congreso",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 8, 17)
    },
    {
      id: "13",
      title: "Taller de Redes Sociales para Hoteles",
      description: "Estrategias efectivas de social media marketing.",
      fecha: "24 de Septiembre, 2025",
      ubicacion: "Hub Digital",
      asistentes: "28",
      tipo: "Taller",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 8, 24)
    },
    // Octubre 2025
    {
      id: "14",
      title: "Mesa Redonda: Futuro del Trabajo",
      description: "Tendencias laborales en la era post-pandemia.",
      fecha: "1 de Octubre, 2025",
      ubicacion: "Sala de Conferencias",
      asistentes: "50",
      tipo: "Mesa Redonda",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      date: new Date(2025, 9, 1)
    },
    {
      id: "15",
      title: "Workshop de Gestión de Crisis",
      description: "Preparación y respuesta ante crisis empresariales.",
      fecha: "8 de Octubre, 2025",
      ubicacion: "Instituto de Gestión",
      asistentes: "42",
      tipo: "Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 9, 8)
    },
    {
      id: "16",
      title: "Conferencia de Tecnología Blockchain",
      description: "Aplicaciones de blockchain en turismo y hotelería.",
      fecha: "15 de Octubre, 2025",
      ubicacion: "Centro Tecnológico",
      asistentes: "95",
      tipo: "Conferencia",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 9, 15)
    },
    {
      id: "17",
      title: "Seminario de Análisis de Datos",
      description: "Uso de big data para mejorar servicios turísticos.",
      fecha: "22 de Octubre, 2025",
      ubicacion: "Centro de Datos",
      asistentes: "65",
      tipo: "Seminario",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      date: new Date(2025, 9, 22)
    },
    {
      id: "18",
      title: "Festival de Innovación Turística",
      description: "Celebrando las mejores innovaciones del sector.",
      fecha: "29 de Octubre, 2025",
      ubicacion: "Plaza de Eventos",
      asistentes: "300+",
      tipo: "Festival",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 9, 29)
    },
    // Noviembre 2025
    {
      id: "19",
      title: "Workshop de Marketing de Contenidos",
      description: "Creación de contenido atractivo para redes sociales.",
      fecha: "5 de Noviembre, 2025",
      ubicacion: "Estudio Creativo",
      asistentes: "32",
      tipo: "Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 10, 5)
    },
    {
      id: "20",
      title: "Cumbre de Sostenibilidad",
      description: "Prácticas ecológicas en la industria del turismo.",
      fecha: "12 de Noviembre, 2025",
      ubicacion: "Centro Ecológico",
      asistentes: "150",
      tipo: "Cumbre",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      date: new Date(2025, 10, 12)
    },
    {
      id: "21",
      title: "Seminario de E-commerce Turístico",
      description: "Estrategias de venta online para el sector turismo.",
      fecha: "19 de Noviembre, 2025",
      ubicacion: "Centro Digital",
      asistentes: "75",
      tipo: "Seminario",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      date: new Date(2025, 10, 19)
    },
    {
      id: "22",
      title: "Mesa Redonda: Tendencias 2026",
      description: "Predicciones y tendencias para el próximo año.",
      fecha: "26 de Noviembre, 2025",
      ubicacion: "Auditorio Central",
      asistentes: "85",
      tipo: "Mesa Redonda",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      date: new Date(2025, 10, 26)
    },
    // Diciembre 2025
    {
      id: "23",
      title: "Workshop de Planificación Estratégica",
      description: "Planificación para el éxito empresarial en 2026.",
      fecha: "3 de Diciembre, 2025",
      ubicacion: "Centro de Negocios",
      asistentes: "45",
      tipo: "Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 11, 3)
    },
    {
      id: "24",
      title: "Conferencia de Cierre de Año",
      description: "Reflexiones y logros del año 2025 en turismo.",
      fecha: "10 de Diciembre, 2025",
      ubicacion: "Gran Salón",
      asistentes: "250+",
      tipo: "Conferencia",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      date: new Date(2025, 11, 10)
    },
    {
      id: "25",
      title: "Taller de Networking Navideño",
      description: "Evento de networking para cerrar el año.",
      fecha: "17 de Diciembre, 2025",
      ubicacion: "Club Empresarial",
      asistentes: "120",
      tipo: "Taller",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      date: new Date(2025, 11, 17)
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
            {t.corporateEvents.calendar?.title || "Calendario de Eventos 2025"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border pointer-events-auto"
            defaultMonth={new Date(2025, 6)} // Julio 2025
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
            <p className="mt-1 text-xs">📅 Las fechas marcadas tienen eventos programados</p>
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
              <p className="text-xs mt-2">Navega por el calendario para encontrar eventos disponibles</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
