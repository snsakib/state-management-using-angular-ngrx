import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../app.interfaces';
import { loadShoppingCartAction } from './state/shopping-cart.actions';
import { AppState } from './state/shopping-cart.interfaces';
import {
  getCartCounterSelector,
  getCartTotalSelector,
  getShoppingCartSelector,
} from './state/shopping-cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  products$ = this.store.select<Product[]>(getShoppingCartSelector);
  total$ = this.store.select<number>(getCartTotalSelector);
  cartCounter$ = this.store.select(getCartCounterSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.store.dispatch(loadShoppingCartAction());
  }
}
