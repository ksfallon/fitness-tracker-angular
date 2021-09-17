import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "products", component: ProductComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  })

export class AppRoutingModule {

}
