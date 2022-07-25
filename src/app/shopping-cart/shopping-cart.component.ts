import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart: Product[] = [];
  selected: string = '1';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.productsService.getShoppingCart().subscribe((data) => {
      this.cart = data;
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteFromShoppingCart(id).subscribe();
  }
}
