'use server'
import UserPageClient from '@/components/UserPageClient'

import { createClient, getCurrentUser } from '../../../../utils/supabase/server'

interface Props {
    params: Promise<{ id: string }>
}

export default async function UserPage({ params }: Props) {

    const supabase = await createClient()
    const currentUser = await getCurrentUser();
    const { id } = await params 

    const { data, error } = await supabase
        .from('users_view')
        .select('*')
        .eq('public_id', id)
        .single()
    
    if (!data) return <p>User not found</p>
    
    const canEdit = currentUser?.id === data.id

    return <UserPageClient user={data} canEdit ={canEdit} />
};