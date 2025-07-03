
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit, Trash2, Calendar, MapPin, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import EditEventDialog from './EditEventDialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

type Event = Tables<'eventos'>;

interface EventsListProps {
  onEventUpdated: () => void;
}

const EventsList = ({ onEventUpdated }: EventsListProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const { toast } = useToast();

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los eventos',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventId: string) => {
    try {
      const { error } = await supabase
        .from('eventos')
        .delete()
        .eq('id', eventId);

      if (error) throw error;

      toast({
        title: 'Evento eliminado',
        description: 'El evento se ha eliminado correctamente',
      });

      fetchEvents();
      onEventUpdated();
    } catch (error) {
      console.error('Error deleting event:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar el evento',
        variant: 'destructive',
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-8">
        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No hay eventos creados
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Comienza creando tu primer evento usando el botón "Nuevo Evento"
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-lg mb-2">{event.titulo}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{event.tipo}</Badge>
                  <Badge variant={event.estado === 'abierto' ? 'default' : 'destructive'}>
                    {event.estado === 'abierto' ? 'Abierto' : 'Cerrado'}
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditingEvent(event)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Eliminar evento?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. El evento será eliminado permanentemente.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDeleteEvent(event.id)}>
                        Eliminar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {formatDate(event.fecha)}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {event.lugar}
              </div>
              {event.capacidad && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {event.capacidad} asistentes
                </div>
              )}
            </div>
            {event.descripcion && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {event.descripcion}
              </p>
            )}
            {event.fechas_adicionales && event.fechas_adicionales.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Fechas adicionales:</p>
                <div className="flex flex-wrap gap-2">
                  {event.fechas_adicionales.map((fecha, index) => (
                    <Badge key={index} variant="outline">
                      {formatDate(fecha)}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {editingEvent && (
        <EditEventDialog
          event={editingEvent}
          open={!!editingEvent}
          onOpenChange={() => setEditingEvent(null)}
          onEventUpdated={() => {
            fetchEvents();
            onEventUpdated();
            setEditingEvent(null);
          }}
        />
      )}
    </div>
  );
};

export default EventsList;
