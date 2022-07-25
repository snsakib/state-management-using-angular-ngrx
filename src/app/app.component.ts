import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'book-store';
  cartTotal = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getCartCount().subscribe((cartCount) => this.cartTotal = cartCount);
  }
}
