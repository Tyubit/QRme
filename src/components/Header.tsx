import React from 'react'
import { isLoggedIn } from '../../utils/supabase/checkAuth'

const Header = async () => {
    const loggedIn = await isLoggedIn()

return (
<header className='flex justify-between'>
    <h1 className='text-2xl font-extrabold'><a href="/">QRme</a></h1>
    {loggedIn ? (
        <a href="/user">Profile</a>
    ) : (
        <a href="/login">Signin/Signup</a>
    )}
</header>
)}

export default Header