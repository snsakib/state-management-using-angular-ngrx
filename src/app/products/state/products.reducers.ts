import { createReducer, on } from "@ngrx/store";
import { getProductsAction } from "./products.actions";
import { productsInitialState } from "./products.state";

export const productsReducer = createReducer(
  productsInitialState,
  on(getProductsAction, (state, products) => {
    return {
      ...state,
      data: products.data
    }
  })
)