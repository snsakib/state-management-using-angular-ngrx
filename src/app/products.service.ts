import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_URL: string = `api`;
  private PRODUCT_URL: string = 'api/products';

  private cartCounter: number = 0;
  cartCounter$ = new BehaviorSubject(0);

  private shoppingCart: any = {
    products: [],
    total: 0,
  };
  shoppingCart$ = new BehaviorSubject<any>({ products: [], total: 0 });

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.PRODUCT_URL)
      .pipe(catchError(this.errorHandler));
  }

  public getProduct(productId: number): Observable<any> {
    return this.httpClient
      .get<any>(`${this.PRODUCT_URL}/${productId}`)
      .pipe(catchError(this.errorHandler));
  }

  public createProduct(product: any): Observable<any> {
    return this.httpClient
      .post<any>(`${this.PRODUCT_URL}`, product)
      .pipe(catchError(this.errorHandler));
  }

  public deleteProduct(productId: number): Observable<any> {
    return this.httpClient
      .delete<any>(`${this.PRODUCT_URL}/${productId}`)
      .pipe(catchError(this.errorHandler));
  }

  public updateProduct(product: any): Observable<any> {
    return this.httpClient.put<any>(
      `${this.PRODUCT_URL}/${product.id}`,
      product
    );
  }

  public addToShoppingCart(product: any) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post<any>(`${this.BASE_URL}/shoppingCart`, product, headers)
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

  public deleteFromShoppingCart(productId: number): Observable<any> {
    return this.httpClient
      .delete<any>(`${this.BASE_URL}/shoppingCart/${productId}`)
      .pipe(
        tap(() => {
          let updatedCart = this.shoppingCart.products.filter(
            (product: any) => product.id !== productId
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

  public updateShoppingCartItem(product: any): Observable<any> {
    return this.httpClient
      .put<any>(`${this.BASE_URL}/shoppingCart/${product.id}`, product)
      .pipe(
        tap(() => {
          this.calculateCartTotal();
        })
      );
  }

  public calculateCartTotal() {
    this.shoppingCart.total = 0;
    this.shoppingCart.products.forEach((product: any) => {
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