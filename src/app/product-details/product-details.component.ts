import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Products} from '../products/products';
import {MOCK_PRODUCTS} from '../products/mock-products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct: Products;
  products = MOCK_PRODUCTS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedProduct = MOCK_PRODUCTS[params.get('productId')];
    });
  }

}
