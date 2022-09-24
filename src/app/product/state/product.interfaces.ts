import * as States from 'src/app/app.interfaces';

export type ProductState = States.Product;

export interface AppState extends States.AppState {
  product: ProductState;
}
