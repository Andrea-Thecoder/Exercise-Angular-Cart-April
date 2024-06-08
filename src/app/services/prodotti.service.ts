import { Injectable } from '@angular/core';
import {Product } from '../models/Iprodotti';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http:HttpClient) { }

  wsProduct:string = "http://localhost:3000/prodotti"

  getProdotti():Observable<Product[]>{
    return this.http.get<Product[]>(this.wsProduct)
  }

  getProdottiById(id:number):Observable<Product> {
    let params = new HttpParams().set('id',id)
    return this.http.get<Product>(this.wsProduct,{params: params})
  }

  getProdottiByCat(cat:string):Observable<Product> {
    const url = `${this.wsProduct}?tipo=${cat}`
    return this.http.get<Product>(url)
  }
  

  
}
