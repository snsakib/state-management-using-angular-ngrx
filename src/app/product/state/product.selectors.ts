import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getProductsSelector } from "src/app/products/state/products.selectors";
import { ProductState } from "./product.interfaces";

export const getProductSelector = createFeatureSelector<ProductState>('product')

export const getProductInfoSelector = createSelector(
  getProductsSelector,
  getProductSelector,
  (products, productId) => {

    let selectedProduct = products.find((product) => product.id === productId);

    if(!selectedProduct) {
      return {
        id: 0,
        title: "",
        author: "",
        description: "",
        imgUrl: "",
        price: 0,
        quantity: 0,
        cart: 0
      }
    } else {
      return selectedProduct;
    } 

  }
)