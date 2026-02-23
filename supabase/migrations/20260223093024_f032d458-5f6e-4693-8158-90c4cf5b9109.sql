-- Delete all corporate entries and re-insert with the correct evento-*.jpeg files only
DELETE FROM public.galeria WHERE category = 'corporate';

INSERT INTO public.galeria (src_url, alt_text, category, overlay_text, overlay_number) VALUES
('/lovable-uploads/evento-1.jpeg', 'Evento corporativo - Conferencia', 'corporate', 'Conferencia', '01'),
('/lovable-uploads/evento-2.jpeg', 'Evento corporativo - Audiencia', 'corporate', 'Audiencia', '02'),
('/lovable-uploads/evento-3.jpeg', 'Evento corporativo - Turquois X Summit', 'corporate', 'Turquois X Summit', '03'),
('/lovable-uploads/evento-4.jpeg', 'Evento corporativo - Marina Innova Hub', 'corporate', 'Marina Innova Hub', '04'),
('/lovable-uploads/evento-5.jpeg', 'Evento corporativo - Kenneth Gasque', 'corporate', 'Kenneth Gasque', '05'),
('/lovable-uploads/evento-6.jpeg', 'Evento corporativo - Presentación', 'corporate', 'Presentación', '06'),
('/lovable-uploads/evento-7.jpeg', 'Evento corporativo - LIUX', 'corporate', 'LIUX', '07'),
('/lovable-uploads/evento-8.jpeg', 'Evento corporativo - Photocall', 'corporate', 'Photocall', '08'),
('/lovable-uploads/evento-9.jpeg', 'Evento corporativo - Foro Global Sur', 'corporate', 'Foro Global Sur', '09'),
('/lovable-uploads/evento-10.jpeg', 'Evento corporativo - Realidad Virtual', 'corporate', 'Realidad Virtual', '10');