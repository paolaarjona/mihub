import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";

import PartnersSection from "@/components/PartnersSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Target, Cog, Users, Lightbulb, Zap, Camera, Wifi, MapPin, Coffee, Car, Eye, Navigation, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "@/components/TimelineSection";


export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Salas de miHUB
  const rooms = [
    {
      id: "sala0",
      name: "Sala 0",
      capacity: "12 personas",
      size: "20 m²",
      features: ["Proyector HD", "Mesa de reuniones compacta", "Sistema de audio", "WiFi de alta velocidad"],
      image: "/lovable-uploads/41801f83-3b09-46f0-a8f4-bae721727b3e.png",
      description: "Espacio íntimo perfecto para reuniones pequeñas y sesiones de trabajo."
    },
    {
      id: "sala1",
      name: "Sala 1",
      capacity: "18 personas",
      size: "25 m²",
      features: ["Proyector 4K", "Pizarra interactiva", "Sistema de audio profesional", "WiFi de alta velocidad"],
      image: "/lovable-uploads/41801f83-3b09-46f0-a8f4-bae721727b3e.png",
      description: "Perfecta para reuniones ejecutivas y presentaciones corporativas."
    },
    {
      id: "sala2", 
      name: "Sala 2",
      capacity: "55 personas",
      size: "40 m²",
      features: ["Pantalla LED 65\"", "Sistema de videoconferencia", "Mesa de conferencias", "Iluminación regulable"],
      image: "/lovable-uploads/42a648f5-29cb-44d1-a727-c647080bc537.png",
      description: "Ideal para formaciones, workshops y eventos de networking."
    },
    {
      id: "sala3",
      name: "Sala 3", 
      capacity: "36 personas",
      size: "60 m²",
      features: ["Sistema multimedia completo", "Escenario elevado", "Sonido surround", "Cámaras profesionales"],
      image: "/lovable-uploads/45e716e4-635c-49f9-9440-14d33ccfe483.png",
      description: "El espacio principal para conferencias, lanzamientos y eventos corporativos."
    },
    {
      id: "terraza",
      name: "Terraza", 
      capacity: "120 personas",
      size: "80 m²",
      features: ["Vista panorámica", "Zona de networking", "Catering disponible", "Ambiente al aire libre"],
      image: "/lovable-uploads/terraza-nueva.jpeg",
      description: "Espacio único con vistas al puerto deportivo para eventos especiales y networking."
    }
  ];

  const amenities = [
    { icon: Wifi, name: "WiFi de alta velocidad", description: "Conexión de fibra óptica 1GB" },
    { icon: Coffee, name: "Zona de catering", description: "Servicio de coffee break y catering" },
    { icon: Car, name: "Aparcamiento", description: "Plazas disponibles en la marina" },
    { icon: Camera, name: "Equipamiento audiovisual", description: "Tecnología de última generación" },
  ];
  
  // Metodología en 3 fases - orientada a implementar proyectos de innovación
  const methodology = [
    {
      image: "/lovable-uploads/2664fe00-ee18-44e7-9f27-fc98890ca4ca.png",
      title: "Fase 1: Identificación de Oportunidades",
      description: "Análisis del negocio para identificar áreas de mejora y oportunidades de innovación específicas que generen valor real."
    },
    {
      image: "/lovable-uploads/c9fe5c4c-cc22-496f-b047-6b772dd6252e.png", 
      title: "Fase 2: Desarrollo de Proyectos",
      description: "Diseño y planificación de proyectos de innovación personalizados, con metodologías ágiles y equipos multidisciplinares."
    },
    {
      image: "/lovable-uploads/b30dc2b6-a7e7-45c2-b152-6863801121b4.png",
      title: "Fase 3: Implementación y Seguimiento",
      description: "Puesta en marcha de los proyectos con acompañamiento continuo, medición de resultados y optimización."
    }
  ];
  
  // Ventajas competitivas
  const advantages = [
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Metodología Propia",
      description: "Proceso validado de transformación en 3 fases específico para empresas canarias."
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Ecosistema de Partners",
      description: "Red de colaboradores estratégicos: Oracle, Santander, Telefónica, Air Europa y más."
    },
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Formación Especializada",
      description: "Programas de capacitación diseñados para profesionales y equipos directivos."
    },
    {
      icon: <Cog className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Laboratorios de Innovación",
      description: "Espacios equipados para desarrollo de proyectos y pruebas de concepto."
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Think Tanks",
      description: "Sesiones de trabajo colaborativo con expertos del sector y la academia."
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "50 años de experiencia",
      description: "Respaldo del Grupo Martínez Abolafio, líder industrial en Canarias."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About miHUB Summary */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Una iniciativa de Grupo Martínez Abolafio</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Qué es <span className="text-primary">miHUB</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  miHUB es el primer centro de innovación turística de Canarias, un ecosistema empresarial 
                  diseñado para impulsar la transformación digital y sostenible del sector turístico canario.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Respaldado por <strong>Grupo Martínez Abolafio</strong>, con más de 50 años de experiencia 
                  en el sector turístico y empresarial canario, miHUB conecta empresas, startups, 
                  instituciones y profesionales para crear soluciones innovadoras que posicionen 
                  a Canarias como referente en turismo inteligente y sostenible.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Ecosistema Colaborativo</h3>
                  <p className="text-sm text-muted-foreground">
                    Conectamos empresas, startups e instituciones para crear sinergias
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Turismo Inteligente</h3>
                  <p className="text-sm text-muted-foreground">
                    Desarrollamos soluciones tecnológicas para el sector turístico
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Innovación Sostenible</h3>
                  <p className="text-sm text-muted-foreground">
                    Promovemos la sostenibilidad en todas nuestras iniciativas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section - Historia de miHUB */}
        <TimelineSection />
        
        {/* Metodología Section */}
        <section className="relative section bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                Nuestra Metodología
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Un viaje en 3 fases a la Innovación
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Guiamos a cada organización a través de nuestro proceso probado de implementación de proyectos de innovación.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {methodology.map((phase, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl animate-fade-in text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 sm:mb-6 inline-flex">
                    <img 
                      src={phase.image}
                      alt={phase.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-20 sm:right-40 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Corporate Events Booking Section - Now positioned before Featured Programs */}
        <section id="eventos-corporativos" className="relative section bg-muted/30 overflow-hidden">
          <div className="container relative z-10">
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
                <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                  Eventos Corporativos
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
                  Contrata nuestros servicios
                </h2>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Organiza tu evento de innovación personalizado. Desde workshops hasta congresos de innovación, creamos experiencias que transforman equipos y empresas.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left max-w-2xl mx-auto">
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Eventos personalizados de innovación
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Facilitadores expertos en transformación digital
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Instalaciones equipadas con tecnología avanzada
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
                    </div>
                    Networking con el ecosistema de innovación canario
                  </li>
                </ul>
                
                {/* Button now appears first, before the form */}
                <div className="mb-8 sm:mb-12">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/eventos-corporativos">Solicitar evento corporativo</Link>
                  </Button>
                </div>
              </div>
              
              {/* Form now appears after the button */}
              <div className="max-w-2xl mx-auto">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <PartnersSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Nuestras Instalaciones - Tabs con salas, plano y servicios */}
        <section className="section bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                Nuestras Instalaciones
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                miHUB 3.0 - 205 m² en la Marina de Lanzarote
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Un espacio único diseñado para inspirar la innovación y fomentar la colaboración empresarial.
              </p>
            </div>
            
            <Tabs defaultValue="salas" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="salas">Nuestras Salas</TabsTrigger>
                <TabsTrigger value="plano">Plano del Espacio</TabsTrigger>
                <TabsTrigger value="servicios">Servicios</TabsTrigger>
              </TabsList>

              <TabsContent value="salas" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {rooms.map((room) => (
                    <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{room.capacity}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{room.name}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {room.size}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{room.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Características:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {room.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="plano" className="mt-8">
                <Card className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Plano de miHUB 3.0</h3>
                    <p className="text-muted-foreground">
                      Distribución inteligente de 205 m² en la Marina de Lanzarote
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 mb-8">
                    <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                      <img 
                        src="/lovable-uploads/plano-mihub.jpg" 
                        alt="Plano arquitectónico de miHUB 3.0"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-center">Ubicación Privilegiada</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm">Marina de Lanzarote</span>
                          </div>
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm">Vistas al puerto deportivo</span>
                          </div>
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Navigation className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm">Acceso directo desde el puerto</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <ShoppingBag className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm">Zona comercial y gastronómica</span>
                          </div>
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Car className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm">Parking disponible</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="servicios" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {amenities.map((amenity, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <amenity.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{amenity.name}</h4>
                          <p className="text-muted-foreground text-sm">{amenity.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Material Audiovisual Profesional</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Equipamiento de última generación para garantizar el éxito de tus eventos.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                          <Camera className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Grabación Profesional</h4>
                        <p className="text-sm text-muted-foreground">Cámaras 4K y equipos de grabación</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Videoconferencia</h4>
                        <p className="text-sm text-muted-foreground">Sistemas de alta definición</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded"></div>
                          </div>
                        </div>
                        <h4 className="font-semibold">Pantallas LED</h4>
                        <p className="text-sm text-muted-foreground">Proyectores y pantallas de gran formato</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Features Section - ¿Por qué miHUB? */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                ¿Por qué miHUB?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Ventajas Competitivas
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Nuestro ecosistema de innovación ofrece las mejores condiciones para la transformación empresarial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative section bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                {t.home.cta.description}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
