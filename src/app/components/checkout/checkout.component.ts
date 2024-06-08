import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Iprodotti';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {


  constructor(
    private cartServices:CartService
  ) {}

  cart:Product[]=[]
  option:Array<number>= Array(10)
  selectOption:string[]= []

  ngOnInit(){
    /* passaggi in 2 tempi, obsoleto!
    this.cart = this.cartServices.getCart()
    this.cart = this.regroupForCart(this.cart) */
    this.cart = this.cartServices.getCart()
    this.selectStartingValue()
    console.log(this.cart)
  }


  subTotal():number{
    let total:number = 0
    for (let element of this.cart){
      total+= (element.prezzo*element.quantita)
    }
    return total
  }
  
  total():number {
    return this.subTotal() > 150 ? this.subTotal() : this.subTotal() + 10;
  }

  delete(id:number):void {
    this.cart = this.cart.filter(item => item.id != id)
    this.cartServices.deleteItem(id)
    
  }

  selectStartingValue(){
    this.cart.forEach((item, index) => {
      this.selectOption[index] = item.quantita.toString()
    })
  }
  
  onChangeSelect(i:number):void{
    console.log(this.selectOption)
    console.log(i)
    this.cart[i].quantita = parseInt(this.selectOption[i])
  }
  }
