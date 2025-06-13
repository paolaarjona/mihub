
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Cog, Users } from "lucide-react";

const proyectos = [
  {
    id: "1",
    title: "Transformación Digital Hotelera",
    description: "Implementación de sistema de IA para optimización de reservas y experiencia del huésped.",
    sector: "Turismo",
    duration: "6 meses",
    icon: <Target className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
  },
  {
    id: "2", 
    title: "Oficina de Innovación Retail",
    description: "Creación de laboratorio de innovación para cadena de retail con foco en experiencia del cliente.",
    sector: "Retail",
    duration: "12 meses",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Automatización Industrial",
    description: "Proyecto de Industry 4.0 con implementación de IoT y análisis predictivo.",
    sector: "Industrial",
    duration: "9 meses",
    icon: <Cog className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "Ecosistema Fintech",
    description: "Desarrollo de plataforma colaborativa para startups fintech en Canarias.",
    sector: "Fintech",
    duration: "18 meses",
    icon: <Users className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
  }
];

export default function Proyectos() {
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
                Nuestros Proyectos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                Innovación en Acción
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubre los proyectos de transformación e innovación que hemos desarrollado 
                junto a empresas canarias.
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proyectos.map((proyecto, index) => (
                <div 
                  key={proyecto.id}
                  className="glass-card rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={proyecto.image}
                      alt={proyecto.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {proyecto.icon}
                      </div>
                      <div>
                        <span className="text-sm text-primary font-medium">{proyecto.sector}</span>
                        <p className="text-sm text-muted-foreground">{proyecto.duration}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{proyecto.title}</h3>
                    <p className="text-muted-foreground mb-4">{proyecto.description}</p>
                    <Button variant="outline" className="w-full">
                      Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Trabajamos contigo para convertir tu idea en un proyecto de innovación exitoso.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">
                  Hablemos de tu proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
