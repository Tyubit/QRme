
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = async () => {
  const cookieStore = await cookies();
  return createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          // Convert all cookies to the format Supabase expects
          return cookieStore.getAll().map(c => ({
            name: c.name,
            value: c.value,
            options: {}, // you can optionally set options if needed
          }));
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Ignore if called from a Server Component
          }
        },
      },
    },
  );
};

export const getCurrentUser = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    // Only log if it's not just a missing session
    if (error.message !== 'Auth session missing!') {
      console.error('Error fetching user:', error.message)
    }
    return null
  }

  return data.user
}