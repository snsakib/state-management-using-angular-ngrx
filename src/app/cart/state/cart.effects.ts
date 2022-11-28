import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from 'src/app/app.interfaces';
import { ProductsService } from 'src/app/products.service';
import { addToCartAction, addToCartFailureAction, addToCartSuccessAction } from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  addToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToCartAction),
      mergeMap(({ product }) =>
        this.productsService.addToShoppingCart(product).pipe(
          map((product: Product) => {
            if (product) {
              return addToCartSuccessAction({ product });
            } else {
              throw new Error();
            }
          }),
          catchError(() => of(addToCartFailureAction()))
        )
      )
    );
  });
}
