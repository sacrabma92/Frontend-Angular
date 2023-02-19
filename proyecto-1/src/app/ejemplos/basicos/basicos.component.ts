import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombre?: string = 'Carlos';
  correo: string = 'correo@correo.com';
  edad: number = 31;
  fecha = new Date();
  paises: Array<any> = ['Colombia', 'Venezuela', 'España', 'Peru', 'Argentina', 'Canada'];
  numero: number = 14;
  numeros = [1,2,3,4,5,6]

}
