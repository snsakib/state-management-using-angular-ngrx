import { createReducer, on } from "@ngrx/store";
import { productsInitialState } from "./products.state";
import * as productsActions from './products.actions';

export const productsReducer = createReducer(
  productsInitialState,
  on(productsActions.getProductsAction, (state, { products }) => products)
)