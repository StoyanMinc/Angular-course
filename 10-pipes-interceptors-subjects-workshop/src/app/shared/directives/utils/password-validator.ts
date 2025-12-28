import { ValidatorFn } from "@angular/forms";

export const passwordValidator = (
    passwordControl: string,
    rePasswordControl: string
): ValidatorFn => {
    return (control) => {
        const password = control.get(passwordControl)
        const rePassword = control.get(rePasswordControl)

        if (password?.value.length < 3) {
            console.log('passwordTooShort');
            return { passwordTooShort: true }
        } else if (password?.value !== rePassword?.value) {
            console.log('passwordMismatch');
            return { passwordMismatch: true }
        }
        return null;
    }
}
