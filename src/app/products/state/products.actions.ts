import { createAction, props } from "@ngrx/store";

export const getProductsAction = createAction(
  '[Products] Get Products',
  props<any>()
)