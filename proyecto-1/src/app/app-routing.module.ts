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
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'reactivos', component: FormulariosReactivosComponent },
  { path: 'modal', component: ModalComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
