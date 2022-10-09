import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Cart, Product } from './app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_URL: string = `api`;
  private PRODUCT_URL: string = 'api/products';

  private cartCounter: number = 0;
  cartCounter$ = new BehaviorSubject(0);

  private shoppingCart: Cart = {
    products: [],
    total: 0,
  };
  shoppingCart$ = new BehaviorSubject<Cart>({ products: [], total: 0 });

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.PRODUCT_URL)
      .pipe(catchError(this.errorHandler));
  }

  public getProduct(productId: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.PRODUCT_URL}/${productId}`)
      .pipe(catchError(this.errorHandler));
  }

  public createProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(`${this.PRODUCT_URL}`, product)
      .pipe(catchError(this.errorHandler));
  }

  public deleteProduct(productId: number): Observable<Product> {
    return this.httpClient
      .delete<Product>(`${this.PRODUCT_URL}/${productId}`)
      .pipe(catchError(this.errorHandler));
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.PRODUCT_URL}/${product.id}`,
      product
    );
  }

  public addToShoppingCart(product: Product) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post<Product>(`${this.BASE_URL}/shoppingCart`, product, headers)
      .pipe(
        tap((data) => {
          if (data && data.id === product.id) {
            this.shoppingCart.products.push(data);
            this.shoppingCart.total += product.price * product.cart;
            this.shoppingCart$.next(this.shoppingCart);
            this.cartCounter++;
            this.cartCounter$.next(this.cartCounter);
          }
        }, catchError(this.errorHandler))
      );
  }

  public deleteFromShoppingCart(productId: number): Observable<Product> {
    return this.httpClient
      .delete<Product>(`${this.BASE_URL}/shoppingCart/${productId}`)
      .pipe(
        tap(() => {
          let updatedCart = this.shoppingCart.products.filter(
            (product: Product) => product.id !== productId
          );
          this.shoppingCart.products = updatedCart;
          this.calculateCartTotal();
          this.shoppingCart$.next(this.shoppingCart);
          this.cartCounter--;
          this.cartCounter$.next(this.cartCounter);
        }),
        catchError(this.errorHandler)
      );
  }

  public updateShoppingCartItem(product: Product): Observable<Product> {
    return this.httpClient
      .put<Product>(`${this.BASE_URL}/shoppingCart/${product.id}`, product)
      .pipe(
        tap(() => {
          this.calculateCartTotal();
        })
      );
  }

  public calculateCartTotal() {
    this.shoppingCart.total = 0;
    this.shoppingCart.products.forEach((product: Product) => {
      this.shoppingCart.total += product.price * product.cart;
    });
  }

  private errorHandler(err: any) {
    let errMsg: string;

    if (err.error instanceof ErrorEvent) {
      errMsg = `Frontend Error: ${err.error.message}`;
    } else {
      errMsg = `Backend Error Code: ${err.status}: ${err.body.error}`;
    }

    console.log(err);

    return throwError(errMsg);
  }
}
