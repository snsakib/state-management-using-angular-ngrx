import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';
import { ProductsEffects } from './products.effects';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/app.interfaces';
import { getErrorAction, getProductsAction, loadProductsAction } from './products.actions';

describe('ProductsEffects', () => {
  const initialState = { products: [] };
  const productsService = jasmine.createSpyObj('productsService', [
    'getProducts'
  ]);
  let effects: ProductsEffects;
  let actions$: Observable<any>;
  let store: MockStore<any>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: ProductsService, useValue: productsService }
      ]
    });

    effects = TestBed.inject(ProductsEffects);
    store = TestBed.inject(MockStore);
    store.setState({});

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('loadProducts$', () => {
    it('should handle loadProductsAction and return a getProductsAction', () => {
      const products: Product[] = [];
      const action = loadProductsAction();
      const outcome = getProductsAction({ products });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('-a', { a: action });
        const response = cold('-b|', { b: products });
        productsService.getProducts.and.returnValue(response);

        expectObservable(effects.loadProducts$).toBe('--b', { b: outcome });
      });
    });

    it('should return an getErrorAction action, with an error, on failure', () => {
      const products: Product[] = [];
      const action = loadProductsAction();
      const error = new Error();
      const outcome = getErrorAction();

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('-a|', { a: action });
        const response = cold('-#|)', {}, error);
        productsService.getProducts.and.returnValue(response);

        expectObservable(effects.loadProducts$).toBe('--(b|)', { b: outcome });
      });
    });
  });
});