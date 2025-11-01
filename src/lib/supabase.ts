import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string;
  language: string;
  created_at: string;
  status: string;
  notes: string;
}
