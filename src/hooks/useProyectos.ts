import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Proyecto {
  id: string;
  title: string;
  description: string;
  sector: string;
  duration: string;
  icon_name: string;
  image_url: string;
  video_url?: string;
  created_at: string;
  updated_at: string;
}

export const useProyectos = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProyectos = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('proyectos')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      
      setProyectos(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching proyectos');
      console.error('Error fetching proyectos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  return { proyectos, loading, error, refetch: fetchProyectos };
};