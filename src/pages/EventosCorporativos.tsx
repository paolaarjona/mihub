import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DecorativeShapes from "@/components/DecorativeShapes";

const eventPhotos = [
  { src: "/lovable-uploads/evento-1.jpeg", alt: "Evento corporativo - Conferencia" },
  { src: "/lovable-uploads/evento-2.jpeg", alt: "Evento corporativo - Audiencia" },
  { src: "/lovable-uploads/evento-3.jpeg", alt: "Evento corporativo - Ponente" },
  { src: "/lovable-uploads/evento-4.jpeg", alt: "Evento corporativo - Marina Innova Hub" },
  { src: "/lovable-uploads/evento-5.jpeg", alt: "Evento corporativo - Kenneth Gasque" },
  { src: "/lovable-uploads/evento-6.jpeg", alt: "Evento corporativo - Presentación" },
  { src: "/lovable-uploads/evento-7.jpeg", alt: "Evento corporativo - LIUX" },
  { src: "/lovable-uploads/evento-8.jpeg", alt: "Evento corporativo - Photocall" },
  { src: "/lovable-uploads/evento-9.jpeg", alt: "Evento corporativo - Foro Global Sur" },
  { src: "/lovable-uploads/evento-10.jpeg", alt: "Evento corporativo - Realidad Virtual" },
];

export default function EventosCorporativos() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <section className="relative section bg-gradient-to-r from-primary/10 to-sea-light/20 pt-24 md:pt-32 overflow-hidden">
          <DecorativeShapes variant="top-right" />
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-sm text-secondary font-medium uppercase tracking-wider">
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

        {/* Galería de Eventos */}
        <section className="section relative overflow-hidden">
          <DecorativeShapes variant="bottom-left" />
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {"Nuestros Eventos" }
              </h2>
              <p className="text-muted-foreground">
                {"Momentos que reflejan la excelencia de nuestros eventos corporativos"}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-xl animate-fade-in group ${
                    index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className={`${index === 0 || index === 5 ? "aspect-square" : "aspect-video"} overflow-hidden`}>
                    <img 
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="section bg-muted/30 relative overflow-hidden">
          <DecorativeShapes variant="top-left" />
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
        <section className="section relative overflow-hidden">
          <DecorativeShapes variant="center" />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                {t.corporateEvents.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                {t.corporateEvents.cta.description}
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">
                    {t.corporateEvents.cta.contactTeam} <ArrowRight className="ml-2 h-4 w-4" />
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
