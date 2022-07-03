import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/product";

export const selectProducts = createFeatureSelector<Product[]>('products');