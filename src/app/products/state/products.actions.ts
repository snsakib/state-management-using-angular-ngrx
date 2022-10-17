import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/app.interfaces";

export const getProductsAction = createAction(
  '[Products] Get Products'
)

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
)

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
)