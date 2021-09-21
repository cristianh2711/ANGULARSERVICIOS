import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  public ciudadesReport(){
    return this.http.get('http://143.244.150.210/movitapp-back/departamentos/ciudad/listarPorDepartamnto/25');
  }
}
