import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router:Router){}
  banneroneUp:boolean = true

  ngOnInit(){
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd ) 
            this.banneroneUp= !event.url.includes('/checkout')
      }
    })
  }
}
