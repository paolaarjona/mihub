
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.apartments, path: "/apartments" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Eventos Corporativos", path: "/eventos-corporativos" },
    { name: t.nav.amenities, path: "/amenities" },
    { name: t.nav.gallery, path: "/gallery" },
    { name: t.nav.contact, path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/90 dark:bg-card/90 backdrop-blur-lg py-2 md:py-3 shadow-md" 
        : "bg-transparent py-3 md:py-5"
    )}>
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LanguageSelector />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map(link => (
            <li key={link.name} className="relative">
              <Link 
                to={link.path} 
                className={cn(
                  "font-medium transition-colors hover:text-primary text-sm xl:text-base",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="btn-primary text-sm xl:text-base px-4 xl:px-6">
            <Link to="/booking">{t.nav.bookNow}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={cn(
              "rounded-full h-10 w-10",
              scrolled ? "text-foreground hover:bg-accent" : "text-white hover:text-white hover:bg-white/10"
            )}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 w-full max-w-xs bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-center mb-8">
                <LanguageSelector />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="rounded-full h-10 w-10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="block text-lg font-medium transition-colors hover:text-primary py-2" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button asChild className="w-full btn-primary mt-6">
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.bookNow}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
