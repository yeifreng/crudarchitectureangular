import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadServiceService {

  url:string = 'http://localhost/empleados-main/';

  constructor(private clientHttp: HttpClient){ }

  obtenerEmpleado(){
    return this.clientHttp.get(this.url)
    }
}
