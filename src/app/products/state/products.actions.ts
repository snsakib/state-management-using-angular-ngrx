import { createAction, props } from "@ngrx/store";

export const getProductsAction = createAction(
  '[Product] Get Products',
  props<any>()
)