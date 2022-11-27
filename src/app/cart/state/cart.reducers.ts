import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';
import { addToCartAction } from './cart.actions';
import { cartInitialState } from './cart.state';

export const cartReducer = createReducer<Product[]>(
  cartInitialState,
  on(addToCartAction, (state): Product[] => {
    return [ ...state ];
  })
);
