import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/product";
import { getProduct } from "./product.action";

const initialState = <Product>{};

export const productReducer = createReducer(
  initialState,
  on(getProduct, (state, { product }) => product )
)