import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/product";
import { getProducts } from "./products.actions";

export const initialState = <Product[]>[];

export const productsReducer = createReducer(
  initialState,
  on(getProducts, (state, { products }) => products )
)