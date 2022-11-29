import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';

export const addToCartAction = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);

export const addToCartSuccessAction = createAction(
  '[Cart] Add to Cart Success',
  props<{ product: Product }>()
);

export const addToCartFailureAction = createAction(
  '[Cart] Add to Cart Failure'
);

export const loadCartAction = createAction(
  '[Cart] Load Cart'
);