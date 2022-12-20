import { Product } from 'src/app/app.interfaces';
import { getProductsSelector } from './products.selectors';

describe('getProductsSelector', () => {
  it('should select the products slice', () => {
    const mockState: Product[] = [
      {
        id: 1,
        title: 'The Angular Masterclass',
        author: 'Educative',
        description: 'Learn all about Angular',
        imgUrl: '../assets/img/the-angular-masterclass.jpg',
        quantity: 124,
        price: 24.38,
        cart: 0,
      }
    ];

    const result = getProductsSelector.projector([]);

    expect(result).toEqual(mockState);
  });
});