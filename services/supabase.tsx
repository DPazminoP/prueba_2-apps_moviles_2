import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://ozmfiuywnlffkqklfcld.supabase.co', 
    'sb_publishable_0dWuANsF96O9AB9CEwocgw_tTeU4BIj')