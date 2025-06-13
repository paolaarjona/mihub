
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin, Trophy } from "lucide-react";

const eventos = [
  {
    id: "1",
    title: "Congreso de Innovación Canarias 2024",
    description: "Evento anual que reúne a los principales líderes empresariales y expertos en innovación.",
    fecha: "15-16 Noviembre 2024",
    ubicacion: "Las Palmas de Gran Canaria",
    asistentes: "200+",
    tipo: "Congreso",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "Workshop: IA para Directivos",
    description: "Taller intensivo sobre implementación práctica de IA en la estrategia empresarial.",
    fecha: "Mensual",
    ubicacion: "Híbrido",
    asistentes: "25",
    tipo: "Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Hackathon Turismo Sostenible",
    description: "Competición de 48 horas para desarrollar soluciones innovadoras en turismo sostenible.",
    fecha: "20-22 Diciembre 2024",
    ubicacion: "Tenerife",
    asistentes: "100+",
    tipo: "Hackathon",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "Mesa Redonda: Futuro del Trabajo",
    description: "Debate sobre el impacto de la IA y automatización en el mercado laboral canario.",
    fecha: "Trimestral",
    ubicacion: "Rotativo",
    asistentes: "50",
    tipo: "Mesa Redonda",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
  }
];

const servicios = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Organización Completa",
    description: "Desde la conceptualización hasta la ejecución, nos encargamos de todos los aspectos del evento."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Red de Expertos",
    description: "Acceso a nuestra amplia red de ponentes y expertos internacionales en innovación."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Venues Exclusivos",
    description: "Espacios únicos y tecnológicamente equipados en ubicaciones estratégicas."
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Experiencias Memorables",
    description: "Eventos que generan valor real y conexiones duraderas para los participantes."
  }
];

export default function EventosCorporativos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 to-sea-light/20 pt-24 md:pt-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Eventos Corporativos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                Conectamos Mentes Brillantes
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Organizamos eventos de clase mundial que impulsan la innovación y 
                crean conexiones valiosas en el ecosistema empresarial canario.
              </p>
            </div>
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Próximos Eventos
              </h2>
              <p className="text-muted-foreground">
                Únete a nosotros en estos eventos transformadores.
              </p>
            </div>
            
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
                    
                    <Button className="w-full btn-primary">
                      Más Información <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-muted-foreground">
                Ofrecemos soluciones integrales para eventos corporativos de innovación.
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
                ¿Quieres organizar un evento?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Creamos experiencias únicas que conectan personas, ideas y oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/booking">
                    Solicitar Propuesta <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Contactar Equipo
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
