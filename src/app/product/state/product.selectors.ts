import { createFeatureSelector } from "@ngrx/store";
import { ProductState } from "./product.interfaces";

export const getProductSelector = createFeatureSelector<ProductState>('product')