import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';
import Cookie2Component from './paginas/cookie2/cookie2.component';
import CookieComponent from './paginas/cookie/cookie.component';
import { SessionStorag2Component } from './paginas/session-storag2/session-storag2.component';
import SessionStorageComponent from './paginas/session-storage/session-storage.component';
import { LocalStorage3Component } from './paginas/local-storage3/local-storage3.component';
import { LocalStorage2Component } from './paginas/local-storage2/local-storage2.component';
import { LocalStorageComponent } from './paginas/local-storage/local-storage.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { MomentComponent } from './paginas/moment/moment.component';
import { ModalComponent } from './paginas/modal/modal.component';
import { FormulariosReactivosComponent } from './paginas/formularios-reactivos/formularios-reactivos.component';
import { ErrorComponent } from './paginas/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { SobreNosotrosComponent } from './paginas/sobre-nosotros/sobre-nosotros.component';
import { MaterialComponent } from './paginas/material/material.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'material/botones', component: MaterialBotonesComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'reactivos', component: FormulariosReactivosComponent },
  { path: 'moment', component: MomentComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'localstorage', component: LocalStorageComponent },
  { path: 'localstorage2', component: LocalStorage2Component },
  { path: 'localstorage3', component: LocalStorage3Component },
  { path: 'sessionstorage', component: SessionStorageComponent },
  { path: 'sessionstorage2', component: SessionStorag2Component },
  { path: 'cookie', component: CookieComponent },
  { path: 'cookie2', component: Cookie2Component },

  { path: 'api-rest', component: ApiRestComponent },
  { path: 'api/categorias', component: ApiRestCategoriasComponent },
  { path: 'api/categorias/add', component: ApiRestCategoriasAddComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
