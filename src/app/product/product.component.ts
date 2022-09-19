import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../app.interfaces';
import { ProductsService } from '../products.service';
import { getProductAction } from './state/product.actions';
import { getProductSelector } from './state/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product$ = this.store.select<Product>(getProductSelector);

  constructor(
    private store: Store,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.getProduct(this.id);
  }

  getProduct(id: number) {
    this.productsService
      .getProduct(id)
      .subscribe((product: Product) => (this.store.dispatch(getProductAction({ product }))));
  }
}
