import React from 'react'
import { Formik ,Field } from 'formik'
import { Error } from './Error'

type InputFieldProps = {
    name?: string;
    placeholder?: string;
    errorMsg?: string;
};

const InputFields: React.FC<InputFieldProps> = ({name, placeholder}) => {
return (
    <div>
        <Field name='' validate={validate} placeholder = ''/>
    </div>
)
}

export default InputFields