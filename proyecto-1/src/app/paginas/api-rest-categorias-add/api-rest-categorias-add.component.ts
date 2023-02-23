import { CategoriasRequest } from './../../interfaces/categorias_request';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-categorias-add',
  templateUrl: './api-rest-categorias-add.component.html',
  styleUrls: ['./api-rest-categorias-add.component.css']
})
export class ApiRestCategoriasAddComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private servicio: ApiService,
    private route: Router,
    private fb: FormBuilder
  ){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void{

  }

  get nombre() { return this.formulario?.get('nombre')}

  enviar(){
    let modelo : CategoriasRequest = { nombre: this.formulario.value.nombre }
    this.servicio.postCategorias(modelo).subscribe({
      next: data => {
        swal.fire({
          icon: 'success',
          timer: 2000,
          title: 'OK',
          text: 'Se creó el registro exitosamente'
        });
      },
      error: (err) => {
        swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Se produjo un error, por favor vuelve a intentarlo!!!'
        });
        this.route.navigate(['/api/categorias']).then(() => {
          window.location.reload();
        })
      }
    })
  }

}
