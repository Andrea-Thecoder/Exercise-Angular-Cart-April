import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { Product } from '../../models/Iprodotti';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.scss'
})
export class CartpageComponent {


  constructor(private elementRef:ElementRef){}

    @Input() product:Product
    @Input() quantity:number
    @Output() openCartEmitter= new EventEmitter<boolean>()
    
    @HostListener("click",["$event"]) onclick(event:MouseEvent) {
      if (event.target === this.elementRef.nativeElement)
      this.returnDetail()
    }


    fade:boolean = false
  ngOnInit(){
    console.log(this.quantity)
    setTimeout(() => {
      this.returnDetail()
    }, 5000);
  }

  returnDetail(){
    this.fade=true
    setTimeout(() => {
      this.openCartEmitter.emit(false)
    }, 700);
    
  }
}
