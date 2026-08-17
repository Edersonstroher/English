-- ============================================================
-- SCHEMA DO SUPABASE — Sistema de Inglês
-- Cole este arquivo inteiro no SQL Editor do seu projeto Supabase
-- (Supabase > SQL Editor > New query > colar > Run)
-- ============================================================

-- 1. Perfis de usuário (um por conta, criado automaticamente no cadastro)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text not null,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Cria o perfil automaticamente quando alguém se cadastra
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', new.email));
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Progresso do aluno (uma linha por dia de lição, por tema)
create table if not exists public.progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  theme_id text not null,
  module_id text not null,
  day_id text not null,
  status text not null default 'locked' check (status in ('locked', 'unlocked', 'completed')),
  updated_at timestamptz default now(),
  unique (user_id, theme_id, module_id, day_id)
);

alter table public.progress enable row level security;

create policy "Users can view their own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users can insert their own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own progress"
  on public.progress for update
  using (auth.uid() = user_id);

-- 3. Resultados de quiz (histórico de tentativas)
create table if not exists public.quiz_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  theme_id text not null,
  module_id text not null,
  score int not null,
  total int not null,
  passed boolean not null,
  created_at timestamptz default now()
);

alter table public.quiz_results enable row level security;

create policy "Users can view their own quiz results"
  on public.quiz_results for select
  using (auth.uid() = user_id);

create policy "Users can insert their own quiz results"
  on public.quiz_results for insert
  with check (auth.uid() = user_id);

-- Pronto! As tabelas profiles, progress e quiz_results estão criadas
-- com RLS (Row Level Security) ativado — cada usuário só enxerga os
-- próprios dados, mesmo sendo o mesmo app para toda a família.
