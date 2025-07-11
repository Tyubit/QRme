export function validateRequired(value) {
    if (!value) {
        return 'Required';
    }
    return undefined;
}

export function validateEmail(value) {
    if (!value) {
        return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
    return undefined;
}

export function validatePassword(value) {
    if (!value) {
        return 'Required';
    }
    if (value.length < 8) {
        return 'Password must be at least 8 characters';
    }
    if (!/[A-Z]/.test(value)) {
        return 'Password must contain at least one uppercase letter';
    }
    if (!/\d/.test(value)) {
        return 'Password must contain at least one number';
    }
    return undefined;
}
