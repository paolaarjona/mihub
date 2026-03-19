import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4">MiHub 3.0</h4>
            <p className="text-muted-foreground mb-4">
              MiHUB es un espacio de innovación impulsado por Fundación Martínez Abolafio, creado para potenciar la transformación y competitividad de las empresas canarias a través de la innovación, la sostenibilidad y la inteligencia artificial.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/mihub-hubdeinnovacion/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/marinainnovahub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                
                <span className="sr-only">X</span>
              </a>
              <a href="https://www.instagram.com/marinainnovahub/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[{
              name: "Inicio",
              path: "/"
            }, {
              name: "Servicios",
              path: "/servicios"
            }, {
              name: "Eventos Corporativos",
              path: "/eventos-corporativos"
            }, {
              name: "Galería",
              path: "/gallery"
            }, {
              name: "Contacto",
              path: "/contact"
            }].map((link) => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Av. Olof Palme, 35500 Arrecife, Las Palmas
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+34 928 60 72 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">hola@marinainnovahub.com</span>
              </li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} MiHub 3.0 - Fundación Martínez Abolafio</p>
            <p>Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="/quality-environment-policy" className="hover:text-primary transition-colors">Política de Calidad y Medio Ambiente</a>
            <a href="/legal-notice" className="hover:text-primary transition-colors">Aviso Legal</a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>;
}