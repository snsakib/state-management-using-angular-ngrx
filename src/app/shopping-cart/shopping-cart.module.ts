import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class ShoppingCartModule {}
