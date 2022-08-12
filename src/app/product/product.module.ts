import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    StoreModule.forFeature('product', {})
  ]
})
export class ProductModule { }
