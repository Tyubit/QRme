'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server'
import { error } from 'console';

export async function login(payload: {
    email: string;
    password: string;
    }) {
    const supabase = await createClient()

    const data = {
    email: payload.email,
    password: payload.password,
    }

    const {data:signInData, error: signInError} = await supabase.auth.signInWithPassword(data)
    
    if (signInError || !signInData.user) {
        return;
    }
    
    const userId = signInData.user?.id

    const { data: userRow, error: userError } = await supabase
    .schema('public')
    .from('users')
    .select('public_id')
    .eq('id', userId)
    .single()

    console.log('user:', userRow)
    if (userError || !userRow) {
        return error;
    }

    redirect(`/user/${userRow.public_id}`)
}