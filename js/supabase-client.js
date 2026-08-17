// ============================================================
// SUPABASE-CLIENT.JS
// Preencha com os dados do SEU projeto Supabase.
// Encontra em: Supabase > Project Settings > API
// ============================================================

const SUPABASE_URL = "https://sxmcoroallwsjqhkvqns.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_secret_mRya6kcSyKhmDPVt5pntKg_XaNzvr0j";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
