import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './sections/hero/hero.component';
import { WhatWeDoComponent } from './sections/what-we-do/what-we-do.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    WhatWeDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    HeroComponent,
    WhatWeDoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
