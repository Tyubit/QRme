'use client';

import ReactDOM from 'react-dom';
import { Formik, useFormik, Field, Form } from 'formik';
import { validateEmail, validateRequired } from '@/utils/validations';
import { Error } from '@/components/Error';
import { SimpleButton } from '@/components/Buttons';
import Link from 'next/link';

const initialValues = {
    email: '',
    password: '',
    name: '',
    company_name: '',
    
}

const onSubmit = values => {

}

export default function Signup (){
return (
    <div>
        <h1>Create Account</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched, isValidating }) => (
                <Form>
                    <Field name='email' placeholder='Email' validate={validateEmail} className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'/>
                    {errors.email && touched.email && <Error>{errors.email}</Error>}

                    <Field name='password' placeholder='Password' validate={validateRequired} className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'/>
                    {errors.password && touched.password && <Error>{errors.password}</Error>}

                    <Field name='verify_password' placeholder='Repeat Password' validate={validateRequired} className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'/>
                    {errors.password && touched.password && <Error>{errors.password}</Error>}

                    <Field name='name' placeholder='Name' validate={validateRequired} className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'/>
                    {errors.name && touched.name && <Error>{errors.name}</Error>}

                    <Field name='company_name' placeholder='Company Name(optional)' className='w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                    <SimpleButton type='submit'>Sign up</SimpleButton>
                </Form>
            )}
        </Formik>
        <p className="">
            Already have a account? <Link href='/auth/login' className='font-bold'>Log In</Link>
        </p>
    </div>
)}