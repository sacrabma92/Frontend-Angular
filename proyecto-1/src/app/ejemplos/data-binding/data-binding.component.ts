import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  disable: boolean = false;
  color: string = 'red';
  texto: string = 'Mi perro habla';
  img: string = 'imagen1.png';
  ancho: number = 100;
  alto: number = 100;

  cambiar(){
    this.img = 'imagen2.jpeg';
    this.ancho = 300;
    this.alto = 400;
  }

}
