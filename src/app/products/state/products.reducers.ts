import { createReducer, on } from "@ngrx/store";
import { loadProductsAction, getProductsAction } from "./products.actions";
import { ProductsState } from "./products.interfaces";
import { productsInitialState } from "./products.state";

export const productsReducer = createReducer<ProductsState>(
  productsInitialState,
  on(loadProductsAction, (state) => {  
    return { ...state }
  }),
  on(getProductsAction, (state, { products }): ProductsState => products)
)