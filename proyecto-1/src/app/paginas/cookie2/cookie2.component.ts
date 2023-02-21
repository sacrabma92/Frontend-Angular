import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-cookie2',
  templateUrl: './cookie2.component.html',
  styleUrls: ['./cookie2.component.css']
})
export default class Cookie2Component implements OnInit {

  cookie?: string;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ){}

  ngOnInit(): void {
    if(this.cookieService.check('cookieAngu')){
      this.cookie = this.cookieService.get('cookieAngu');
    }else{
      this.router.navigate(['/']);
    }
  }

  borrarCookie(){
    this.cookieService.delete('cookieAngu');
    swal.fire(
      {
        icon: 'success',
        timer: 2000,
        title: 'OK',
        text: "Cookie Eliminado con Exito"
      }
    )
    this.router.navigate(['/']);
  }
}
