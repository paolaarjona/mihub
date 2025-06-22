import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin, Trophy, Grid, CalendarDays } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EventDetailsDialog from "@/components/EventDetailsDialog";
import CorporateEventsCalendar from "@/components/CorporateEventsCalendar";

export default function EventosCorporativos() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventos = [
    {
      id: "1",
      title: t.corporateEvents.events.congress.title,
      description: t.corporateEvents.events.congress.description,
      fecha: t.corporateEvents.events.congress.date,
      ubicacion: t.corporateEvents.events.congress.location,
      asistentes: "200+",
      tipo: t.corporateEvents.events.congress.type,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
    },
    {
      id: "2",
      title: t.corporateEvents.events.workshop.title,
      description: t.corporateEvents.events.workshop.description,
      fecha: t.corporateEvents.events.workshop.date,
      ubicacion: t.corporateEvents.events.workshop.location,
      asistentes: "25",
      tipo: t.corporateEvents.events.workshop.type,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      id: "3",
      title: t.corporateEvents.events.hackathon.title,
      description: t.corporateEvents.events.hackathon.description,
      fecha: t.corporateEvents.events.hackathon.date,
      ubicacion: t.corporateEvents.events.hackathon.location,
      asistentes: "100+",
      tipo: t.corporateEvents.events.hackathon.type,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
    },
    {
      id: "4",
      title: t.corporateEvents.events.roundtable.title,
      description: t.corporateEvents.events.roundtable.description,
      fecha: t.corporateEvents.events.roundtable.date,
      ubicacion: t.corporateEvents.events.roundtable.location,
      asistentes: "50",
      tipo: t.corporateEvents.events.roundtable.type,
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
    }
  ];

  const servicios = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: t.corporateEvents.services.organization.title,
      description: t.corporateEvents.services.organization.description
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t.corporateEvents.services.experts.title,
      description: t.corporateEvents.services.experts.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.corporateEvents.services.venues.title,
      description: t.corporateEvents.services.venues.description
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: t.corporateEvents.services.experiences.title,
      description: t.corporateEvents.services.experiences.description
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 to-sea-light/20 pt-24 md:pt-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.corporateEvents.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                {t.corporateEvents.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.corporateEvents.description}
              </p>
            </div>
          </div>
        </section>

        {/* Próximos Eventos con Tabs */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {t.corporateEvents.upcomingEvents.title}
              </h2>
              <p className="text-muted-foreground">
                {t.corporateEvents.upcomingEvents.description}
              </p>
            </div>
            
            <Tabs defaultValue="grid" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <Grid className="h-4 w-4" />
                  {t.corporateEvents.view?.grid || "Vista de Lista"}
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {t.corporateEvents.view?.calendar || "Vista de Calendario"}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="grid" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {eventos.map((evento, index) => (
                    <div 
                      key={evento.id}
                      className="glass-card rounded-2xl overflow-hidden animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={evento.image}
                          alt={evento.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {evento.tipo}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3">{evento.title}</h3>
                        <p className="text-muted-foreground mb-4">{evento.description}</p>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
                          <div>
                            <Calendar className="h-4 w-4 mb-1" />
                            <p>{evento.fecha}</p>
                          </div>
                          <div>
                            <MapPin className="h-4 w-4 mb-1" />
                            <p>{evento.ubicacion}</p>
                          </div>
                          <div>
                            <Users className="h-4 w-4 mb-1" />
                            <p>{evento.asistentes}</p>
                          </div>
                        </div>
                        
                        <EventDetailsDialog evento={evento}>
                          <Button className="w-full btn-primary">
                            {t.corporateEvents.moreInfo} <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </EventDetailsDialog>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="calendar" className="mt-8">
                <CorporateEventsCalendar />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Servicios */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {t.corporateEvents.ourServices.title}
              </h2>
              <p className="text-muted-foreground">
                {t.corporateEvents.ourServices.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicios.map((servicio, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10 inline-flex">
                    {servicio.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{servicio.title}</h3>
                  <p className="text-muted-foreground text-sm">{servicio.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                {t.corporateEvents.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                {t.corporateEvents.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/#eventos-corporativos">
                    {t.corporateEvents.cta.requestProposal} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    {t.corporateEvents.cta.contactTeam}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
