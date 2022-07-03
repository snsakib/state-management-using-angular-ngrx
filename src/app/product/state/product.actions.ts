import { createAction, props } from "@ngrx/store";

export const getProductAction = createAction(
  '[Product] Get Product',
  props<any>()
)