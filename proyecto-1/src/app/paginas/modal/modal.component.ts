import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidaSelectDirectiveValidator } from 'src/app/validaciones/valida-select.directive';
import swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild("myModalConf", {static: false}) myModalConf?: TemplateRef<any>;
  modalTitle?: string;


  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ){
    this.formulario = this.fb.group({
      nombre:['', Validators.required],
      correo:['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      telefono:['', [Validators.required, Validators.min(0), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      direccion:['', Validators.required],
      pais:['', Validators.required],
    }, {Validators: ValidaSelectDirectiveValidator });
  }


  abrirModal(){
    this.modalService.open(this.myModalConf, {size: 'lg'});
    this.modalTitle = "Ejemplo de ventana modal desde Angular";
  }

  formulario!: FormGroup;


  enviar(){
    swal.fire(
      {
        icon: 'success',
        timer: 2000,
        title: 'Datos guardados con exito',
        text: this.formulario.value
      }
    )
  }

  campoInvalido( campo: string ){
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  campoCorreo(){
    return this.formulario.controls['correo'].errors?.['pattern'];
  }

  campoSelectInvalido(){
    this.formulario.errors?.['ValidaSelectNull']
  }

  paises = [
    {'nombre': 'Colombia'},
    {'nombre': 'Venezuela'},
    {'nombre': 'Panama'},
    {'nombre': 'Nicaragua'},
  ]
}
