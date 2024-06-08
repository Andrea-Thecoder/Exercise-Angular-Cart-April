import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThrustService {

  constructor(private http:HttpClient) { }

  wsRandomUrl:string = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new" //dove num = quanti numeri, min e max rispettivamente il valore minimo e massimo che deve uscire. col indica quante colonne vogliamo vedere, generlaemtne col = num. base = indica in che base di valore numerico stiamo operando (base 10, base 2 etc). format= il formato della risposta, plain è il testo semplice.rnd= news serve per far si che ad ogni request esso rigeneri il valore!

  wsFeedback:string = "https://random-review-generator.com/api/reviews?num=5"

  getRnd():Observable<number>{
    return this.http.get<number>(this.wsRandomUrl)
  }

  getFeedback():Observable<string[]>{
    return this.http.get<string[]>(this.wsFeedback)
  }
}
