'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'
export async function signup(formData: FormData) {
    const supabase = await createClient()
//   // type-casting here for convenience
//     // in practice, you should validate your inputs
    const credentials = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
    }

    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        // options: {
        //     data: {
        //         name: credentials.name
        //     }
        // }
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

    return {
            status: "success",
            user: data.user
    }
}