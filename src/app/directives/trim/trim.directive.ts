import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  @HostListener('blur', ['$event'])
  onBlur(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.trim();
  }
}
