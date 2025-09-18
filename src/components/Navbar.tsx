
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isHomePage = location.pathname === "/";
  
  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.apartments, path: "/servicios" },
    { name: "Sobre miHUB", path: "/sobre-mihub" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Eventos Corporativos", path: "/eventos-corporativos" },
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-card shadow-sm border-b border-gray-100 dark:border-gray-800">
        <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8c9fa48a-6ac2-4067-b2a7-ba2d9f0cb897.png" 
                alt="MIHUB Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-gray-700 dark:text-foreground font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right section with controls */}
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile Navigation - Visible only on mobile and tablet */}
            <div className="lg:hidden flex items-center space-x-2">
              <LanguageSelector />
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10 text-gray-700 dark:text-foreground hover:bg-accent"
              >
                {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-0 bg-white dark:bg-card p-4 sm:p-6 lg:hidden">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <img 
                  src="/lovable-uploads/8c9fa48a-6ac2-4067-b2a7-ba2d9f0cb897.png" 
                  alt="MIHUB Logo" 
                  className="h-6 w-auto"
                />
                <div className="flex items-center space-x-2">
                  <div className="sm:hidden">
                    <ThemeToggle />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
              <ul className="space-y-4 sm:space-y-6 flex-1">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="block text-lg sm:text-xl font-medium transition-colors hover:text-primary py-3 text-gray-900 dark:text-foreground border-b border-gray-200 dark:border-gray-700 uppercase tracking-wide" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
