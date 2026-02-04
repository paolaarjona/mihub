import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Servicios corporativos data - programas de formación con tiempo de ejecución
const allApartments: ApartmentProps[] = [
  {
    id: "1",
    name: "Programa CEO & Directivos",
    description: "Programa semestral especializado para equipos directivos, enfocado en liderazgo en la era de la IA.",
    price: 0,
    capacity: 8,
    size: 0.5, // 1/2 día
    image: "/lovable-uploads/5b5c64b9-3a51-426e-bd2f-5f0e23f02874.png",
    location: "Presencial",
    features: ["Certificación", "Metodología propia", "Networking", "Seguimiento personalizado", "Acceso a partners", "Materiales exclusivos"]
  },
  {
    id: "2",
    name: "Workshop Adopción de IA",
    description: "Sesión intensiva de un día para identificar oportunidades inmediatas de IA en tu empresa.",
    price: 0,
    capacity: 12,
    size: 1, // 1 día completo
    image: "/lovable-uploads/e393983a-92e2-4bfe-bc08-b4ae09d9c5d6.png",
    location: "Híbrido",
    features: ["Un día intensivo", "Casos de uso", "Plan de acción", "Material de trabajo", "Seguimiento"]
  },
  {
    id: "3",
    name: "Oficina de IA - Implementación",
    description: "Programa completo de 6 meses para crear e implementar la oficina interna de IA de tu empresa.",
    price: 0,
    capacity: 4,
    size: 8, // 8 semanas
    image: "/lovable-uploads/c466127a-cb17-4b0a-acef-1ae82b555993.png",
    location: "Personalizado",
    features: ["6 meses de duración", "Implementación completa", "Equipo dedicado", "Formación interna", "Tecnología incluida"]
  },
  {
    id: "4",
    name: "Consultoría Estratégica en IA",
    description: "Asesoramiento estratégico para la transformación digital y adopción de inteligencia artificial.",
    price: 0,
    capacity: 6,
    size: 3,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    location: "Personalizado",
    features: ["Análisis estratégico", "Roadmap personalizado", "Acompañamiento", "Formación ejecutiva", "Seguimiento trimestral"]
  },
  {
    id: "5",
    name: "Laboratorio de Innovación",
    description: "Espacio de trabajo colaborativo para desarrollo de prototipos y pruebas de concepto.",
    price: 0,
    capacity: 15,
    size: 12,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    location: "MiHub",
    features: ["Equipamiento avanzado", "Mentores expertos", "Acceso 24/7", "Herramientas digitales", "Networking"]
  },
  {
    id: "6",
    name: "Think Tank Sectorial",
    description: "Sesiones de trabajo colaborativo con expertos del sector para resolver desafíos específicos.",
    price: 0,
    capacity: 10,
    size: 4,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    location: "Híbrido",
    features: ["Expertos sectoriales", "Metodología colaborativa", "Soluciones prácticas", "Networking especializado", "Documentación completa"]
  },
  {
    id: "7",
    name: "Detección de Retos",
    description: "Sesión de medio día para identificar los principales retos y oportunidades de tu organización.",
    price: 0,
    capacity: 6,
    size: 0.5, // 1/2 día
    image: "/lovable-uploads/0330ec35-bffc-43bc-8054-a3be8d9d93d1.png",
    location: "Presencial",
    features: ["Análisis de retos", "Identificación de oportunidades", "Roadmap inicial", "Metodología ágil", "Informe de resultados"]
  }
];

export default function Apartments() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                {t.apartments.title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                {t.apartments.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-20 sm:right-40 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="section py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allApartments.map((apartment, index) => (
                <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={apartment} hidePrice={true} showDuration={true} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
