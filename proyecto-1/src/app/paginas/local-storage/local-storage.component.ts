import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit{


  ngOnInit(){
    this.crearLocal()

  }

  crearLocal(){
    if(typeof(Storage) !== 'undefined'){
      localStorage.setItem("PaginStorage", "123")
    }else{
      console.log("No se puede");
    }
  }

}
