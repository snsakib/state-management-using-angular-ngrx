import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';

export const initiateAddToCartAction = createAction(
  '[Shopping Cart] Initiate Add to Cart',
  props<{ product: Product }>()
);

export const addToCartAction = createAction(
  '[Shopping Cart] Add to Cart',
  props<{ product: Product }>()
);

export const addToCartErrorAction = createAction(
  '[Shopping Cart] Add to Cart Error'
);

export const loadShoppingCartAction = createAction(
  '[Shopping Cart] Load Shopping Cart'
);

export const getShoppingCartAction = createAction(
  '[Shopping Cart] Get Shopping Cart',
  props<{ products: Product[] }>()
);

export const shoppingCartErrorAction = createAction(
  '[Shopping Cart] Shopping Cart Error'
);
