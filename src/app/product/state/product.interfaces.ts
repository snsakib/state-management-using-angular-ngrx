import * as States from 'src/app/app.interfaces';

export type ProductState = number;

export interface AppState extends States.AppState {
  product: ProductState;
}
