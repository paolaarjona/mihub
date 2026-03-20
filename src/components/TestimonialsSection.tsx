
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pedro Llamas",
    position: "Director de Innovación",
    company: "Oracle España",
    avatar: "/lovable-uploads/bd6bff0d-741d-42ee-a5f3-3000b863087d.png",
    content: "La alianza con MiHub nos ha permitido acelerar la adopción de tecnología cloud e IA en las empresas canarias. Su enfoque práctico y personalizado marca la diferencia.",
    rating: 5
  },
  {
    id: 3,
    name: "José Valle",
    position: "Presidente",
    company: "Cámara de Comercio de Lanzarote y la Graciosa",
    avatar: "/lovable-uploads/687804ba-6877-4c9b-b371-e40685b2fb87.png",
    content: "MiHub representa el futuro de la innovación empresarial en Canarias. En 7 años hemos transformado el ecosistema y ahora lideramos la adopción de IA en la región. MiHub representa un puente de crecimiento para los Empresarios de Canarias.",
    rating: 5
  },
  {
    id: 4,
    name: "Salvador Medina",
    position: "CEO",
    company: "Valhalla",
    avatar: "/images/salvador-medina.png",
    content: "La inteligencia artificial no es el futuro, es el presente. Desde Valhalla apostamos por MiHub como el epicentro de la innovación en Canarias, un lugar donde la IA y la estrategia empresarial convergen para transformar sectores enteros.",
    rating: 5
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-muted py-12 sm:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[480px] sm:min-h-[350px] md:min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-5 sm:p-8 md:p-10 transition-all duration-500",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0 z-10"
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-5 sm:gap-6 h-full">
                  <div className="flex flex-col items-center md:items-start shrink-0">
                    <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 mb-3 border-2 border-primary">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-primary font-medium">{testimonial.position}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-muted-foreground text-sm sm:text-base leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors shrink-0"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Testimonio anterior</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors shrink-0"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Siguiente testimonio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
