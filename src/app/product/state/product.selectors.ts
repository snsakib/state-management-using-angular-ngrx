import { createFeatureSelector } from "@ngrx/store";

export const getProductSelector = createFeatureSelector<any>('product')