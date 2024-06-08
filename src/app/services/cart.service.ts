import { Injectable } from '@angular/core';
import {Product } from '../models/Iprodotti';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  cart:Product[] =[]

  constructor() {
    if (localStorage.getItem("partialCart")) {
      this.cart = JSON.parse(localStorage.getItem("partialCart")!); // 
    } else {
      this.cart = [];
    }
    
   }


   consoleCart():void{
    console.log(this.cart)
   }

  addOnCart(prodotti:Product,quantity:number):void{
    let arrayAdder:Array<Product>= []
    for (let i=1; i<= quantity;i++)
    arrayAdder.push(prodotti)
    console.log(arrayAdder)
    this.regroupForCart(arrayAdder)
    localStorage.setItem("partialCart",JSON.stringify(this.cart))
    console.log(this.cart)
  }

  getCart():Product[]{
    this.cart = JSON.parse(localStorage.getItem("partialCart"))
    return this.cart
  }

  deleteItem(id:number):void{
    this.cart = this.cart.filter(item => item.id != id)
    console.log(this.cart)
    localStorage.setItem("partialCart",JSON.stringify(this.cart))
  }


  private regroupForCart(cart:Product[]):void{
    const regroupPhaseOne = new Map<number,Product>()
    for (let item of cart){
      regroupPhaseOne.has(item.id) ? 
      regroupPhaseOne.get(item.id).quantita++ :
      regroupPhaseOne.set(item.id, { ...item, quantita: 1 })
    }
    console.log("prima fase regroup",regroupPhaseOne)
    regroupPhaseOne.forEach(item => {
      const itemIndex = this.cart.findIndex(cartItem => cartItem.id == item.id)
      console.log(itemIndex)
      itemIndex == -1 ? this.cart.push(item) : this.cart[itemIndex].quantita += item.quantita
      if (this.cart[itemIndex].quantita >= 10) this.cart[itemIndex].quantita = 10
    })
    console.log(this.cart)
  }

} 
