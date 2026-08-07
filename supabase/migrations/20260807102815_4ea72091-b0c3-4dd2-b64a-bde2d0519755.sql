-- 1. Move the SECURITY DEFINER role helper out of the exposed public schema
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 2. Recreate policies without the public helper
DROP POLICY IF EXISTS "user_roles_admin_manage" ON public.user_roles;
DROP POLICY IF EXISTS "user_roles_select_authenticated" ON public.user_roles;
DROP POLICY IF EXISTS "profiles_select_authenticated" ON public.profiles;

DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

CREATE POLICY "user_roles_admin_manage"
ON public.user_roles
FOR ALL
TO authenticated
USING (private.has_role(auth.uid(), 'super_admin'::public.app_role))
WITH CHECK (private.has_role(auth.uid(), 'super_admin'::public.app_role));

CREATE POLICY "user_roles_select_own"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "profiles_select_own"
ON public.profiles
FOR SELECT
TO authenticated
USING (id = auth.uid() OR private.has_role(auth.uid(), 'super_admin'::public.app_role));