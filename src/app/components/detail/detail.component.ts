import { Component } from '@angular/core';
import { Iprodotti, Product, SpecificheTecniche } from '../../models/Iprodotti';
import { ProdottiService } from '../../services/prodotti.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  constructor(
    private prodottoService:ProdottiService,
    private route:ActivatedRoute,
    private cart:CartService
    ) {}

  prodotto:Product
 
  stKey:Array<string>
  stValue:Array<string>
  sub:Subscription

  openCart:boolean = false
  selectOption:string = "1"
  option:Array<number>= Array(10)
  
  ngOnInit(){
    this.openCart=false
    this.sub= this.prodottoService.getProdottiById(this.route.snapshot.params['id']).subscribe({
      next: (prodotto) => {
        console.log(prodotto[0].immagine)
        this.prodotto = prodotto[0]
        console.log(this.prodotto)
        const specifica:SpecificheTecniche= prodotto[0].specifiche
        this.stKey = Object.keys(specifica) 
        this.stValue =Object.values(specifica)
      },
      error: (err) => console.log(err),
      complete: () => console.log("finito")
    })
  }


  buy(prodotto:Product){
    console.log(prodotto)
    /* for (let i=1; i <= parseInt(this.selectOption); i++){ */
    this.cart.addOnCart(prodotto,parseInt(this.selectOption))
    this.selectOption = "1"
    this.openCart=true
  }

  changeOpenCart(event:boolean){
    this.openCart=event
  }

  
}
