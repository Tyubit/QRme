'use client';

import ReactDOM from 'react-dom';
import { Formik, useFormik, Field, Form } from 'formik';
import { validateEmail, validateRequired } from '@/utils/validations';
import { Error } from '@/components/Error';
import { SimpleButton } from '@/components/Buttons';
import Link from 'next/link';

const initialValues = {
    email: '',
            password: ''
}

const onSubmit = values => {
    console.log(values)
}

export default function Login (){
return (
    <div className='flex flex-col justify-center items-center'>
        <h1>Log in</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched, isValidating }) => (
                <Form>
                    <Field name='email' validate={validateEmail} className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'/>
                    {errors.email && touched.email && <Error>{errors.email}</Error>}
                    <Field name='password' validate={validateRequired} className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'/>
                    {errors.password && touched.password && <Error>{errors.password}</Error>}
                    <p >
                        <a href=''>Forgot Password?</a>
                    </p>
                    <SimpleButton type='submit'>Log In</SimpleButton>
                </Form>
            )}
        </Formik>
        <p className="">
            Don't have an account?<Link href='/auth/signup'>Sign up</Link>
        </p>
    </div>
)
}