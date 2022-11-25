import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductsSelector } from './state/products.selectors';
import { AppState, Product } from '../app.interfaces';
import { loadProductsAction } from './state/products.actions';
import { initiateAddToCartAction } from '../shopping-cart/state/shopping-cart.actions';
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
    this.store.dispatch(loadProductsAction());
  }

  addToCart(product: Product) {
    let updatedProduct = { ...product, cart: product.cart + 1 };
    this.store.dispatch(initiateAddToCartAction({ product: updatedProduct }));
  }
}
