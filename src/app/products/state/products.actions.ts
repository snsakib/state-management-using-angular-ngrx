import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/product";

export const getProducts = createAction(
  '[Products] Get Products',
  props<{ products: Product[] }>()
)