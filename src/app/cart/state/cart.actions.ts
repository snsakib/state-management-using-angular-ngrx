import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/app.interfaces';

export const addToCartAction = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);
