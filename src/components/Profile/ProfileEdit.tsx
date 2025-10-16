import { Form, Formik, FieldArray, Field  } from 'formik';
import { useState } from 'react'

import { IoIosRemoveCircle } from "react-icons/io";

import { BlueButton,SimpleButton } from '../Buttons';
import { InputField } from '../InputFields';
import { validateRequired } from '@/utils/validations';
import { updateInfo } from '@/app/user/action';



interface Profile {
    name: string;
    company_name: string;
    phone_num: string;
    cont_email: string;
    socials: string[];
    address: string;
    website: string;
}

interface ProfileEditProps {
    user: any;
    onCancel: () => void;  // Add this prop
    onSave: (updatedProfile: Profile) => void;
}

export const ProfileEdit = ({ user, onCancel, onSave }: ProfileEditProps) => {

    const onSubmit = async (values: Profile) => {

    const payload = {
            user_id: user.id,
            name: values.name,
            company_name: values.company_name,
            phone_num: values.phone_num,
            cont_email: values.cont_email,
            website: values.website,
            socials: values.socials
        };
        const result = await updateInfo(payload);
    if (result.status === "success") {
            onSave(values); 
            onCancel();
        } else {
            console.log(result.status)
        }
    }

    return (
        <div className="bg-[#3D74B6] w-full min-h-screen flex flex-col items-center overflow-y-auto py-10">
            <div className="w-full md:w-fit bg-white md:px-5 md:py-10 rounded-[48px] md:shadow-2xl px-4 py-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Profile</h1>
                <p className="text-gray-600">Update your business information</p>
            </div>
            <Formik
                initialValues={user} 
                onSubmit={onSubmit}
                validateOnChange={true}
                enableReinitialize={true}
                validateOnBlur={true}>
                {({ values }) => (
                    <Form>
                        <InputField
                            label='Name*'
                            name='name'
                            placeholder='John Smith'
                            validate={validateRequired}
                            className='w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light' />
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
                            name="cont_email"
                            placeholder="contact@email.com"
                            className="w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light"
                        />
                        <InputField
                            label="Website"
                            name="website"
                            placeholder="https://yourwebsite.com"
                            className="w-full rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800 font-light"
                        />

                        {/* Social Media Links */}
                        <div className="mt-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Social Media Links
                            </label>

                            <FieldArray name="socials">
                                {({ push, remove }) => (
                                    <div>
                                    {values.socials.map((social, index) => (
                                        <div key={index} className="flex rounded-lg items-center justify-between mb-2.5">
                                            <Field
                                            name={`socials.${index}`}
                                            placeholder="URL"
                                            className="flex-1 rounded-full py-2 px-3.5 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-blue-400"
                                            />
                                        <SimpleButton
                                            type="button"
                                            className=" rounded-full text-red-500 hover:bg-red-100 transition"
                                            onClick={() => {
                                            // Remove from form
                                            remove(index);
                                            }}
                                        >
                                            <IoIosRemoveCircle className="text-4xl"  />
                                        </SimpleButton>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => {
                                        push('');
                                        }}
                                        className="w-full px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition flex items-center justify-center gap-2 font-medium"
                                    >
                                        Add Social Media
                                    </button>
                                    </div>
                                )}
                                </FieldArray>
                        </div>
                    
                        <BlueButton
                            type='submit'
                            className='mt-11'>Save Profile</BlueButton>
                    </Form>)}
            </Formik>

            </div>
        </div>
    )
}
