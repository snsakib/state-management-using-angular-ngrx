import { createReducer, on } from '@ngrx/store';
import { addToCartAction } from './cart.actions';
import { CartState } from './cart.interfaces';
import { cartInitialState } from './cart.state';

export const cartReducer = createReducer<CartState>(
  cartInitialState,
  on(addToCartAction, (state): CartState => {
    return [...state];
  })
);
