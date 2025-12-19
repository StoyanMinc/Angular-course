import { Directive, Input, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appMyStructureDirective]',
    exportAs: 'appMyStructureDirective'
})
export class MyStructureDirectiveDirective {

    @Input() appMyStructureDirective: boolean = false;
    @Input() myTempRf: TemplateRef<any> | undefined;

    constructor(
        @Optional() private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) { }


    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);

        const template = this.templateRef || this.myTempRf;
        
        if (this.appMyStructureDirective) {
            this.viewContainerRef.createEmbeddedView(template,
                {
                    testValue: 'Some value from directive',
                    testValue2: 'Some value 2 from directive',
                    $implicit: 'Default text from directive'
                });
        } else {
            this.viewContainerRef.clear();
        }
    }
}
