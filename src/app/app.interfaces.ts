import { CartState } from './cart/state/cart.interfaces';
import { ProductsState } from './products/state/products.interfaces';

export interface Product {
  id: number;
  title: string;
  author: string;
  description: string;
  imgUrl: string;
  price: number;
  quantity: number;
  cart: number;
}

export interface AppState {
  products: ProductsState;
  cart: CartState;
}
