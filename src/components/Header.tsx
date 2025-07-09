import React from 'react'

const Header = () => {
return (
<header className='flex justify-between'>
    <h1 className='text-2xl font-extrabold'><a href="/">QRme</a></h1>
    <a href="/auth/login">Signin/Signup</a>
</header>
)
}

export default Header