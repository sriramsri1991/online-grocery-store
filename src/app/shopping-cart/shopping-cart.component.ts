import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Products} from '../products/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Products[] = [];

  constructor(private cartService: CartService,
              private route: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  placeOrder(): void {
    this.items = [];
    this.cartService.clearCart();
    this.route.navigate(['orderConfirmation']);
  }
  cancelOrder(): void {
    this.items = [];
    this.cartService.clearCart();
    this.route.navigate(['products']);
  }

}
