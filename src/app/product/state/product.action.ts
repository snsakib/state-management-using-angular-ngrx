import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/product";

export const getProduct = createAction(
  '[Product] Get Product',
  props<{product: Product}>()
)