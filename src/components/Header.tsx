'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

import { IoMdExit } from "react-icons/io";

import { isLoggedIn } from '@/utils/supabase/checkAuth'
import { SimpleButton } from './Buttons';


interface Props {
  loggedIn: boolean
}

const Header = ({ loggedIn }: Props) => {
    const supabase = createClient()
    const router = useRouter()

    const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh() // refresh to update UI (or use router.push('/login'))
    }
    
return (
<header className='flex justify-between py-3 px-5'>
    <h1 className='text-2xl font-extrabold'><a href="/">QRme</a></h1>
        {loggedIn ? (
            <div className='flex items-center gap-4'>
                <a href="/user">Profile</a>
                <SimpleButton className='p-1.5 border-1 border-gray-400 rounded-full' onClick={handleSignOut}><IoMdExit className='text-red-700'/></SimpleButton>
            </div>
    ) : (
        <a href="/login">Signin/Signup</a>
    )}
</header>
)}

export default Header