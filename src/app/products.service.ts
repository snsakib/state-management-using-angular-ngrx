import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_URL: string = `api`;
  private PRODUCT_URL: string = 'api/products';
  private SHOPPING_CART_URL: string = 'api/shoppingCart';

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

  public getShoppingCart(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.SHOPPING_CART_URL)
      .pipe(catchError(this.errorHandler));
  }

  public addToShoppingCart(product: Product) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post<Product>(`${this.BASE_URL}/shoppingCart`, product, headers)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(err: any) {
    let errMsg: string;

    if (err.error instanceof ErrorEvent) {
      errMsg = `Frontend Error: ${err.error.message}`;
    } else {
      errMsg = `Backend Error Code: ${err.status}: ${err.body.error}`;
    }

    return throwError(errMsg);
  }
}
