import { Product } from 'src/app/app.interfaces';
import { getProductsAction } from './products.actions';
import { productsReducer } from './products.reducers';
import { productsInitialState } from './products.state';

describe('ProductsReducers: getProductsAction', () => {
  it('should update the state in an immutable way', () => {
    const newState: Product[] = [
      {
        id: 1,
        title: 'The Angular Masterclass',
        author: 'Educative',
        description: 'Learn all about Angular',
        imgUrl: '../assets/img/the-angular-masterclass.jpg',
        quantity: 124,
        price: 24.38,
        cart: 0,
      },
    ];
    const action = getProductsAction({ products: newState });
    const state = productsReducer(productsInitialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});
