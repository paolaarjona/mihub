
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Corporate gallery images with uploaded photos
const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/78ba6e55-dae9-4003-989f-3363db5e1bb4.png",
    alt: "Sesión de trabajo corporativa",
    category: "corporate",
    overlayText: "Sesión Ejecutiva",
    overlayNumber: "01"
  },
  {
    id: 2,
    src: "/lovable-uploads/e816b84d-8bb4-4dcb-8ff8-1890007f2f2b.png",
    alt: "Sala de conferencias con presentación",
    category: "facilities",
    overlayText: "Sala de Conferencias",
    overlayNumber: "02"
  },
  {
    id: 3,
    src: "/lovable-uploads/9e9bb5ec-b534-4e38-8ae7-bf268f3dea96.png",
    alt: "Turquois X Summit - Evento corporativo",
    category: "corporate",
    overlayText: "Summit Empresarial",
    overlayNumber: "03"
  },
  {
    id: 4,
    src: "/lovable-uploads/6d1adf25-13a7-4f4a-9996-d84df66a855b.png",
    alt: "Auditorio moderno con vista al mar",
    category: "facilities",
    overlayText: "Auditorio Premium",
    overlayNumber: "04"
  },
  {
    id: 5,
    src: "/lovable-uploads/d8c267f0-576c-4b67-9305-04e5d526a4c5.png",
    alt: "Evento grupal corporativo",
    category: "corporate",
    overlayText: "Networking",
    overlayNumber: "05"
  },
  {
    id: 6,
    src: "/lovable-uploads/96e92929-3d87-421c-a905-c13f5a2e0cab.png",
    alt: "Pasillo de oficinas modernas",
    category: "facilities",
    overlayText: "Instalaciones",
    overlayNumber: "06"
  },
  {
    id: 7,
    src: "/lovable-uploads/41801f83-3b09-46f0-a8f4-bae721727b3e.png",
    alt: "Presentación corporativa",
    category: "corporate",
    overlayText: "Presentación",
    overlayNumber: "07"
  },
  {
    id: 8,
    src: "/lovable-uploads/c0eab749-1a46-4cc9-83f1-b732d1b187e2.png",
    alt: "Audiencia en evento corporativo",
    category: "corporate",
    overlayText: "Conferencia",
    overlayNumber: "08"
  },
  {
    id: 9,
    src: "/lovable-uploads/e8baac2f-b5bc-476e-b86b-52cf82e5f6a5.png",
    alt: "Auditorio MI HUB",
    category: "facilities",
    overlayText: "MI HUB",
    overlayNumber: "09"
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Galería Corporativa
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Descubre nuestros espacios de trabajo, tecnología y eventos corporativos
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "corporate", "facilities"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category === "all" 
                    ? "Todas" 
                    : category === "corporate" 
                      ? "Eventos Corporativos" 
                      : "Instalaciones"}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with number and text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    {/* Number in top-left corner */}
                    <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-md text-sm font-medium">
                      {image.overlayNumber}
                    </div>
                    
                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-sm bg-black/40 backdrop-blur-sm px-3 py-2 rounded-md inline-block">
                        {image.overlayText}
                      </p>
                      <p className="text-white/80 text-xs mt-1">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden relative">
              {filteredImages.find(img => img.id === selectedImage) && (
                <>
                  <img 
                    src={filteredImages.find(img => img.id === selectedImage)?.src} 
                    alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  {/* Overlay info in lightbox */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    <span className="font-medium text-lg mr-3">
                      {filteredImages.find(img => img.id === selectedImage)?.overlayNumber}
                    </span>
                    <span className="text-sm">
                      {filteredImages.find(img => img.id === selectedImage)?.overlayText}
                    </span>
                  </div>
                </>
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
