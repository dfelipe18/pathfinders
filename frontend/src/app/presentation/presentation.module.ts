import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PresentationRoutingModule } from './presentation-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [ProductsComponent, CartComponent, HomePageComponent],
  imports: [CommonModule, HttpClientModule, PresentationRoutingModule ],
})
export class PresentationModule {}
