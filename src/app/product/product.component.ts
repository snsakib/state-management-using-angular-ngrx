import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsService } from '../products.service';
import { getProductAction } from './state/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product: any = {
    id: 0,
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    quantity: 0,
    price: 0,
    cart: 0
  };

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
      .subscribe((product: any) => (this.store.dispatch(getProductAction({ product }))));
  }
}
