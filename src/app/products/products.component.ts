import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MOCK_PRODUCTS} from './mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = MOCK_PRODUCTS;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  btnClick(index: number): void {
    console.log(index);
    this.route.navigate(['products' + '/' + index]);
  }

}
