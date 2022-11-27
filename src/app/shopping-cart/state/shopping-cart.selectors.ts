import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';
import { ShoppingCartState } from './shopping-cart.interfaces';

function calculateCartTotal(cart: Product[]) {
  let total = 0;
  cart.forEach((product: Product) => {
    total += product.price
  });

  return total;
}

export const getShoppingCartSelector =
  createFeatureSelector<ShoppingCartState>('cart');

export const getCartCounterSelector = createSelector(
  getShoppingCartSelector,
  (cart) => cart.length
);

export const getCartTotalSelector = createSelector(
  getShoppingCartSelector,
  (cart) => calculateCartTotal(cart)
);
