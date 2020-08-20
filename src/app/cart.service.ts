import { Injectable } from '@angular/core';
import {Products} from './products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];

  constructor() { }

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): any {
    return this.items;
  }

  clearCart(): any {
    this.items = [];
    return this.items;
  }

}
