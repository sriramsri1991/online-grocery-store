import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Products} from '../products/products';
import {MOCK_PRODUCTS} from '../products/mock-products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct: Products;
  products = MOCK_PRODUCTS;

  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedProduct = MOCK_PRODUCTS[params.get('productId')];
    });
  }

  addToCart(selectedProduct): void {
    this.cartService.addToCart(selectedProduct);
    window.alert('Your product has been added to the cart!');
    this.router.navigate(['confirmation']);
  }

}
