import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BasicosComponent } from './ejemplos/basicos/basicos.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
