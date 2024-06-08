import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  search:string=""


  clearInput(){
    this.search=""
  }

  rindirizzamento():void{
    if (this.search.trim() == "" ) return
    this.router.navigate(['product/search/name/', this.search])
    this.clearInput()

}
}