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
  items: Products[];
  price: number;

  constructor(private cartService: CartService,
              private route: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.price = this.recalculateTotalAmount();
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
  decrease_quantity(item): void{
    if (item.quantity === 0){
      return alert('Quantity cannot be in negative');
    }
    item.quantity--;
    this.recalculateTotalAmount();

  }
  countPrice(item): void{
    this.price = 0;
    for (const i of this.items){
      this.price += i.price * i.quantity;
    }
  }
  increase_quantity(item): void{
    item.quantity++;
    this.recalculateTotalAmount();
  }

  recalculateTotalAmount(): number {
    let newTotalAmount = 0;
    this.items.forEach( cartItem => {
      newTotalAmount += (cartItem.price * cartItem.quantity);
    });
    this.price = newTotalAmount;
    return this.price;
  }

}
