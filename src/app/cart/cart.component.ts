import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products = [
    {
      id: 0,
      title: '',
      author: '',
      description: '',
      imgUrl: '',
      quantity: 0,
      price: 0,
      cart: 0,
    },
  ];
  total = 0;
  cartCounter = 0;

  constructor() {}

  ngOnInit(): void {}
}
