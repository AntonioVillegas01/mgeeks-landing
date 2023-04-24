import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "./layout/layout.component";

import {NotFoundComponent} from "./not-found/not-found.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {AcercaComponent} from "./acerca/acerca.component";





const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: 'full'},
      {path: 'inicio', component: HomeComponent, data: {title: 'Inicio'},},
      {path: 'acerca', component: AcercaComponent, data: {title: 'Acerca'},},
      {path: 'contacto', component: ContactoComponent, data: {title: 'Contacto'},},



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
