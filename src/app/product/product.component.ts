import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { getProduct } from './state/product.action';
import { selectProduct } from './state/product.selector';

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
    private store: Store<any>,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.productService
      .getProduct(this.id)
      .subscribe((product: Product) => this.store.dispatch(getProduct({product})));

    this.store.select(selectProduct).subscribe(product => {
      this.product = product
    })
  }

  // addToCart() {
  //   this.productService
  //     .addToShoppingCart(this.product)
  //     .subscribe((product: Product) => console.log(product));
  // }

  addToCart() {
    this.store.dispatch({
      type: '[PRODUCT] Add To Cart',
      payload: {
        product: this.product
      }
    })
  }
}
