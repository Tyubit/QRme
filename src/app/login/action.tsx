'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    }

    const {data:signInData, error } = await supabase.auth.signInWithPassword(data)
    
    const userId = signInData.user?.id
    console.log('Supabase Auth user id:', userId)

    
    const { data: userRow, error: userError } = await supabase
    .schema('public')
    .from('users')
    .select('public_id')
    .eq('id', userId) // link to Supabase Auth UUID
    .single()

    console.log('user:', userRow)
    if (userError || !userRow) {
        console.error('Error fetching public_id:', userError)
        // redirect('/error')
    }

    // ✅ Redirect using `public_id` instead of `user.id`
    if(userError || !userRow)
        redirect(`/login/`)
    redirect(`/user/${userId}`)
}