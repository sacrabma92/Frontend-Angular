import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion-hijo',
  templateUrl: './comunicacion-hijo.component.html',
  styleUrls: ['./comunicacion-hijo.component.css']
})
export class ComunicacionHijoComponent implements OnInit {

  @Input() titulo?: string;
  @Input() subtitulo?: string;

  @Output() valordelHijo = new EventEmitter<string>();

  ngOnInit(){
    this.valordelHijo.emit('Valor desde el hijo');
  }
}
