import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { FormateaFechaPipe } from './utilidades/formatea-fecha.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormateaNumerosPipe } from './utilidades/formatea-numeros.pipe';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { CicliDeVidaComponent } from './ejemplos/cicli-de-vida/cicli-de-vida.component';
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { ComunicacionHijoComponent } from './ejemplos/comunicacion-hijo/comunicacion-hijo.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { SobreNosotrosComponent } from './paginas/sobre-nosotros/sobre-nosotros.component';
import { MaterialComponent } from './paginas/material/material.component';
import { ErrorComponent } from './paginas/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicosComponent,
    FormateaFechaPipe,
    FormateaNumerosPipe,
    DataBindingComponent,
    CicliDeVidaComponent,
    ComunicacionComponent,
    ComunicacionHijoComponent,
    HomeComponent,
    FormulariosComponent,
    SobreNosotrosComponent,
    MaterialComponent,
    ErrorComponent,
    CabeceraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
