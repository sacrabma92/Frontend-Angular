import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor() { }

  getDato(){
    return 'Hola desde el servicio'
  }

  otroMetodo(nombre: string, apellido: string){
    return `tu nombre es ${nombre} ${apellido}`
  }
}
