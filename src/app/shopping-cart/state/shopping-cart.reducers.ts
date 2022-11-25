import { createReducer, on } from '@ngrx/store';
import {
  addToCartAction,
  addToCartErrorAction,
  getShoppingCartAction,
  initiateAddToCartAction,
  loadShoppingCartAction,
  shoppingCartErrorAction,
} from './shopping-cart.actions';
import { ShoppingCartState } from './shopping-cart.interfaces';
import { shoppingCartInitialState } from './shopping-cart.state';

export const shoppingCartReducer = createReducer<ShoppingCartState>(
  shoppingCartInitialState,
  on(initiateAddToCartAction, (state): ShoppingCartState => {
    return [...state];
  }),
  on(addToCartAction, (state, { product }): ShoppingCartState => {
    return [...state, product];
  }),
  on(addToCartErrorAction, (state): ShoppingCartState => {
    return [...state];
  }),
  on(loadShoppingCartAction, (state): ShoppingCartState => {
    return [...state];
  }),
  on(getShoppingCartAction, (state, { products }): ShoppingCartState => {
    return [...products];
  }),
  on(shoppingCartErrorAction, (state): ShoppingCartState => {
    return [...state];
  })
);
