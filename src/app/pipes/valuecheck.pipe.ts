import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
@Pipe({
  name: 'valuecheck'
})
export class ValuecheckPipe implements PipeTransform {

  transform(shipCost:number):string {
    let costo=10
   return shipCost > 150 ? "Gratuita" : `${costo.toFixed(2)} €`
  }

}
