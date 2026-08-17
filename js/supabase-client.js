// ============================================================
// SUPABASE-CLIENT.JS
// Preencha com os dados do SEU projeto Supabase.
// Encontra em: Supabase > Project Settings > API
// ============================================================

const SUPABASE_URL = "COLE_AQUI_A_SUA_SUPABASE_URL";
const SUPABASE_ANON_KEY = "COLE_AQUI_A_SUA_SUPABASE_ANON_KEY";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
