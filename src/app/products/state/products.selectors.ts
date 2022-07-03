import { createFeatureSelector } from "@ngrx/store";

export const getProductsSelector = createFeatureSelector<any>('products')