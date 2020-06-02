import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileGuard} from './guard/profile.guard';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {HomeLayoutComponent} from './components/home-layout/home-layout.component';
import {AboutusComponent} from '@app/components/aboutus/aboutus.component';
import {PcComponent} from '@app/components/pc/pc.component';
import {ContactComponent} from '@app/components/contact/contact.component';
import {SmartphonesComponent} from '@app/components/smartphones/smartphones.component';


const routes: Routes = [
  // Define routes for the landing / home page, create a separate component for the layout of home page
  // put only header, footer and router-outlet there
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'product/:id', component: ProductComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent, canActivate: [ProfileGuard]
      },
      {
        path: 'thankyou', component: ThankyouComponent
      },
      {
        path: 'smartphones', component: SmartphonesComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'aboutus', component: AboutusComponent
      },
      {
        path: 'pc', component: PcComponent
      },
      {
        path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]
      },
      {
        path: 'register', component: RegisterComponent
      },
    ]
  },


  // Wildcard Route if no route is found == 404 NOTFOUND page
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
