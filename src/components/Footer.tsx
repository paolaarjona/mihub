
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4">miHUB 3.0</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/mihub-hubdeinnovacion/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/marinainnovahub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <img 
                  src="/lovable-uploads/x-logo-new.png" 
                  alt="X" 
                  className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" 
                />
                <span className="sr-only">X (formerly Twitter)</span>
              </a>
              <a 
                href="https://www.instagram.com/marinainnovahub/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.instagram.com/marinainnovahub/', '_blank', 'noopener,noreferrer');
                }}
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.apartments, path: "/servicios" },
                { name: "Sobre miHUB", path: "/sobre-mihub" },
                { name: "Proyectos", path: "/proyectos" },
                { name: "Eventos Corporativos", path: "/eventos-corporativos" },
                { name: t.nav.gallery, path: "/gallery" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Marina de Lanzarote<br />
                  Edificio miHUB 3.0<br />
                  35500 Arrecife, Lanzarote<br />
                  Islas Canarias, España
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+34 928 607 267</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">hola@marinainnovahub.com</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.newsletter}</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t.footer.yourEmail} 
                className="rounded-md px-4 py-2 bg-muted text-foreground"
                required 
              />
              <button 
                type="submit" 
                className="btn-primary mt-2"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} miHUB 3.0 - Grupo Martínez Abolafio.</p>
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
    </footer>
  );
}
