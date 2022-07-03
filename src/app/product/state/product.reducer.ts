import { createReducer, on } from "@ngrx/store";
import { productInitialState } from "./product.state";
import * as productActions from './product.actions';

export const productReducer = createReducer(
  productInitialState,
  on(productActions.getProductAction, (state, product) => product)
)