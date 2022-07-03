import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import * as productActions from './state/product.actions';
import * as productSelectors from './state/product.selectors';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product: Product = {
    id: 0,
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    quantity: 0,
    price: 0,
  };

  constructor(
    private store: Store,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.getProduct();

    this.store.select(productSelectors.getProductSelector).subscribe(product => this.product = product);
  }

  getProduct() {
    this.productService
      .getProduct(this.id)
      .subscribe((product: Product) => this.store.dispatch(productActions.getProductAction(product)));
  }
}
