import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.interfaces';

export const getCartSelector = createFeatureSelector<CartState>('cart');

export const getCartCounterSelector = createSelector(
  getCartSelector,
  (cart) => cart.length
);
