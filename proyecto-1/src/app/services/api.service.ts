import { CategoriasRequest } from './../interfaces/categorias_request';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string;
  cabecera = {
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTY3NzAxOTE4NCwiZXhwIjoxNjc5NjExMTg0fQ.8potGtBuTlNu0hsY8_uMQnENcNM7mtNzrXoT5wsrndM'
  }

  constructor(
    private http: HttpClient,
  ) {
    this.api = environment.api;
   }

   getCategorias(): Observable<any>{
    return this.http.get(`${this.api}categorias`, {headers: this.cabecera});
   }

   postCategorias(modelo: CategoriasRequest): Observable<any>{
    return this.http.post(`${this.api}categorias`, modelo ,{headers: this.cabecera});
   }

   getCategoriasPorId(id: any): Observable<any>{
    return this.http.get(`${this.api}categorias/${id}`, { headers: this.cabecera })
   }

   editCategorias(modelo: CategoriasRequest, id: any): Observable<any>{
    return this.http.put(`${this.api}categorias/${id}`, modelo, {headers: this.cabecera});
   }

}
