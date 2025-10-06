import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ProyectoDetails {
  id: string | number;
  name: string;
  codigo?: string;
  descripcion: string;
  objetivos: string[];
  pilarEstrategico?: string;
  estado: string;
  importe?: string;
  duracion: string;
  palabrasClave: string[];
  entidadLider?: string;
}

interface ProyectoDetailsDialogProps {
  proyecto: ProyectoDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProyectoDetailsDialog({ proyecto, isOpen, onClose }: ProyectoDetailsDialogProps) {
  const navigate = useNavigate();
  
  if (!proyecto) return null;

  const handleRequestInfo = () => {
    onClose();
    navigate('/contact', { state: { proyecto: proyecto.name, codigo: proyecto.codigo } });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{proyecto.name}</DialogTitle>
          {proyecto.codigo && (
            <DialogDescription className="text-sm font-mono text-muted-foreground">
              {proyecto.codigo}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Descripción */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Descripción</h3>
            <p className="text-muted-foreground">{proyecto.descripcion}</p>
          </div>

          <Separator />

          {/* Objetivos */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Objetivos</h3>
            <ul className="space-y-2">
              {proyecto.objetivos.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{objetivo}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Información del proyecto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proyecto.estado && (
              <div>
                <h4 className="font-semibold mb-1">Estado</h4>
                <Badge variant="secondary">{proyecto.estado}</Badge>
              </div>
            )}
            
            {proyecto.duracion && (
              <div>
                <h4 className="font-semibold mb-1">Duración</h4>
                <p className="text-muted-foreground">{proyecto.duracion}</p>
              </div>
            )}
            
            {proyecto.importe && (
              <div>
                <h4 className="font-semibold mb-1">Importe</h4>
                <p className="text-muted-foreground">{proyecto.importe}</p>
              </div>
            )}
            
            {proyecto.entidadLider && (
              <div>
                <h4 className="font-semibold mb-1">Entidad Líder</h4>
                <p className="text-muted-foreground">{proyecto.entidadLider}</p>
              </div>
            )}
            
            {proyecto.pilarEstrategico && (
              <div className="md:col-span-2">
                <h4 className="font-semibold mb-1">Pilar Estratégico</h4>
                <p className="text-muted-foreground">{proyecto.pilarEstrategico}</p>
              </div>
            )}
          </div>

          <Separator />

          {/* Palabras clave */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Palabras Clave</h3>
            <div className="flex flex-wrap gap-2">
              {proyecto.palabrasClave.map((palabra, index) => (
                <Badge key={index} variant="outline" className="bg-primary/5">
                  {palabra}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Botón de solicitar información */}
          <div className="flex justify-center pt-2">
            <Button 
              onClick={handleRequestInfo}
              size="lg"
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicitar más información
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
