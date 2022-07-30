import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  addToCart(product: any) {
    if (product) {
      this.productsService.addToShoppingCart(product).subscribe();
    }
  }

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products: any) => (this.products = products));
  }
}
