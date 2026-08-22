import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://paiyvbjgkjmibxfdorpo.supabase.co";
const supabaseAnonKey = "sb_publishable_MuH5bFSZ2JfwBKMbPJaJ2Q_SXq3RA4I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);