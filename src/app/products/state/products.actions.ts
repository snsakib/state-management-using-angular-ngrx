  import { createAction, props } from "@ngrx/store";
  import { Product } from "src/app/app.interfaces";
  
  export const getProductsAction = createAction(
    '[Products] Get Products',
    props<{ products: Product[] }>()
  )
  
  export const loadProductsAction = createAction(
    '[Products] Load Products'
  )
  
  export const getErrorAction = createAction(
    '[Products] Load Products Error',
    props<{ error: string }>()
  )