import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "./layout/layout.component";

import {NotFoundComponent} from "./not-found/not-found.component";





const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: 'full'},
      {path: 'inicio', component: HomeComponent, data: {title: 'Inicio'},},



      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
