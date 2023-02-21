import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export default class SessionStorageComponent implements OnInit {

  ngOnInit(){
    this.crear();
  }


  crear(){
    sessionStorage.setItem('sessionStorage', 'Desde session Storage')
  }

}
