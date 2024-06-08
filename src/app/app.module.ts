import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { DetailComponent } from './components/detail/detail.component';
import { MainbannerComponent } from './components/mainbanner/mainbanner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ValuecheckPipe } from './pipes/valuecheck.pipe';
import { WizardformComponent } from './components/wizardform/wizardform.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProdottiComponent,
    DetailComponent,
    MainbannerComponent,
    ErrorComponent,
    SearchComponent,
    CartpageComponent,
    CapitalizePipe,
    CheckoutComponent,
    ValuecheckPipe,
    WizardformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
