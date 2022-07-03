import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/product';

export const getProductsAction = createAction(
  '[Products] Get Products',
  props<{ products: Product[] }>()
);
