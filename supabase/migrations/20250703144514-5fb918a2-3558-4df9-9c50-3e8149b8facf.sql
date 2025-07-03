
-- Crear una función que asigne automáticamente el rol de admin a emails específicos
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
DECLARE
    admin_emails text[] := ARRAY[
        'paolaarjona@thevalhalla.com',
        'marisol.gonzalez@martinezabolafio.com', 
        'juanluis.quincoces@marinainnovahub.com',
        'anayare.rodriguez@martinezabolafio.com'
    ];
BEGIN
    -- Insertar perfil como siempre
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        new.id,
        new.email,
        COALESCE(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1))
    );
    
    -- Verificar si el email está en la lista de administradores
    IF new.email = ANY(admin_emails) THEN
        -- Asignar rol de administrador
        INSERT INTO public.user_roles (user_id, role)
        VALUES (new.id, 'admin');
    ELSE
        -- Asignar rol de usuario normal
        INSERT INTO public.user_roles (user_id, role)
        VALUES (new.id, 'user');
    END IF;
    
    RETURN new;
END;
$$;
