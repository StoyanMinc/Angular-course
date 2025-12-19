import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

type MyVoid = () => void;

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    unsubscribeHandlersArray: MyVoid[] = []

    constructor(private el: ElementRef, private renderer: Renderer2) { }
    //* THREE WAYS TO SET UP THE DIRECTIVE
    ngOnInit() {
        const mouseEnterHandler = this.renderer.listen(this.el.nativeElement, 'mouseenter', this.mouseHoverHandler.bind(this));
        const mouseLeaveHandler = this.renderer.listen(this.el.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));
        this.unsubscribeHandlersArray.push(mouseEnterHandler, mouseLeaveHandler);
    }
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.renderer.addClass(this.el.nativeElement, 'highlight');
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.renderer.removeClass(this.el.nativeElement, 'highlight');
    // }


    // @HostListener('mouseenter', ['$event']) onMouseEnter2(event: MouseEvent) {
    //     this.mouseHoverHandler(event);
    // }

    // @HostListener('mouseleave', ['$event']) onMouseLeave2(event: MouseEvent) {
    //     this.mouseLeaveHandler(event);
    // // }


    //* HANDLER FUNCTIONS
    mouseHoverHandler = (event: MouseEvent) => {
        console.log(event);

        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }

    mouseLeaveHandler = (event: MouseEvent) => {
        console.log(event);

        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'initial');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
        console.log(this.unsubscribeHandlersArray);
        this.unsubscribeHandlersArray.forEach(handler => handler());
    }



}
