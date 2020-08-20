import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  orderNumber: string;

  constructor() { }

  ngOnInit(): void {
    this.orderNumber = Math.random().toString(36).substr(2, 9);
  }

}
