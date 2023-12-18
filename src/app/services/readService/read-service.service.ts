import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReadServiceService {
  
  constructor(private clientHttp: HttpClient){ }

  url:string = '/api/employee';



  getEmployee():Observable<any>{
    return this.clientHttp.get(this.url);
    }
}
