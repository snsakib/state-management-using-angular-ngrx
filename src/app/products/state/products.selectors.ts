import { createFeatureSelector } from "@ngrx/store";
import { ProductsState } from "./products.interfaces";

export const getProductsSelector = createFeatureSelector<ProductsState>('products')