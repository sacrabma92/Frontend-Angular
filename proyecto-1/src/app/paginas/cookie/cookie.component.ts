import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export default class CookieComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ){}

  ngOnInit(): void {
    this.crearCookie();
  }

  crearCookie(){
    this.cookieService.set('cookieAngu', 'Cookie desde el angular', 1);
  }


}
