import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

/**
 * Creates and exports a single Supabase client instance. The credentials
 * (URL and anon key) are injected from expo config at build time. This
 * module can be imported anywhere in the app to make queries against the
 * Supabase Postgres database or handle authentication.
 */
const { supabaseUrl, supabaseAnonKey } = (Constants as any).manifest?.extra ?? {};

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are not set. Check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
