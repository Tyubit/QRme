'use client';

import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

export default function Login (){
    
return (
    <div className=''>
        <h1>Log in</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ isSubmitting }) => (
            <Form className='flex flex-col px-10'>
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" className="p-2"/>
            <label htmlFor="email">Password</label>
            <Field name="password" placeholder="password" type="password" />
            <button type="submit" disabled={isSubmitting} className='p-3'>
                Submit
            </button>
            </Form>
            )}
        </Formik>
    </div>
)
}


function validateEmail(value: string) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
  }
  