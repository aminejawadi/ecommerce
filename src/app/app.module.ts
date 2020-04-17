import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componennts/header/header.component';
import { FooterComponent } from './componennts/footer/footer.component';
import { HomeComponent } from './componennts/home/home.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './componennts/products/products.component';
import { ContactComponent } from './componennts/contact/contact.component';
import { LoginComponent } from './componennts/login/login.component';
import { RegisterComponent } from './componennts/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
