import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AllProductsComponent } from './views/pages/products/all-products/all-products.component';

const routes: Routes = [
  {
    path:'',component:BaseComponent,children:[
      {path:'products',component:AllProductsComponent},
      {path:'',redirectTo:"/products",pathMatch:"full"}
    ]
  },

  {path:"**",redirectTo:"/products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
