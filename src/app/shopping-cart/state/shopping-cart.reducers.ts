import { createReducer, on } from '@ngrx/store';
import {
  addToCartAction,
  addToCartFailureAction,
  addToCartSuccessAction,
  loadShoppingCartAction,
  loadShoppingCartFailureAction,
  loadShoppingCartSuccessAction
} from './shopping-cart.actions';
import { ShoppingCartState } from './shopping-cart.interfaces';
import { shoppingCartInitialState } from './shopping-cart.state';

export const shoppingCartReducer = createReducer<ShoppingCartState>(
  shoppingCartInitialState,
  on(addToCartAction, (state): ShoppingCartState => {
    return [...state];
  }),
  on(addToCartSuccessAction, (state, { product }): ShoppingCartState => {
    return [...state, product];
  }),
  on(addToCartFailureAction, (state): ShoppingCartState => {
    return [...state];
  }),
  on(loadShoppingCartAction, (state): ShoppingCartState => {
    return [...state];
  }),
  on(loadShoppingCartSuccessAction, (state, { products }): ShoppingCartState => {
    return [...products];
  }),
  on(loadShoppingCartFailureAction, (state): ShoppingCartState => {
    return [...state];
  })
);
