import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

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
import { FormulariosReactivosComponent } from './paginas/formularios-reactivos/formularios-reactivos.component';
import { ValidaSelectDirective } from './validaciones/valida-select.directive';
import { ModalComponent } from './paginas/modal/modal.component';
import { MomentComponent } from './paginas/moment/moment.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { LocalStorageComponent } from './paginas/local-storage/local-storage.component';
import { LocalStorage2Component } from './paginas/local-storage2/local-storage2.component';
import { LocalStorage3Component } from './paginas/local-storage3/local-storage3.component';
import SessionStorageComponent from './paginas/session-storage/session-storage.component';
import { SessionStorag2Component } from './paginas/session-storag2/session-storag2.component';
import CookieComponent from './paginas/cookie/cookie.component';
import Cookie2Component from './paginas/cookie2/cookie2.component';
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

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
    FooterComponent,
    FormulariosReactivosComponent,
    ValidaSelectDirective,
    ModalComponent,
    MomentComponent,
    ServiciosComponent,
    LocalStorageComponent,
    LocalStorage2Component,
    LocalStorage3Component,
    SessionStorageComponent,
    SessionStorag2Component,
    CookieComponent,
    Cookie2Component,
    ApiRestComponent,
    ApiRestCategoriasComponent,
    ApiRestCategoriasAddComponent,
    MaterialBotonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
