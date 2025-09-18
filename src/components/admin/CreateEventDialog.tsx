
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Upload, X } from 'lucide-react';

const eventTypes = [
  'Congreso', 'Taller', 'Workshop', 'Meetup', 'Seminario', 
  'Mesa Redonda', 'Conferencia', 'Hackathon', 'Cumbre', 'Foro', 'Festival'
];

interface CreateEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEventCreated: () => void;
}

const CreateEventDialog = ({ open, onOpenChange, onEventCreated }: CreateEventDialogProps) => {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: '',
    descripcion: '',
    fecha: '',
    lugar: '',
    capacidad: '',
    estado: 'abierto' as 'abierto' | 'cerrado',
  });
  const [additionalDates, setAdditionalDates] = useState<string[]>([]);
  const [newDate, setNewDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleAddDate = () => {
    if (newDate && !additionalDates.includes(newDate)) {
      setAdditionalDates([...additionalDates, newDate]);
      setNewDate('');
    }
  };

  const handleRemoveDate = (dateToRemove: string) => {
    setAdditionalDates(additionalDates.filter(date => date !== dateToRemove));
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `events/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('event-images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('event-images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Error',
        description: 'No se pudo subir la imagen',
        variant: 'destructive',
      });
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = null;
      if (imageFile) {
        imageUrl = await uploadImage();
        if (imageFile && !imageUrl) {
          setUploading(false);
          return;
        }
      }

      const eventData = {
        titulo: formData.titulo,
        tipo: formData.tipo as any,
        descripcion: formData.descripcion || null,
        fecha: formData.fecha,
        fechas_adicionales: additionalDates.length > 0 ? additionalDates : null,
        lugar: formData.lugar,
        capacidad: formData.capacidad ? parseInt(formData.capacidad) : null,
        imagen_url: imageUrl,
        estado: formData.estado as any,
      };

      const eventDataForDB = {
        title: formData.titulo,
        tipo: formData.tipo,
        description: formData.descripcion || '',
        fecha: formData.fecha,
        ubicacion: formData.lugar,
        asistentes: formData.capacidad || '0',
        image_url: imageUrl || '',
      };

      const { error } = await supabase
        .from('eventos_corporativos')
        .insert([eventDataForDB]);

      if (error) throw error;

      toast({
        title: 'Evento creado',
        description: 'El evento se ha creado correctamente',
      });

      onEventCreated();
      
      // Reset form
      setFormData({
        titulo: '',
        tipo: '',
        descripcion: '',
        fecha: '',
        lugar: '',
        capacidad: '',
        estado: 'abierto',
      });
      setAdditionalDates([]);
      setImageFile(null);
      
    } catch (error) {
      console.error('Error creating event:', error);
      toast({
        title: 'Error',
        description: 'No se pudo crear el evento',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Nuevo Evento</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="titulo">Título *</Label>
              <Input
                id="titulo"
                value={formData.titulo}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo *</Label>
              <Select 
                value={formData.tipo} 
                onValueChange={(value) => setFormData({ ...formData, tipo: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tipo" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fecha">Fecha Principal *</Label>
              <Input
                id="fecha"
                type="date"
                value={formData.fecha}
                onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lugar">Lugar *</Label>
              <Input
                id="lugar"
                value={formData.lugar}
                onChange={(e) => setFormData({ ...formData, lugar: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Fechas Adicionales</Label>
            <div className="flex gap-2">
              <Input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
              <Button type="button" onClick={handleAddDate} variant="outline">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
            {additionalDates.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {additionalDates.map((date, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {new Date(date).toLocaleDateString('es-ES')}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => handleRemoveDate(date)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="capacidad">Capacidad</Label>
              <Input
                id="capacidad"
                type="number"
                value={formData.capacidad}
                onChange={(e) => setFormData({ ...formData, capacidad: e.target.value })}
                placeholder="Número de asistentes"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="estado">Estado *</Label>
              <Select 
                value={formData.estado} 
                onValueChange={(value: 'abierto' | 'cerrado') => setFormData({ ...formData, estado: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abierto">Abierto</SelectItem>
                  <SelectItem value="cerrado">Cerrado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imagen">Imagen Destacada</Label>
            <Input
              id="imagen"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={uploading}>
              {uploading ? 'Creando...' : 'Crear Evento'}
              {uploading && <Upload className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventDialog;
