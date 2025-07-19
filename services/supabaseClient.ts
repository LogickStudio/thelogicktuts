import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = 'https://cpgimpzdbyoxrsfvntry.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZ2ltcHpkYnlveHJzZnZudHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTA1NjEsImV4cCI6MjA2ODQyNjU2MX0.sZVzz24nGPpUeTkU-mxD5kGzvMOZ9ATYSfpmahFgAzQ';

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or Anon Key is missing. Make sure they are hardcoded in services/supabaseClient.ts.");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
