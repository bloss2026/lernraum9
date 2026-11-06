create table if not exists public.learning_progress (
    user_id uuid not null references auth.users (id) on delete cascade,
    storage_key text not null check (
        storage_key in (
            'chemieLernState',
            'mathematikLearningState',
            'lernraumFachFortschritte'
        )
    ),
    value jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now(),
    primary key (user_id, storage_key)
);

alter table public.learning_progress enable row level security;

drop policy if exists "Users can read their own learning progress"
    on public.learning_progress;
create policy "Users can read their own learning progress"
    on public.learning_progress
    for select
    to authenticated
    using (auth.uid() = user_id);

drop policy if exists "Users can insert their own learning progress"
    on public.learning_progress;
create policy "Users can insert their own learning progress"
    on public.learning_progress
    for insert
    to authenticated
    with check (auth.uid() = user_id);

drop policy if exists "Users can update their own learning progress"
    on public.learning_progress;
create policy "Users can update their own learning progress"
    on public.learning_progress
    for update
    to authenticated
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

grant select, insert, update on public.learning_progress to authenticated;
revoke all on public.learning_progress from anon;
