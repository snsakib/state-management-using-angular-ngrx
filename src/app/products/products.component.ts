import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Store } from '@ngrx/store';
import { getProductsAction } from './state/products.actions';
import { getProductsSelector } from './state/products.selectors';
import { AppState, Product } from '../app.interfaces';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select<Product[]>(getProductsSelector);

  constructor(private store: Store<AppState>, private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(getProductsAction());
  }
}
