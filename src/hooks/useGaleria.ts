import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface GaleriaItem {
  id: string;
  src_url: string;
  alt_text: string;
  category: string;
  overlay_text: string;
  overlay_number: string;
  created_at: string;
  updated_at: string;
}

export const useGaleria = () => {
  const [galeria, setGaleria] = useState<GaleriaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGaleria = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('galeria')
        .select('*')
        .order('overlay_number', { ascending: true });

      if (error) throw error;
      
      setGaleria(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching galeria');
      console.error('Error fetching galeria:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGaleria();
  }, []);

  return { galeria, loading, error, refetch: fetchGaleria };
};