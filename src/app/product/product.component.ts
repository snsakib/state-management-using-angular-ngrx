import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../app.interfaces';
import { addToCartAction } from '../shopping-cart/state/shopping-cart.actions';
import { AppState } from './state/product.interfaces';
import { getProductInfoSelector } from './state/product.selectors';
import { getProductAction } from './state/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product$ = this.store.select<Product>(getProductInfoSelector);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.getProduct(this.id);
  }

  getProduct(id: number) {
    this.store.dispatch(getProductAction({ id }));
  }

  addToCart(product: Product) {
    this.store.dispatch(addToCartAction({ product }));
  }
}
