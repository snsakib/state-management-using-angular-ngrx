import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { Product } from "src/app/app.interfaces";
import { ProductsService } from "src/app/products.service";
import { getProductsAction, loadProductsSuccess } from "./products.actions";

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsAction),
      mergeMap(action => this.productsService.getProducts().pipe(
        map((products: Product[]) => loadProductsSuccess({ products }))
      ))
    )
  })
}