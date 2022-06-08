import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatGridListModule, MatCardModule],
  exports: [MatIconModule, MatGridListModule, MatCardModule],
})
export class AngularMaterialModule {}
