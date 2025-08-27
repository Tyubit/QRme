'use client';
import { Formik, Form } from 'formik';
import { validateEmail, validateRequired } from '../../../utils/validations';
import {InputField} from '@/components/InputFields';
import { Error } from '@/components/Error';
import {BlueButton,IconButton } from '@/components/Buttons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { login } from './action';

const initialValues = {
    email: '',
    password: ''
}

    const onSubmit = async (values: typeof initialValues) => {

        const fd = new FormData()
        fd.append("email", values.email)
        fd.append("password", values.password)

        const result = await login(fd);

        if (result.status === "success") {
            console.log(result.user)
        } else {
            console.log(result.status)
        }
    }

export default function Login (){
return (
    <div className='bg-[#3D74B6] w-full h-svh flex justify-center-safe items-center'>
        <div className='px-2.5 w-full h-full bg-white md:w-2/3 md:h-fit  md:px-5 md:py-10 md:rounded-[48px]' >
            <h1 className='text-4xl font-bold text-[#3D74B6] w-full text-center py-15'>Let’s sign you in!</h1>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur={true}>
                {({ errors, touched, isValidating }) => (
                    <Form>
                        <InputField
                            label='Email*'
                            name='email'
                            placeholder='example@email.com'
                            validate={validateEmail}
                            className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light' />
                        <InputField 
                            label='Password*' 
                            name='password' 
                            type= 'password'
                            validate={validateRequired} 
                            className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light' />
                        <BlueButton
                            type='submit'
                            className='mt-11'>Sign in</BlueButton>
                    </Form>
                )}
            </Formik>
            <p className="w-full text-center mt-3.5">or</p>
            <section className='w-full flex items-center justify-center mt-5'>
                <IconButton className='mx-2.5 '><FcGoogle size={44}/></IconButton>
                <IconButton className='mx-2.5 '><FaFacebook size={44} color='#3D74B6'/></IconButton>
            </section>
            <p className="w-full text-center mt-8">
                Don’t have an account? <Link href='/signup' className='font-bold text-[#3D74B6]'>Sign up</Link>
            </p>
        </div>
    </div>
)
}