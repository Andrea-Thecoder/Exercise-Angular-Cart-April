import { Component } from '@angular/core';
import { ThrustService } from '../../services/thrust.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private rnd:ThrustService){}
  thrust:number =0

  ngOnInit(){
    this.rnd.getRnd().subscribe({
      next: (value => this.thrust= value),
      error: (err) => console.log(err),
      complete: () => console.log("fine")
    })

 /*    this.rnd.getFeedback().subscribe(
      {
        next: (value) => console.log(value),
        error: (err) => console.log(err),
        complete: () => console.log("fine")
      }) */
  }


}
