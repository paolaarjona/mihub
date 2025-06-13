
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      logo: "https://www.mahou-sanmiguel.com/images/logos/mahou-san-miguel.svg",
      description: "Colaboración en proyectos de innovación en el sector alimentario."
    },
    {
      name: "Air Europa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_Europa_Logo.svg/2560px-Air_Europa_Logo.svg.png",
      description: "Innovación en el sector del transporte aéreo y turismo."
    },
    {
      name: "Telefónica",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Telefonica_logo.svg/2560px-Telefonica_logo.svg.png",
      description: "Alianza en telecomunicaciones y transformación digital."
    },
    {
      name: "El Corte Inglés",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/El_Corte_Ingl%C3%A9s_logo.svg/2560px-El_Corte_Ingl%C3%A9s_logo.svg.png",
      description: "Innovación en retail y experiencia de cliente."
    },
    {
      name: "Globant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Globant_logo.svg/2560px-Globant_logo.svg.png",
      description: "Partner tecnológico en desarrollo de software y AI."
    },
    {
      name: "WOW",
      logo: "https://via.placeholder.com/200x80/1E88E5/FFFFFF?text=WOW",
      description: "Colaboración en proyectos de innovación tecnológica."
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
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group glass-card p-6 rounded-xl flex flex-col items-center text-center animate-fade-in hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-full h-16 mb-4 flex items-center justify-center">
                      <img 
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform"
                        style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(203deg) brightness(104%) contrast(97%)' }}
                      />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground">{partner.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
