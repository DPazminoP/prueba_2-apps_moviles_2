import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://hdreinxwdbkglzzfzhgd.supabase.co', 
    'sb_publishable_L9I96RGY-asKAVlcYsauDA_d6TL1cD8')