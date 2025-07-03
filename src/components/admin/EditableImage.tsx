
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Upload, Edit2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onImageChange: (newSrc: string) => void;
  editMode?: boolean;
}

const EditableImage = ({ 
  src, 
  alt, 
  className = '', 
  onImageChange, 
  editMode = false 
}: EditableImageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState(src);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `admin-uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('event-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('event-images')
        .getPublicUrl(filePath);

      setNewImageUrl(publicUrl);
      toast({
        title: 'Imagen subida',
        description: 'La imagen se ha subido correctamente',
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Error',
        description: 'No se pudo subir la imagen',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSave = () => {
    onImageChange(newImageUrl);
    setIsEditing(false);
    toast({
      title: 'Imagen actualizada',
      description: 'Los cambios se han guardado correctamente',
    });
  };

  if (!editMode) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <div className="group relative">
      <img 
        src={src} 
        alt={alt} 
        className={`${className} ${editMode ? 'hover:opacity-75 transition-opacity' : ''}`}
      />
      {editMode && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded">
          <Dialog open={isEditing} onOpenChange={setIsEditing}>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary">
                <Edit2 className="h-4 w-4 mr-2" />
                Editar Imagen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar Imagen</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subir nueva imagen
                  </label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={uploading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    O usar URL de imagen
                  </label>
                  <Input
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                </div>

                {newImageUrl && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Vista previa
                    </label>
                    <img 
                      src={newImageUrl} 
                      alt="Vista previa" 
                      className="max-w-full h-32 object-cover rounded"
                    />
                  </div>
                )}

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} disabled={uploading}>
                    <Save className="h-4 w-4 mr-2" />
                    {uploading ? 'Subiendo...' : 'Guardar'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default EditableImage;
