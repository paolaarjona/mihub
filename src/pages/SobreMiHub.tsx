import { useState } from "react";
import { MapPin, Users, Camera, Wifi, Coffee, Car, Eye, Navigation, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SobreMiHub = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Espacio de Innovación</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre <span className="text-primary">miHUB 3.0</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un espacio único de 205 m² ubicado en la Marina de Lanzarote, diseñado para inspirar la innovación 
                y fomentar la colaboración empresarial en un entorno privilegiado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">205 m²</CardTitle>
                  <CardDescription>Superficie total</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">5</CardTitle>
                  <CardDescription>Espacios disponibles</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">241</CardTitle>
                  <CardDescription>Capacidad máxima</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16">
          <div className="container">
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
                        alt="Plano arquitectónico de miHUB 3.0 mostrando la distribución de Sala 0, Sala 1, Sala 2, Sala 3 y Terraza"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-center">Ubicación Privilegiada</h4>
                      <div className="space-y-4">
                        {/* Primera fila - 3 iconos */}
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
                        
                        {/* Segunda fila - 2 iconos */}
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
                      Equipamiento de última generación para garantizar el éxito de tus eventos, 
                      desde presentaciones corporativas hasta conferencias internacionales.
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

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para conocer miHUB 3.0?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestras instalaciones pueden transformar tus eventos corporativos 
              en experiencias únicas e inolvidables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Solicitar Visita</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/eventos-corporativos">Ver Eventos</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreMiHub;