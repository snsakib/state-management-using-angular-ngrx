import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';

export const addToCartAction = createAction(
  '[Shopping Cart] Add to Cart',
  props<{ product: Product }>()
);

export const addToCartSuccessAction = createAction(
  '[Shopping Cart] Add to Cart Success',
  props<{ product: Product }>()
);

export const addToCartFailureAction = createAction(
  '[Shopping Cart] Add to Cart Failure'
);

export const loadShoppingCartAction = createAction(
  '[Shopping Cart] Load Shopping Cart'
);

export const loadShoppingCartSuccessAction = createAction(
  '[Shopping Cart] Load Shopping Cart Success',
  props<{ products: Product[] }>()
);

export const loadShoppingCartFailureAction = createAction(
  '[Shopping Cart] Load Shopping Cart Failure'
);
