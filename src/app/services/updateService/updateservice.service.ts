import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  constructor(private clientHttp:HttpClient) { }

  url:string = '/api/employee/';

  getEmployee(id:any):Observable<any>{
    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    //return this.clientHttp.get(this.url+'?get'+id);
    return this.clientHttp.get<any>(this.url+id);
  }

  updateEmployee(employee:Employee):Observable<Employee>{

    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    return this.clientHttp.put<Employee>(this.url, employee);
  }

}
