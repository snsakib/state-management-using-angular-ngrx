import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestScheduler } from 'rxjs/testing';
import { Product } from 'src/app/app.interfaces';
import { ProductsService } from 'src/app/products.service';
import { getProductsAction, loadProductsAction } from './products.actions';
import { ProductsEffects } from './products.effects';

describe('ProductsEffects: loadProducts$', () => {
  let effects: ProductsEffects;
  let actions$: Actions;
  let productsServiceSpy = jasmine.createSpyObj('ProductsService', [
    'getProducts',
  ]);
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$),
        { provide: ProductsService, useValue: productsServiceSpy },
      ],
    });

    effects = TestBed.inject(ProductsEffects);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should handle loadProductsAction and return getProductsAction on success', () => {
    const products: Product[] = [
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
    let action = loadProductsAction();
    let originalResponse = getProductsAction({ products });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions$ = hot('-a', { a: action });
      let mockResponse = cold('-b|', { b: products });

      productsServiceSpy.getProducts.and.returnValue(mockResponse);

      expectObservable(effects.loadProducts$).toBe('--c', { c: [] });
    });
  });
});
