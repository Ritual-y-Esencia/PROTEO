-- ============================================================
-- 008 · quote_requests
-- ------------------------------------------------------------
-- Solicitudes de cotización / contacto desde catálogo y landing.
-- Insert público (anon); lectura solo via service_role (sin policy SELECT).
-- ============================================================

create table if not exists public.quote_requests (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  company      text,
  audience     text,
  product_id   text,
  volume       text,
  message      text,
  source       text,
  created_at   timestamptz not null default now()
);

comment on table public.quote_requests is 'Solicitudes de cotización y contacto comercial PROTEO.';

create index if not exists quote_requests_created_at_idx
  on public.quote_requests (created_at desc);

alter table public.quote_requests enable row level security;

drop policy if exists "quote_requests_insert_public" on public.quote_requests;
create policy "quote_requests_insert_public"
  on public.quote_requests for insert
  to anon, authenticated
  with check (true);
