import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './feature/products/products.component';
import { CartComponent } from './feature/cart/cart.component';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';


@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent
  ],
  imports: [
    AppComponent,
    BrowserModule
  ],
  providers: [
    provideRouter(routes)
  ],
  
})
export class AppModule { }
