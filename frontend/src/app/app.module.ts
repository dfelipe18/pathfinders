import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PresentationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
