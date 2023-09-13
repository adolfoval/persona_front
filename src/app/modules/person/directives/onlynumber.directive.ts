import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appOnlynumber]'
})
export class OnlynumberDirective {

  constructor(private host:ElementRef) {
    // console.log(this.host)
  }

  @HostListener("keypress", ["$event"]) onInput(event: KeyboardEvent){
    return isNaN(Number(event.key)) ? false: true;
  }

}
