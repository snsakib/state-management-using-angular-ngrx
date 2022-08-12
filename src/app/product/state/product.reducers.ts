import { createReducer, on } from "@ngrx/store";
import { getProductAction } from "./product.actions";
import { productInitialState } from "./product.state";

export const productReducer = createReducer(
  productInitialState,
  on(getProductAction, (state, product) => ({ ...state, ...product }))
)