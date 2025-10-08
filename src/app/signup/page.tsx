'use client';
import { useState } from 'react';
import { Formik, Form, FormikErrors } from 'formik';

import { validateEmail, validateRequired, validatePassword} from '../../utils/validations';
import { ConfirmPasswordField, InputField, PasswordField } from '@/components/InputFields';
import Stepper from '@/components/Stepper';
import {BlueButton, IconButton } from '@/components/Buttons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { signup } from './action';

const initialValues = {
    email: '',
    password: '',
    confirm_password:'',
    name: '',
    company_name: '',
    phone_num: '',
    contact_email: '',
    website:'',
}
type FormValues = typeof initialValues;

export default function Signup() {
    const [currentStep, setCurrentStep] = useState(1);
    const [mounted, setMounted] = useState(false);
    
    const steps = [
        { id: 1, title: 'Set up your Account' },
        { id: 2, title: 'Profile info' },
    ];

    const handleNext = async (e: React.MouseEvent<HTMLButtonElement>, validateForm: () => Promise<FormikErrors<typeof initialValues>>, setTouched: any) => {

        e.preventDefault();
        e.stopPropagation();

        setTouched(
            Object.keys(initialValues).reduce((acc, key) => {
            acc[key] = true;
            return acc;
            }, {} as Record<string, boolean>)
        );

        const formErrors = await validateForm();

        const stepFields: (keyof FormValues)[] =
        currentStep === 1
        ? ["email", "name", "password", "confirm_password"]
        : ["company_name", "phone_num", "contact_email", "website"];
        
        const hasStepErrors = stepFields.some((field) => !!formErrors[field]);
        
        if (!hasStepErrors && currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const onSubmit = async (values: FormValues) => {

        const payload = {
            email: values.email.replace(/^["']|["']$/g, '').trim(),
            password: values.password,
            name: values.name,
            company_name: values.company_name,
            phone_num: values.phone_num,
            contact_email: values.contact_email,
            website: values.website,
        };
        
        console.log('Payload:', payload);
        
        const result = await signup(payload);
        console.log("Server response:", result)

        if (result.status === "success") {
            console.log(result.user)
        } else {
            console.log(result.status)
        }
    }

return (
    <div className='bg-[#3D74B6] w-full h-svh flex justify-center-safe items-center'>
        <div className='px-2.5 w-full h-full bg-white md:w-2/3 md:h-fit  md:px-5 md:py-10 md:rounded-[48px] md:shadow-2xl' >
            <h1 className='text-4xl font-bold text-[#3D74B6] w-full text-center py-15'>Join us for free</h1>
            <Stepper steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />
            {currentStep === 1 ? (
                <>
                    <section className='w-full flex items-center justify-center mt-5'>
                        <IconButton className='mx-2.5'><FcGoogle size={44} /></IconButton>
                        <IconButton className='mx-2.5'><FaFacebook size={44} color='#3D74B6' /></IconButton>
                    </section>
                    <p className="w-full text-center mt-3.5">or</p>
                </>
            ):(<></>)}
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur={true}
                enableReinitialize={false}>
                {({ errors, touched, isValidating, validateForm, setTouched  }) => (
                    <Form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {currentStep === 1 ? (
                            <>
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
                            </>
                        ) : (
                            <>
                            <InputField
                                label="Company Name"
                                name="company_name"
                                placeholder="Acme Inc."
                                className="w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light"
                            />
                            <InputField
                                label="Phone Number"
                                name="phone_num"
                                placeholder="(555) 123-4567"
                                className="w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light"
                            />
                            <InputField
                                label="Contact Email"
                                name="contact_email"
                                placeholder="contact@email.com"
                                className="w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light"
                            />
                            <InputField
                                label="Website"
                                name="website"
                                placeholder="https://yourwebsite.com"
                                className="w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light"
                            />
                            </>
                        )}
                        {currentStep === 1 ? (
                            <BlueButton
                                type="button"
                                onClick={(e) => handleNext(e, validateForm, setTouched)}
                                className="mt-11 md:w-80 col-span-1 md:col-span-2 justify-self-center"
                            >
                                Next
                            </BlueButton>
                            ) : (
                            <BlueButton
                                type="submit"
                                className="mt-11 md:w-80 col-span-1 md:col-span-2 justify-self-center"
                            >
                                Sign Up
                            </BlueButton>
                        )}
                    </Form>
                )}
            </Formik>
            <p className="w-full text-center mt-8">
                Already have a account? <Link href='/login' className='font-bold text-[#3D74B6]'>Log In</Link>
            </p>
        </div>
    </div>
)}