import { createFeatureSelector } from "@ngrx/store";
import { Product } from "src/app/product";

export const getProductsSelector = createFeatureSelector<any>('products')