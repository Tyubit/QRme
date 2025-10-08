'use server'

import { createClient } from "./server"

export async function isLoggedIn(): Promise<boolean> {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    return !!data.user
}

export async function getLoggedInUser() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    return data.user
}