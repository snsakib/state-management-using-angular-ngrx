import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.interfaces';
import { getCartCounterSelector } from './shopping-cart/state/shopping-cart.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'book-store';
  cartCounter$ = this.store.select(getCartCounterSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
