import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-storage2',
  templateUrl: './local-storage2.component.html',
  styleUrls: ['./local-storage2.component.css']
})
export class LocalStorage2Component implements OnInit {

  public token: any;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('PaginStorage') != null) {
      this.token = localStorage.getItem('PaginStorage');
    } else {
      this.router.navigate(['/'])
    }
  }

  borrarLocalStorage() {
    // localStorage.clear() //Limpia todo el Storage
    localStorage.removeItem('PaginStorage');
    swal.fire(
      {
        icon: 'success',
        timer: 2000,
        title: 'OK',
        text: "Local Storage Eliminado con Exito"
      }
    )
    this.router.navigate(['/']);
  }

}
