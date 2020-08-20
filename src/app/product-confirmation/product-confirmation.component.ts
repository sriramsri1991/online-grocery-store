import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Products} from '../products/products';

@Component({
  selector: 'app-product-confirmation',
  templateUrl: './product-confirmation.component.html',
  styleUrls: ['./product-confirmation.component.css']
})
export class ProductConfirmationComponent implements OnInit {

  items: Products[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
