import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  usuario: any;
  paises: any;
  users: Array<any> = [];
  checkBoxMarca : boolean = false;

  constructor(){
    this.usuario = {
      nombre: '',
      correo: '',
      telefono: '',
      direccion: '',
      pais: ''
    }
  }

  ngOnInit(){
    this.paises = [
      {
        nombre: 'Colombia',
        dominio: 'COL'
      },
      {
        nombre: 'Argentina',
        dominio: 'AR'
      },
      {
        nombre: 'Venezuela',
        dominio: 'VLZ'
      },
      {
        nombre: 'Perú',
        dominio: 'PE'
      },
    ];
  };

  seleccionaCheck(evento: any){
    if(evento.target.checked){
      this.checkBoxMarca = true;
      alert('Marcado')
    }else{
      this.checkBoxMarca = false;
      alert('Desmarcado')
    }
  }


  enviar(){
    this.users.push(
    {
      nombre: this.usuario.nombre,
      correo: this.usuario.correo,
      telefono: this.usuario.telefono,
      direccion: this.usuario.direccion,
      pais: this.usuario.pais
    }
    )
  }


}
