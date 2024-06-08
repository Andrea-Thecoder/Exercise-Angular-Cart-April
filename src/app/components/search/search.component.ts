import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Iprodotti';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(
    private productService:ProdottiService,
    private route:ActivatedRoute
  ){}
    product:Product | Product[]
    sub:Subscription
    subRoute:Subscription
    name:string

  ngOnInit(){
    this.subRoute=this.route.paramMap.subscribe({
      next: check => {
        check.get("cat") != undefined ?
        this.getProdottiBycat() :
        this.getProdottiByName()
      }
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
    this.subRoute.unsubscribe()
  }

  getProdottiBycat(){
      this.subRoute = this.route.paramMap.subscribe({
        next: parametro => {
          this.sub = this.productService.getProdottiByCat(parametro.get("cat")).subscribe({
            next: dato => this.product=dato,
            error: err => console.log(err),
            complete: () => console.log("done")
          })
        },
        error: err => console.log(err),
        complete: () => console.log("done")
      })
  } 

  getProdottiByName(){
    this.subRoute= this.route.paramMap.subscribe(
      {
        next: para => {
          this.sub = this.productService.getProdotti().subscribe(
            {
              next: product => {
                this.product = product.filter(prodotto => 
                  (prodotto.nome.toLowerCase()).indexOf(para.get("name").toLowerCase()) != -1)
              },
              error: err=> console.log(err),
              complete: () => console.log("done")
            }
          )
        },
        error: err=> console.log(err),
        complete: () => console.log("done")
      })
  }
}
