import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products/state/products.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/state/products.effects';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ShoppingCartEffects } from './shopping-cart/state/shopping-cart.effects';
import { shoppingCartReducer } from './shopping-cart/state/shopping-cart.reducers';
@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ShoppingCartModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    StoreModule.forRoot({
      products: productsReducer,
      cart: shoppingCartReducer,
    }),
    StoreDevtoolsModule.instrument({
      name: 'Angular NgRx',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ProductsEffects, ShoppingCartEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
