-- Create projects table
CREATE TABLE public.proyectos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sector TEXT NOT NULL,
  duration TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create corporate events table
CREATE TABLE public.eventos_corporativos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  fecha TEXT NOT NULL,
  ubicacion TEXT NOT NULL,
  asistentes TEXT NOT NULL,
  tipo TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create gallery table
CREATE TABLE public.galeria (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  src_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('corporate', 'facilities')),
  overlay_text TEXT NOT NULL,
  overlay_number TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.proyectos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.eventos_corporativos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.galeria ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since these are public-facing pages)
CREATE POLICY "Allow public read access to proyectos" ON public.proyectos
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to eventos_corporativos" ON public.eventos_corporativos
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to galeria" ON public.galeria
  FOR SELECT USING (true);

-- Insert existing projects data
INSERT INTO public.proyectos (title, description, sector, duration, icon_name, image_url, video_url) VALUES
  ('Turismo Sostenible', 'Desarrollo de plataforma integral para promocionar el turismo responsable y sostenible en las Islas Canarias.', 'Turismo', '8 meses', 'Leaf', '/lovable-uploads/2d8419bb-0d47-4752-a640-3e75fc002558.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
  ('Transformación Digital Hotelera', 'Implementación de sistema de IA para optimización de reservas y experiencia del huésped.', 'Turismo', '6 meses', 'Target', '/lovable-uploads/c8efb453-1a7d-43ee-b27f-4fe21a896ea4.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
  ('Digital Island', 'Viajes de formación corporativa en innovación e IA para compañías.', 'Empresas y Emprendedores', '12 meses', 'Lightbulb', '/lovable-uploads/45e716e4-635c-49f9-9440-14d33ccfe483.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
  ('Oficinas IA', 'Proyecto de Industry 4.0 con implementación de IoT y análisis predictivo.', 'Empresas e Instituciones', '9 meses', 'Cog', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
  ('Detección de Retos', 'Programa de detección de retos de innovación y casos de uso IA.', 'Ayuntamientos y Empresas', '18 meses', 'Users', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

-- Insert existing gallery data
INSERT INTO public.galeria (src_url, alt_text, category, overlay_text, overlay_number) VALUES
  ('/lovable-uploads/78ba6e55-dae9-4003-989f-3363db5e1bb4.png', 'Sesión de trabajo corporativa', 'corporate', 'Sesión Ejecutiva', '01'),
  ('/lovable-uploads/e816b84d-8bb4-4dcb-8ff8-1890007f2f2b.png', 'Sala de conferencias con presentación', 'facilities', 'Sala de Conferencias', '02'),
  ('/lovable-uploads/9e9bb5ec-b534-4e38-8ae7-bf268f3dea96.png', 'Turquois X Summit - Evento corporativo', 'corporate', 'Summit Empresarial', '03'),
  ('/lovable-uploads/6d1adf25-13a7-4f4a-9996-d84df66a855b.png', 'Auditorio moderno con vista al mar', 'facilities', 'Auditorio Premium', '04'),
  ('/lovable-uploads/d8c267f0-576c-4b67-9305-04e5d526a4c5.png', 'Evento grupal corporativo', 'corporate', 'Networking', '05'),
  ('/lovable-uploads/96e92929-3d87-421c-a905-c13f5a2e0cab.png', 'Pasillo de oficinas modernas', 'facilities', 'Instalaciones', '06'),
  ('/lovable-uploads/41801f83-3b09-46f0-a8f4-bae721727b3e.png', 'Presentación corporativa', 'corporate', 'Presentación', '07'),
  ('/lovable-uploads/c0eab749-1a46-4cc9-83f1-b732d1b187e2.png', 'Audiencia en evento corporativo', 'corporate', 'Conferencia', '08'),
  ('/lovable-uploads/e8baac2f-b5bc-476e-b86b-52cf82e5f6a5.png', 'Auditorio MI HUB', 'facilities', 'MI HUB', '09');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_proyectos_updated_at
  BEFORE UPDATE ON public.proyectos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_eventos_corporativos_updated_at
  BEFORE UPDATE ON public.eventos_corporativos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_galeria_updated_at
  BEFORE UPDATE ON public.galeria
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();