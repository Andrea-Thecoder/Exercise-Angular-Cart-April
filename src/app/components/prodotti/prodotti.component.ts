import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Product } from '../../models/Iprodotti';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.scss'
})
export class ProdottiComponent {

  constructor(private productService:ProdottiService) {}

  product:Product[]
  sub:Subscription

  ngOnInit() {

    this.sub = this.productService.getProdotti().subscribe(
      {
      next: prodotto => this.product = prodotto,
      error: err => console.log(err),
      complete: () => console.log("lavoro terminato")
      })
    }

    ngOnDestroy() {
      this.sub.unsubscribe()
    }
  }

