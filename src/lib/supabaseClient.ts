

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://idffaystvefjlmvbnemj.supabase.co'; // Your Supabase URL here
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZmZheXN0dmVmamxtdmJuZW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMTkzNzAsImV4cCI6MjA2OTY5NTM3MH0.QRmMpvwtwQ6nOyQvy95JSHR0Q6Zt-8penZYiQAYMX1M'; // Your anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

