import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer } from './state/shopping-cart.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingCartEffects } from './state/shopping-cart.effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    StoreModule.forFeature('cart', shoppingCartReducer),
    EffectsModule.forFeature([ShoppingCartEffects]),
  ],
})
export class ShoppingCartModule {}
