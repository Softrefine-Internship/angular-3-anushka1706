import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
 highlightColor: string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }
}
