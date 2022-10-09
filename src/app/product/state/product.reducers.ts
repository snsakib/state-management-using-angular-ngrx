import { createReducer, on } from "@ngrx/store";
import { getProductAction } from "./product.actions";
import { ProductState } from "./product.interfaces";
import { productInitialState } from "./product.state";

export const productReducer = createReducer<ProductState>(
  productInitialState,
  on(getProductAction, (state, { id }): ProductState => +id)
)