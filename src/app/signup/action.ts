'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'
export async function signup(payload: {
    email: string;
    password: string;
    name: string;
    company_name: string;
    phone_num: string;
    contact_email: string;
    website: string;
    }) {
    const supabase = await createClient()

    const { error, data } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
            data: {
                name: payload.name || '',
                company_name: payload.company_name || '',
                phone_num: payload.phone_num || '',
                contact_email: payload.contact_email || '',
                website: payload.website || '',
            }
        }
    });

    if (error) {
        return {
            status: error?.message,
            user: null
        }
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: "User already exist, please log in",
            user: null
        }
    }

    redirect('/login');

    return {
            status: "success",
            user: data.user
    }
}