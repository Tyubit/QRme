'use client';
import { Formik, Form } from 'formik';
import { validateEmail, validateRequired } from '@/utils/validations';
import InputField from '@/components/InputFields';
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
    <div className='px-2.5'>
        <h1>Join us for free</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched, isValidating }) => (
                <Form>
                    <InputField label='Email*' name='email' placeholder='example@email.com' validate={validateEmail} className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                    <InputField label='Name*' name='name' placeholder='John Smith' validate={validateEmail} className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                    <InputField label='Password*' name='name' validate={validateEmail} className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                    <p className='px-4 text-[#878787]'>Must be at least 8 characters</p>
                    <InputField label='Confirm password*' name='name' validate={validateEmail} className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                    <SimpleButton type='submit' className='mt-11'>Sign up</SimpleButton>
                </Form>
            )}
        </Formik>
        <p className="">
            Already have a account? <Link href='/login' className='font-bold'>Log In</Link>
        </p>
    </div>
)}