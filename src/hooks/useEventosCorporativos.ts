import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface EventoCorporativo {
  id: string;
  title: string;
  description: string;
  fecha: string;
  ubicacion: string;
  asistentes: string;
  tipo: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export const useEventosCorporativos = () => {
  const [eventos, setEventos] = useState<EventoCorporativo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEventos = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('eventos_corporativos')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      
      setEventos(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching eventos');
      console.error('Error fetching eventos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  return { eventos, loading, error, refetch: fetchEventos };
};