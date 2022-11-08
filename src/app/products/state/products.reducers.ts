import { createReducer, on } from "@ngrx/store";
import { loadProductsAction, getProductsAction, getErrorAction } from "./products.actions";
import { ProductsState } from "./products.interfaces";
import { productsInitialState } from "./products.state";

export const productsReducer = createReducer<ProductsState>(
  productsInitialState,
  on(getProductsAction, (state, { products }): ProductsState => [ ...products ]),
  on(loadProductsAction, (state): ProductsState => {  
    return [ ...state ];
  }),
  on(getErrorAction, (state): ProductsState => {
    return [ ...state ];
  })
)