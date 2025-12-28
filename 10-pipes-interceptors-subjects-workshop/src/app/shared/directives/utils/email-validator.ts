import { ValidatorFn } from "@angular/forms";

export const emailValidator = (domains: string[]): ValidatorFn => {
    const regex = new RegExp(`[A-Za-z0-9]{6,}@gmail\.(${domains.join('|')})`);

    return (control) => {
        const email = control.value;
        const isValid = email === '' || regex.test(email);
        return isValid ? null : { emailValidator: true };
    }
}