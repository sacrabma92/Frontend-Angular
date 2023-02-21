import { EjemploService } from './../../services/ejemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  texto?: string;
  texto2?: string;

  constructor(
    private service: EjemploService
  ){}

  ngOnInit(){
    this.texto =  this.service.getDato();
    this.texto2 = this.service.otroMetodo('Carlos', 'Ramirez')
  }

}
