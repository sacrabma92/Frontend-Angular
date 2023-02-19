import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cicli-de-vida',
  templateUrl: './cicli-de-vida.component.html',
  styleUrls: ['./cicli-de-vida.component.css']
})
export class CicliDeVidaComponent implements OnInit, OnDestroy {

  texto: string = 'Texto Inicial';

  constructor(){
    // Se ejecuta al inicio de la clase
    console.log('Ejecución desde el constructor');
  }

  ngOnInit(){
    console.log("Ejecución desde el OnInit");
  }

  ngOnDestroy(){
    // Se ejecuta cuando se cierra el componente
    console.log('Cierre');
  }

  ngDoCheck(){
    //Se ejecuta cuando el componente es afectado por algun cambio
    console.log('Se ejecuta el metodo ngDoCheck');
  }

  cambiarTexto(){
    this.texto = 'Otro valor con el click'
    console.log('Ejecución en el ngDoCheck cambiadno el texto');
  }

}
