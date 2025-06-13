
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Maximize2 } from "lucide-react";

export interface ApartmentProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  location: string;
  features: string[];
}

interface ApartmentCardProps {
  apartment: ApartmentProps;
  hidePrice?: boolean;
}

export default function ApartmentCard({ apartment, hidePrice = false }: ApartmentCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card border border-border">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={apartment.image} 
            alt={apartment.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              {apartment.location}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {apartment.name}
          </h3>
          {!hidePrice && (
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">
                {apartment.price === 0 ? "Consultar" : `€${apartment.price}`}
              </p>
              <p className="text-sm text-muted-foreground">por sesión</p>
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {apartment.description}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{apartment.capacity} Participantes</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 className="h-4 w-4" />
            <span>{apartment.size} m²</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {apartment.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {apartment.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{apartment.features.length - 3} más
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full btn-primary">
          Ver Detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
