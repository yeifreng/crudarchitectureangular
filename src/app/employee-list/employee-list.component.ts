import { Component } from '@angular/core';
import { ReadServiceService } from '../services/readService/read-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employee:any;
  title: string= 'Lista de empleados';

  constructor(private readService:ReadServiceService){

    this.readService.obtenerEmpleado().subscribe(respuesta=>{
      this.employee = respuesta;
    });

  }

}
