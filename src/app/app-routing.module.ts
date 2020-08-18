import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [{path: '', redirectTo: '/home', pathMatch: 'full'},
                        {path: 'home', component: HomeComponent},
                        {path: 'products', component: ProductsComponent},
                        {path: 'products/:productId', component: ProductDetailsComponent},
                        {path: 'cart', component: ShoppingCartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
