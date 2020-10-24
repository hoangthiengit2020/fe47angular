import { Directive, ElementRef, HostListener } from '@angular/core';
//HostListener giúp lắng nghe dc sự kiện
@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
