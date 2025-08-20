import React from 'react'
import { useField,FormikProps, FieldHookConfig} from 'formik'

type InputFieldProps = FieldHookConfig<string> & {
    label?: string;
    className?: string
};

const InputField: React.FC<InputFieldProps> = ({ label,validate, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='mt-2.5'>
            <label className='px-4' htmlFor={props.name}>{ label }</label>
            <input {...field} {...props} id={props.name} className={props.className} />
            {meta.touched && typeof meta.error === "string" && (<p className="text-[#DA2C43] text-sm">{meta.error}</p>
)}
        </div>
    )
};

export default InputField