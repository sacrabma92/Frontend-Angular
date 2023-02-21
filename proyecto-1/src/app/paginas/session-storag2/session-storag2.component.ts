import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-session-storag2',
  templateUrl: './session-storag2.component.html',
  styleUrls: ['./session-storag2.component.css']
})
export class SessionStorag2Component implements OnInit {

  storage?: string | null;

  constructor(
    private router: Router
  ){

  }

  ngOnInit(){
    if(sessionStorage.getItem('sessionStorage') !== null){
      this.storage = sessionStorage.getItem('sessionStorage')
    }else{
      this.router.navigate(['/']);
    }
  }

  borrar(){
    // sessionStorage.clear() //Limpiar todo el storage
    sessionStorage.removeItem('sessionStorage');
    swal.fire({
      icon: 'success',
      title: 'OK',
      text: 'Se borró Session Storage'
    });
    this.router.navigate(['/']);
  }

}
