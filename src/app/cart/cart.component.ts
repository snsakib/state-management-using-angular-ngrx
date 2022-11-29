import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Product } from '../app.interfaces';
import { loadCartAction } from './state/cart.actions';
import { getCartCounterSelector, getCartSelector, getCartTotalSelector } from './state/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products$ = this.store.select<Product[]>(getCartSelector);
  total$ = this.store.select<number>(getCartTotalSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.store.dispatch(loadCartAction());
  }
}
