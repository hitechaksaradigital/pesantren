import { createClient } from '@supabase/supabase-js'

// Nilai dari file .env (VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY)
const env = (typeof import.meta !== 'undefined' && import.meta.env) || {}

const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null
