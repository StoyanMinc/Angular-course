import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[appMaxCountValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MaxCountValidatorDirective,
            multi: true
        }
    ]
})
export class MaxCountValidatorDirective {
    @Input() appMaxCount: number | undefined;
    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {

        console.log(control.value);
        console.log(this.appMaxCount);

        const length = control.value?.length || 0;

        if (!this.appMaxCount || length >= this.appMaxCount) {
            return null
        };

        return { appMaxCount: this.appMaxCount };
    }
}
