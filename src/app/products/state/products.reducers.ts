import { createReducer, on } from "@ngrx/store";
import { getProductsAction } from "./products.actions";
import { ProductsState } from "./products.interfaces";
import { productsInitialState } from "./products.state";

export const productsReducer = createReducer<ProductsState>(
  productsInitialState,
  on(getProductsAction, (state, { products }): ProductsState => [ ...products ])
)