import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Store } from '@ngrx/store';
import { getProductsAction } from './state/products.actions';
import { getProductsSelector } from './state/products.selectors';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store, private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();

    this.store.select(getProductsSelector).subscribe((products: any) => this.products = products)
  }

  addToCart(product: Product) {
    if (product) {
      this.productsService.addToShoppingCart(product).subscribe();
    }
  }

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products: Product[]) => (this.store.dispatch(getProductsAction(products))));
  }
}
