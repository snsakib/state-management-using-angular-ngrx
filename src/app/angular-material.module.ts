import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [MatIconModule, MatGridListModule, MatCardModule, MatButtonModule],
})
export class AngularMaterialModule {}
