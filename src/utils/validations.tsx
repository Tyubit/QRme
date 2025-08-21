import { FormikValues } from "formik";
export function validateRequired(value: any) {
    if (!value) {
        return 'Required';
    }
    return undefined;
};

export function validateEmail(value: any) {
    if (!value) {
        return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
    return undefined;
};

export function validatePassword(value: any) {
    if (!value) {
        return 'Required';
    }
    if (value.length < 8) {
        return ' ';
    }
    if (!/[A-Z]/.test(value)) {
        return ' ';
    }
    if (!/\d/.test(value)) {
        return ' ';
    }
    return undefined;
};