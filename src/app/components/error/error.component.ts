import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  constructor(private router:Router) {}
  counter:number = 10


  ngOnInit(){
    setTimeout(()=>{
      this.router.navigate(['/home'])
    },this.counter*1000)
    
    let timer= setInterval(()=>{
      this.counter--
      if(this.counter == 0 ) clearInterval(timer)
    },1000)
  }
}
