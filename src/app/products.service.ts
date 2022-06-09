import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private SERVER_URL: string = 'api/products';
  private products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.SERVER_URL).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      tap((data) => (this.products = data)),
      catchError(this.errorHandler)
    );
  }

  public getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.SERVER_URL}/${productId}`).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.errorHandler)
    );
  }
  public createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.SERVER_URL}`, product);
  }

  public deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.SERVER_URL}/${productId}`);
  }
  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.SERVER_URL}/${product.id}`, product);
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
