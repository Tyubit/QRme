import React from 'react';
import { useField, useFormikContext, FieldHookConfig} from 'formik'

type InputFieldProps = FieldHookConfig<string> & {
    label?: string;
    className?: string
};

export const InputField: React.FC<InputFieldProps> = ({ label,validate, ...props }) => {
    const [field, meta] = useField({ name: props.name, validate });

    return (
        <div className='mt-2.5'>
            <label className='px-4' htmlFor={props.name}>{ label }</label>
            <input {...field} {...props} id={props.name} className={props.className} />
            {meta.touched && meta.error && (<p className="text-[#DA2C43] text-sm px-3.5">{meta.error}</p>)}
        </div>
    )
};

export const PasswordField: React.FC<InputFieldProps> = ({ label,validate, ...props }) => {
    const [field, meta] = useField({ name: props.name, validate });
    return (
        <div className='mt-2.5'>
            <label className='px-4' htmlFor={props.name}>{ label }</label>
            <input {...field} {...props} id={props.name} className={props.className} type="password" />
            {meta.touched && meta.error && (<p className="text-[#DA2C43] text-sm px-3.5">{meta.error}</p>)}
            <p className={`px-4 ${field.value.length >= 8 ? "text-green-500" : "text-red-500"}`}>Must be at least 8 characters</p>
            <p className={`px-4 ${/[A-Z]/.test(field.value) ? "text-green-500" : "text-red-500"}`}>Must contain at least one uppercase letter</p>
            <p className={`px-4 ${/\d/.test(field.value) ? "text-green-500" : "text-red-500"}`}>Must contain at least one number</p>
        </div>
    )
};

export const ConfirmPasswordField: React.FC<InputFieldProps> = ({ className}) => {
    const { values } = useFormikContext<{ password: string; confirm_password: string }>();
    return (
    <InputField
        label="Confirm Password*"
        name="confirm_password"
        type="password"
        validate={(value: string) => {
            if (!value) return "Required";
            if (value !== values.password) return "Passwords do not match";
            return undefined;
        }}
        className={className}
    />
    )
};

export const ReadOnlyField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    return (
        <div className='mt-2.5'>
            <label className='px-4' htmlFor={props.name}>{ label }</label>
            <input {...props} id={props.name} className={props.className}/>
        </div>
    )
};
