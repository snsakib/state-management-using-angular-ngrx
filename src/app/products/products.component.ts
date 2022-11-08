import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductsSelector } from './state/products.selectors';
import { AppState, Product } from '../app.interfaces';
import { loadProductsAction } from './state/products.actions';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select<Product[]>(getProductsSelector);

  constructor(
    private store: Store<AppState>,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  addToCart(product: Product) {
    if (product) {
      let updatedProduct = {...product, cart: product.cart + 1};
      this.productsService.addToShoppingCart(updatedProduct).subscribe();
    }
  }

  getProducts() { 
    this.store.dispatch(loadProductsAction())
  }
}
