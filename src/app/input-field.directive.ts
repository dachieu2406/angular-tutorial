import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputField]'
})
export class InputFieldDirective {

  constructor() { }

  @HostListener('focus') onFocus() {
    console.log("on Focus")
  }
  @HostListener('blur') onBlur(){
    console.log("on Blur")
  }
}
