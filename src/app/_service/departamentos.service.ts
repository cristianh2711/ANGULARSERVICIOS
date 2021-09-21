import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  public departamentosreport(){
    return this.http.get('http://143.244.150.210/movitapp-back/departamentos/listar');
  }
}
