import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  fecha = new Date();
  fechaCortaHora: any;
  fechaCorta: any;
  dia?: string;
  diaSemana?: string;
  mes?: string;
  anio?: string;
  hora?: string;
  dia2?: string;

  ngOnInit(){
    this.ejecutar();
  }

  ejecutar(){
    moment.locale('es')
    this.fechaCortaHora = moment(this.fecha).format('DD/MM/YYYY HH:mm');
    this.fechaCorta = moment(this.fecha).format('DD/MM/YYYY');
    this.dia = moment(this.fecha).format('DD');
    this.mes = moment(this.fecha).format('MMMM');
    this.anio = moment(this.fecha).format('YYYY');
    this.diaSemana = moment(this.fecha).format('dddd');
  }


}
