import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  addToCart(product: Product) {
    if (product) {
      this.productsService.addToShoppingCart(product).subscribe();
    }
  }

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products: Product[]) => (this.products = products));
  }
}
