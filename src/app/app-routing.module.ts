import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { DetailComponent } from './components/detail/detail.component';

import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WizardformComponent } from './components/wizardform/wizardform.component';

const routes: Routes = [
  
  {path:"", component:MainComponent},
  {path:"home", component:MainComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"checkout/payment",component: WizardformComponent},
  {path:"product", component: ProdottiComponent},
  {path:"product/:id", component: DetailComponent},
  {path:"product/search/:cat", component: SearchComponent},
  {path:"product/search/name/:name", component: SearchComponent},
  {path:"**", component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
