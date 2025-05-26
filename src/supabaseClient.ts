import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://wyxunehbvnomqpmxkiuz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHVuZWhidm5vbXFwbXhraXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjIwNTIsImV4cCI6MjA2MzgzODA1Mn0.WkHqBw4NypN-B80S4ouEbqb78ERRsU5Tr37Uddl4TLw"
export const supabase = createClient(supabaseUrl, supabaseAnonKey)