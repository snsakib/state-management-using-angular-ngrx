import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.interfaces';
import { getCartCounterSelector } from './cart/state/cart.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-store';
  cartCounter$ = this.store.select(getCartCounterSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
