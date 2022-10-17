import { createReducer, on } from "@ngrx/store";
import { getProductsAction, loadProductsSuccess } from "./products.actions";
import { ProductsState } from "./products.interfaces";
import { productsInitialState } from "./products.state";

export const productsReducer = createReducer<ProductsState>(
  productsInitialState,
  on(getProductsAction, (state) => {  
    return { ...state }
  }),
  on(loadProductsSuccess, (state, action): ProductsState => {
    return action.products
  })
)