import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Products} from '../products/products';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Products[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
