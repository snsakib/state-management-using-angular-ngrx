import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Product } from 'src/app/app.interfaces';
import { ProductsService } from 'src/app/products.service';
import {
  addToCartAction,
  addToCartErrorAction,
  getShoppingCartAction,
  initiateAddToCartAction,
  loadShoppingCartAction,
  shoppingCartErrorAction,
} from './shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  addToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initiateAddToCartAction),
      mergeMap(({ product }) =>
        this.productsService.addToShoppingCart(product).pipe(
          map((product: Product) => {
            if (product) {
              return addToCartAction({ product });
            } else {
              throw new Error();
            }
          }),
          catchError(() => of(addToCartErrorAction()))
        )
      )
    );
  });

  loadShoppingCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadShoppingCartAction),
      mergeMap((action) =>
        this.productsService.getShoppingCart().pipe(
          map((products: Product[]) => getShoppingCartAction({ products })),
          catchError(() => of(shoppingCartErrorAction()))
        )
      )
    );
  });
}
