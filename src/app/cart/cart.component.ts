import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import { loadCartAction } from './state/cart.actions';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.store.dispatch(loadCartAction());
  }
}
