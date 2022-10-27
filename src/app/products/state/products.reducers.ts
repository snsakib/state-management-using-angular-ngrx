import { createReducer, on } from "@ngrx/store";
import { ProductsService } from "src/app/products.service";
import { loadProductsAction, getProductsAction } from "./products.actions";
import { ProductsState } from "./products.interfaces";
import { productsInitialState } from "./products.state";

let productsService = new ProductsService();

export const productsReducer = createReducer<ProductsState>(
  productsInitialState,
  on(loadProductsAction, (state) => {  
    return { ...state }
  }),
  on(getProductsAction, (state, action): ProductsState => {
    return ProductsService.getProducts
  })
)