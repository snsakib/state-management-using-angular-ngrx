import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/app.interfaces";
import { getProductsSelector } from "src/app/products/state/products.selectors";
import { ProductState } from "./product.interfaces";

export const getProductSelector = createFeatureSelector<ProductState>('product')

export const getProductInfoSelector = createSelector(
  getProductsSelector,
  getProductSelector,
  (products, productId) => {
    let selectedProduct: Product = {
      id: 0,
      title: "",
      author: "",
      description: "",
      imgUrl: "",
      price: 0,
      quantity: 0,
      cart: 0
    }

    let filteredProduct = products.find((product) => product.id === productId);

    if(filteredProduct) {
      selectedProduct = {
        ...filteredProduct
      }
    }

    return selectedProduct;
  }
)