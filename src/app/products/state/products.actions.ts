import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/app.interfaces";

export const loadProductsAction = createAction(
  '[Products] Load Products'
)

export const getProductsAction = createAction(
  '[Products] Get Products'
)

// export const loadProductsFailure = createAction(
//   '[Products] Load Products Failure',
//   props<{ error: string }>()
// )