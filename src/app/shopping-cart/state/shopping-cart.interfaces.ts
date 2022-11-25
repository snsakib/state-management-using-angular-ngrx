import * as States from 'src/app/app.interfaces';

export type ShoppingCartState = States.Product[];

export interface AppState extends States.AppState {
  cart: ShoppingCartState;
}
