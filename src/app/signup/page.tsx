'use client';
import { useState } from 'react';
import { Formik, Form } from 'formik';

import { validateEmail, validateRequired, validatePassword} from '@/utils/validations';
import { ConfirmPasswordField, InputField, PasswordField } from '@/components/InputFields';
import Stepper from '@/components/Stepper';
import { SimpleButton, BlueButton } from '@/components/Buttons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';

const initialValues = {
    email: '',
    password: '',
    confirm_password:'',
    name: '',
}

export default function Signup() {
    const [currentStep, setCurrentStep] = useState(1);
    
    const steps = [
        { id: 1, title: 'Set up your Account' },
        { id: 2, title: 'Profile info' },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
        }
    };

    const onSubmit = values => {
        handleNext();
    }
return (
    <div className='bg-[#3D74B6] w-full h-svh flex justify-center-safe items-center'>
        <div className='px-2.5 w-full h-full bg-white md:w-2/3 md:h-fit  md:px-5 md:py-10 md:rounded-[48px]' >
            <h1>Join us for free</h1>
            <Stepper steps={steps} currentStep={currentStep} onStepClick={setCurrentStep}/>
            <section className='w-full flex items-center justify-center mt-5'>
                <SimpleButton className='mx-2.5 active:bg-[#D6E0ED] p-1 rounded-full'><FcGoogle size={44}/></SimpleButton>
                <SimpleButton className='mx-2.5 active:bg-[#D6E0ED] p-1 rounded-full'><FaFacebook size={44} color='#3D74B6'/></SimpleButton>
            </section>
            <p className="w-full text-center mt-3.5">or</p>
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
                            label='Name*'
                            name='name'
                            placeholder='John Smith'
                            validate={validateRequired}
                            className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light' />
                        <PasswordField 
                            label='Password*' 
                            name='password' 
                            validate={validatePassword} 
                            className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light' />
                        <ConfirmPasswordField
                            className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light'/>
                        <BlueButton
                            type='submit'
                            className='mt-11'>Next</BlueButton>
                    </Form>
                )}
            </Formik>
            <p className="w-full text-center mt-8">
                Already have a account? <Link href='/login' className='font-bold'>Log In</Link>
            </p>
        </div>
    </div>
)}