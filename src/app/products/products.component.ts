import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Store } from '@ngrx/store';
import { getProducts } from './state/products.actions';
import { selectProducts } from './state/products.selector';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store, private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe((products: Product[]) => this.store.dispatch(getProducts({ products })));

    this.store.select(selectProducts).subscribe(products => {
      this.products = products
    })
  }

  addToCart(product: Product) {
    if (product) {
      this.productsService.addToShoppingCart(product).subscribe();
    }
  }
}
