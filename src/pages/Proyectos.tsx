import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Cog, Users, Leaf } from "lucide-react";
import ProjectDetailsDialog from "@/components/ProjectDetailsDialog";
import { useProyectos, type Proyecto } from "@/hooks/useProyectos";

// Helper function to get icon component by name
const getIconComponent = (iconName: string) => {
  const iconProps = "h-8 w-8 text-primary";
  switch (iconName) {
    case 'Leaf':
      return <Leaf className={iconProps} />;
    case 'Target':
      return <Target className={iconProps} />;
    case 'Lightbulb':
      return <Lightbulb className={iconProps} />;
    case 'Cog':
      return <Cog className={iconProps} />;
    case 'Users':
      return <Users className={iconProps} />;
    default:
      return <Lightbulb className={iconProps} />;
  }
};

// Transform Supabase data to component format
const transformProyecto = (proyecto: Proyecto) => ({
  id: proyecto.id,
  title: proyecto.title,
  description: proyecto.description,
  sector: proyecto.sector,
  duration: proyecto.duration,
  icon: getIconComponent(proyecto.icon_name),
  image: proyecto.image_url,
  videoUrl: proyecto.video_url
});

export default function Proyectos() {
  const { proyectos: proyectosData, loading, error } = useProyectos();
  const [selectedProject, setSelectedProject] = useState<ReturnType<typeof transformProyecto> | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proyectos = proyectosData.map(transformProyecto);

  const handleViewDetails = (project: ReturnType<typeof transformProyecto>) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 mb-4">Error al cargar proyectos: {error}</p>
            <Button onClick={() => window.location.reload()}>Reintentar</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 to-sea-light/20 pt-24 md:pt-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Nuestros Proyectos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                Innovación en Acción
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubre los proyectos de transformación e innovación que hemos desarrollado 
                junto a empresas canarias.
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proyectos.map((proyecto, index) => (
                <div 
                  key={proyecto.id}
                  className="glass-card rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={proyecto.image}
                      alt={proyecto.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {proyecto.icon}
                      </div>
                      <div>
                        <span className="text-sm text-primary font-medium">{proyecto.sector}</span>
                        <p className="text-sm text-muted-foreground">{proyecto.duration}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{proyecto.title}</h3>
                    <p className="text-muted-foreground mb-4">{proyecto.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleViewDetails(proyecto)}
                    >
                      Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Trabajamos contigo para convertir tu idea en un proyecto de innovación exitoso.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/enviar-proyecto">
                  Háblanos de tu proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Project Details Dialog */}
      <ProjectDetailsDialog 
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
}
