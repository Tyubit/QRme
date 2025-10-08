'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
export async function updateInfo(payload: {
    user_id: string;
    name: string;
    company_name: string;
    phone_num: string;
    contact_email: string;
    website: string;
    socials: Array<string>;
    }) {
    const supabase = await createClient()

    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return { status: 'error', message: 'Not authenticated' }
    }

    const { data, error } = await supabase
    .from('users')
    .update({
        name: payload.name,
        company_name: payload.company_name,
        phone_num: payload.phone_num,
        cont_email: payload.contact_email,
        website: payload.website,
        socials: payload.socials,
        updated_at: new Date().toISOString()
    })
    .eq('id', user.id)
    .select()
    .single()

    if (error) {
        return {
            status: error?.message,
            user: null
        }
    };
    
    return {
        status: "success",
    }
}