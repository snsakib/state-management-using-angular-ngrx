import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getProductsSelector } from "src/app/products/state/products.selectors";
import { ProductState } from "./product.interfaces";

export const getProductSelector = createFeatureSelector<ProductState>('product')

export const getProductInfoSelector = createSelector(
  getProductsSelector,
  getProductSelector,
  (products, productId) => products.find((product) => product.id === productId)
)