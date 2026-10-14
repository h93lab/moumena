create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to authenticated;

create function private.is_portfolio_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from auth.users as member
    where member.id = (select auth.uid())
      and lower(member.email) = 'moumena94@gmail.com'
      and member.email_confirmed_at is not null
  );
$$;
revoke all on function private.is_portfolio_admin() from public, anon;
grant execute on function private.is_portfolio_admin() to authenticated;

create table public.site_content (
  id integer primary key check (id = 1),
  data jsonb not null default '{}'::jsonb check (jsonb_typeof(data) = 'object'),
  updated_at timestamptz not null default now()
);
alter table public.site_content enable row level security;
revoke all on public.site_content from anon, authenticated;
grant select on public.site_content to anon;
grant select, insert, update on public.site_content to authenticated;

create policy "Published portfolio content is readable"
on public.site_content for select to anon, authenticated
using (true);

create policy "Only the verified portfolio owner can create content"
on public.site_content for insert to authenticated
with check ((select private.is_portfolio_admin()));

create policy "Only the verified portfolio owner can edit content"
on public.site_content for update to authenticated
using ((select private.is_portfolio_admin()))
with check ((select private.is_portfolio_admin()));

insert into public.site_content (id, data) values (1, '{}'::jsonb)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio-media',
  'portfolio-media',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif']
)
on conflict (id) do nothing;

create policy "Portfolio media is publicly readable"
on storage.objects for select to anon, authenticated
using (bucket_id = 'portfolio-media');

create policy "Only the verified portfolio owner can upload media"
on storage.objects for insert to authenticated
with check (bucket_id = 'portfolio-media' and (select private.is_portfolio_admin()));

create policy "Only the verified portfolio owner can delete media"
on storage.objects for delete to authenticated
using (bucket_id = 'portfolio-media' and (select private.is_portfolio_admin()));
