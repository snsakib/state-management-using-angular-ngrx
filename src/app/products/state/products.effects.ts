import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Product } from "src/app/app.interfaces";
import { ProductsService } from "src/app/products.service";
import { loadProductsAction, getProductsAction, getErrorAction } from "./products.actions";

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsAction),
      mergeMap(action => this.productsService.getProducts().pipe(
        map((products: Product[]) => getProductsAction({ products })),
        catchError(() => of(getErrorAction()))
      ))
    )
  })
}