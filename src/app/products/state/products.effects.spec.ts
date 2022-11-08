import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestScheduler } from 'rxjs/testing';
import { ProductsEffects } from './products.effects';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/app.interfaces';
import { getErrorAction, getProductsAction, loadProductsAction } from './products.actions';
import { Actions } from '@ngrx/effects';

describe('ProductsEffects', () => {
  const productsServiceSpy = jasmine.createSpyObj('ProductsService', [
    'getProducts'
  ]);
  let effects: ProductsEffects;
  let actions$: Actions;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$),
        { provide: ProductsService, useValue: productsServiceSpy }
      ]
    });

    effects = TestBed.inject(ProductsEffects);

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
        productsServiceSpy.getProducts.and.returnValue(response);

        expectObservable(effects.loadProducts$).toBe('--b', { b: outcome });
      });
    });

    it('should return an getErrorAction action, with an error, on failure', () => {
      const action = loadProductsAction();
      const error = new Error();
      const outcome = getErrorAction();

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('-a|', { a: action });
        const response = cold('-#|)', {}, error);
        productsServiceSpy.getProducts.and.returnValue(response);

        expectObservable(effects.loadProducts$).toBe('--(b|)', { b: outcome });
      });
    });
  });
});