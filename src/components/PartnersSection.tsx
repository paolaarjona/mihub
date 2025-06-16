
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnersSection() {
  const { t } = useLanguage();
  
  const partners = [
    {
      name: "Santander",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png",
      description: "Socio estratégico en innovación financiera y transformación digital."
    },
    {
      name: "Oracle",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
      description: "Partner tecnológico para certificaciones y soluciones cloud empresariales."
    },
    {
      name: "Mahou San Miguel",
      logo: "/lovable-uploads/276374da-0d59-475f-a367-31c4d70254ef.png",
      description: "Colaboración en proyectos de innovación en el sector alimentario."
    },
    {
      name: "Air Europa",
      logo: "/lovable-uploads/0d3881b6-21dd-44b4-994d-4e5b3e95f167.png",
      description: "Innovación en el sector del transporte aéreo y turismo."
    },
    {
      name: "Telefónica",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Telefonica_logo.svg/2560px-Telefonica_logo.svg.png",
      description: "Alianza en telecomunicaciones y transformación digital."
    },
    {
      name: "Globant",
      logo: "/lovable-uploads/4476364e-39ef-4c2e-9a79-80c2f553dcc2.png",
      description: "Partner tecnológico en desarrollo de software y AI."
    }
  ];
  
  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Nuestro Ecosistema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Partners Estratégicos
          </h2>
          <p className="text-muted-foreground">
            Colaboramos con las empresas más innovadoras del panorama nacional e internacional para ofrecerte las mejores oportunidades de crecimiento.
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              containScroll: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group glass-card p-4 md:p-6 rounded-xl flex flex-col items-center text-center animate-fade-in hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-full h-12 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                      <img 
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 text-xs md:text-sm">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground hidden md:block">{partner.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Flechas direccionales con mejor visibilidad */}
            <CarouselPrevious className="flex md:flex -left-4 md:-left-12 bg-white/90 hover:bg-white shadow-lg border-primary/20 text-primary hover:text-primary">
              <ChevronLeft className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="flex md:flex -right-4 md:-right-12 bg-white/90 hover:bg-white shadow-lg border-primary/20 text-primary hover:text-primary">
              <ChevronRight className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
          
          {/* Indicador de dirección para móviles */}
          <div className="flex md:hidden justify-center mt-4 text-xs text-muted-foreground">
            <span className="flex items-center">
              <ChevronLeft className="h-3 w-3 mr-1" />
              Desliza para ver más partners
              <ChevronRight className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres formar parte de nuestro ecosistema de partners?
          </p>
          <button className="btn-primary">
            Conviértete en Partner
          </button>
        </div>
      </div>
    </section>
  );
}
