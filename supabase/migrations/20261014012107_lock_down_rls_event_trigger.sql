-- The event trigger runs internally; public API roles need no direct access.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
