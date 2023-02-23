import { CategoriasReponse } from './../../interfaces/categorias_response';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api-rest-categorias',
  templateUrl: './api-rest-categorias.component.html',
  styleUrls: ['./api-rest-categorias.component.css']
})
export class ApiRestCategoriasComponent implements OnInit {

  datos?: Array<CategoriasReponse>;

  constructor(
    private servicio: ApiService
  ) { }

  ngOnInit() {
    this.hacerPeticion();
  };

  hacerPeticion() {
    this.servicio.getCategorias().subscribe(
      {
        next: data => {
          this.datos = data;
        },
        error: error => {
          console.log("Error: " + error);
        }
      }
    );
  }

}
