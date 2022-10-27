import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductsAction } from './state/products.actions';
import { getProductsSelector } from './state/products.selectors';
import { AppState, Product } from '../app.interfaces';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select<Product[]>(getProductsSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(getProductsAction());
  }
}
