import { TestBed } from "@angular/core/testing"
import { Actions } from "@ngrx/effects";
import { provideMockActions } from "@ngrx/effects/testing";
import { TestScheduler } from "rxjs/testing";
import { ProductsService } from "src/app/products.service";
import { ProductsEffects } from "./products.effects";

describe('ProductsEffects', () => {
  let effects: ProductsEffects;
  let actions$: Actions;
  let productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getProducts']);
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
  })

  
})