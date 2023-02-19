import { Component } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent {

  texto1: string = "texto 1";
  texto2: string = "texto 2";

  hijo?: string;

  actualizarHijo(value: string){
    this.hijo = value;
  }

}
