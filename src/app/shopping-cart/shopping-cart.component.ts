import { Component, OnInit } from '@angular/core';
import { Cart, Product } from '../app.interfaces';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart = {
    products: [],
    total: 0
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.productsService.shoppingCart$.subscribe((data) => this.cart = data);
  }

  deleteProduct(id: number) {
    this.productsService.deleteFromShoppingCart(id).subscribe();
  }

  updateProduct(product: Product) {
    this.productsService.updateShoppingCartItem(product).subscribe();
  }
}