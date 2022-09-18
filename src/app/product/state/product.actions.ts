import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/app.interfaces";

export const getProductAction = createAction(
  '[Product] Get Product',
  props<{ product: Product }>()
)