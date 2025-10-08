'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function UserRootPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        // Not logged in → redirect to login page
        redirect('/login')
    }

    const { data: userRow, error } = await supabase
    .from('users')
    .select('public_id')
    .eq('id', user.id)
    .single()
    
    // Logged in → redirect to /user/{id} or public_id
    redirect(`/user/${userRow?.public_id}`)
}