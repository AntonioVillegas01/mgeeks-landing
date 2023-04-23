import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
