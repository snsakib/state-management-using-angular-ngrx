  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { CartComponent } from './cart/cart.component';
  import { ProductsComponent } from './products/products.component';
  
  const routes: Routes = [
    { path: '', component: ProductsComponent },
    {
      path: 'product/:id',
      loadChildren: () =>
        import('./product/product.module').then((m) => m.ProductModule),
    },
    { path: 'cart', component: CartComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
