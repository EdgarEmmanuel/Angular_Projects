
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Blog} from '../Blog';
import { BlogOneComponent } from './blog-one/blog-one.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Blog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
