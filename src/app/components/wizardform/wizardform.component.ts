import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizardform',
  templateUrl: './wizardform.component.html',
  styleUrl: './wizardform.component.scss'
})
export class WizardformComponent {


  constructor(private formBuilder:FormBuilder){}

  simplyForm:FormGroup
 /*  nome = new FormControl("")
  cognome =new FormControl("")
  email =new FormControl("")
  telefono = new FormControl("") */

  ngOnInit(){
    this.createFormGroup()
    this.simplyForm.valueChanges.subscribe({
      next: data => console.log(data),
    })
  }

  Submit() {
    console.log("ciao")
    this.simplyForm.updateValueAndValidity()
    console.log(this.simplyForm.value)
    console.log(this.simplyForm.errors)
    if (this.simplyForm.valid){
      alert("hai vinto!")
    } else {
      console.log(this.simplyForm.errors)
    }
  }

  private createFormGroup(){
    //associamo al formgroup il gruppo di form che ci itneress far validare .
    this.simplyForm = this.formBuilder.group({
      nome:["",[Validators.required]] ,
      cognome:["",[Validators.required]],
      email:["",[Validators.required]],
      telefono:["",[Validators.required]]
    })
  }
}
