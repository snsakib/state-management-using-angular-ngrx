import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';
import { CartState } from './cart.interfaces';

export const getCartSelector = createFeatureSelector<CartState>('cart');

export const getCartCounterSelector = createSelector(
  getCartSelector,
  (cart) => cart.length
);

export const getCartTotalSelector = createSelector(
  getCartSelector, 
  (cart) => calculateCartTotal(cart)
);

function calculateCartTotal(cart: Product[]) {
  let total = 0;
  cart.forEach((product: Product) => {
    total += product.price;
  });

  return total;
}
