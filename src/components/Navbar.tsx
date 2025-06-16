
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
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHomePage
          ? "bg-white/95 dark:bg-card/95 backdrop-blur-lg py-2 md:py-3 shadow-md" 
          : "bg-transparent py-3 md:py-5"
      )}>
        <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LanguageSelector />
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <ul className="hidden lg:flex space-x-4 xl:space-x-6">
            {navLinks.map(link => (
              <li key={link.name} className="relative">
                <Link 
                  to={link.path} 
                  className={cn(
                    "font-medium transition-colors hover:text-primary text-sm xl:text-base",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                    "active:text-white",
                    !isHomePage
                      ? "text-gray-700 dark:text-foreground" 
                      : scrolled 
                        ? "text-blue-600 dark:text-foreground" 
                        : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Theme Toggle - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation - Visible only on mobile and tablet */}
          <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={cn(
                "rounded-full h-8 w-8 sm:h-10 sm:w-10",
                !isHomePage
                  ? "text-gray-700 dark:text-foreground hover:bg-accent"
                  : scrolled 
                    ? "text-foreground hover:bg-accent" 
                    : "text-white hover:text-white hover:bg-white/10"
              )}
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Now outside the header for better positioning */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-card/95 backdrop-blur-sm shadow-xl p-4 sm:p-6 border-l">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
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
              <ul className="space-y-3 sm:space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="block text-base sm:text-lg font-medium transition-colors hover:text-primary py-2 active:text-white" 
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
