import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:LandingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product_display/:id',
    component:ProductDisplayComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
