import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {

  url:string = 'http://localhost/empleados-main/';

  constructor(private clientHttp: HttpClient){ }

  addEmployee(employee:Employee):Observable<any>{
    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    return this.clientHttp.post(this.url+"?insertar=1",employee);
  }
}
