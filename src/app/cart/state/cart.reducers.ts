import { createReducer, on } from '@ngrx/store';
import {
  addToCartAction,
  addToCartFailureAction,
  addToCartSuccessAction,
  loadCartAction,
  loadCartFailureAction,
  loadCartSuccessAction,
} from './cart.actions';
import { CartState } from './cart.interfaces';
import { cartInitialState } from './cart.state';

export const cartReducer = createReducer<CartState>(
  cartInitialState,
  on(addToCartAction, (state): CartState => {
    return [...state];
  }),
  on(addToCartSuccessAction, (state, { product }): CartState => {
    return [...state, product];
  }),
  on(addToCartFailureAction, (state): CartState => {
    return [...state];
  }),
  on(loadCartAction, (state): CartState => {
    return [...state];
  }),
  on(loadCartSuccessAction, (state, { products }): CartState => {
    return [...products];
  }),
  on(loadCartFailureAction, (state): CartState => {
    return [...state];
  })
);
