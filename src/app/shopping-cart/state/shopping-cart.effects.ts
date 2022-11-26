import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Product } from 'src/app/app.interfaces';
import { ProductsService } from 'src/app/products.service';
import {
  addToCartSuccessAction,
  addToCartFailureAction,
  addToCartAction,
  loadShoppingCartAction,
  loadShoppingCartSuccessAction,
  loadShoppingCartFailureAction,
} from './shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
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

  loadShoppingCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadShoppingCartAction),
      mergeMap((action) =>
        this.productsService.getShoppingCart().pipe(
          map((products: Product[]) => loadShoppingCartSuccessAction({ products })),
          catchError(() => of(loadShoppingCartFailureAction()))
        )
      )
    );
  });
}
