import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routes principals
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  //modules add in the imports
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log(AppRoutingModule.prototype);
  }
}
//add
