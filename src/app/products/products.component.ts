import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MOCK_PRODUCTS} from './mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = MOCK_PRODUCTS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
