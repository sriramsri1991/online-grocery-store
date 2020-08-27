import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';
import {Products} from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(private route: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts().subscribe(
      data => this.products = data
    );
  }

  btnClick(index: number): void {
    console.log(index);
    this.route.navigate(['products' + '/' + index]);
  }

  getProducts(): Observable<Products[]> {
    return this.productService.getProducts();
  }

}
