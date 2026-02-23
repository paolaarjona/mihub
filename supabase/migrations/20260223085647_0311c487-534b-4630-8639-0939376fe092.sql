
-- Update existing facilities images with the new ones
UPDATE galeria SET 
  src_url = '/lovable-uploads/instalaciones-002.jpg',
  alt_text = 'Terraza con vistas al mar y zona lounge',
  overlay_text = 'Zona Lounge'
WHERE id = '858fcbf0-a2b5-47b5-bd11-1c2fb4901637';

UPDATE galeria SET 
  src_url = '/lovable-uploads/instalaciones-003.jpg',
  alt_text = 'Terraza interior con bar y vistas panorámicas',
  overlay_text = 'Terraza Interior'
WHERE id = 'a82d082e-515d-414d-839c-30e35431c135';

UPDATE galeria SET 
  src_url = '/lovable-uploads/instalaciones-004.jpg',
  alt_text = 'Sala con vistas al puerto y zona de reuniones',
  overlay_text = 'Sala con Vistas'
WHERE id = 'f48a8713-2ca7-4bd3-a197-ebb3bc95eb05';

UPDATE galeria SET 
  src_url = '/lovable-uploads/instalaciones-005.jpg',
  alt_text = 'Recepción circular con iluminación premium',
  overlay_text = 'Recepción'
WHERE id = '337fcdc7-6ea2-434c-847c-35a0822909ae';

-- Insert new facility images
INSERT INTO galeria (src_url, alt_text, category, overlay_text, overlay_number) VALUES
  ('/lovable-uploads/instalaciones-006.jpg', 'Recepción amplia con diseño minimalista', 'facilities', 'Hall Principal', '10'),
  ('/lovable-uploads/instalaciones-007.jpg', 'Pasillo de salas con iluminación cenital', 'facilities', 'Pasillo Salas', '11'),
  ('/lovable-uploads/instalaciones-011.jpg', 'Sala de reuniones con vistas al puerto deportivo', 'facilities', 'Sala Puerto', '12'),
  ('/lovable-uploads/instalaciones-013.jpg', 'Espacio de coworking con paredes de vidrio', 'facilities', 'Coworking', '13'),
  ('/lovable-uploads/instalaciones-017.jpg', 'Sala de reuniones ejecutiva con pantalla grande', 'facilities', 'Sala Ejecutiva', '14');
