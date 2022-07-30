import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_URL: string = `api`;
  private PRODUCT_URL: string = 'api/products';

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.httpClient
      .get<any>(this.PRODUCT_URL)
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

  public getShoppingCart(): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/shoppingCart`).pipe(
      catchError(this.errorHandler)
    );
  }

  public addToShoppingCart(product: any) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.httpClient
      .post<any>(`${this.BASE_URL}/shoppingCart`, product, headers)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public deleteFromShoppingCart(productId: number): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.BASE_URL}/shoppingCart/${productId}`
    );
  }

  public updateShoppingCartItem(productId: number): Observable<any> {
    let product = this.getProduct(productId);
    return this.httpClient.put<any>(
      `${this.BASE_URL}/shoppingCart/${productId}`,
      product
    );
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
