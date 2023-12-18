import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  constructor(private clientHttp:HttpClient) { }

  url:string = '/api/employee/';

  deleteEmployee(id:any):Observable<any>{
    return this.clientHttp.delete(this.url+id);
  }



}
