import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appOnlyletters]'
})
export class OnlylettersDirective {

  constructor(private host:ElementRef){}

  @HostListener("keypress", ["$event"]) onInputLetter(event: KeyboardEvent){

    return isNaN(Number(event.key)) ? true: false;
  }

}
