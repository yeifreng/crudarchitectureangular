import { Component } from '@angular/core';
import { ReadServiceService } from '../services/readService/read-service.service';
import { DeleteServiceService } from '../services/deleteService/delete-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employee:any;
  title: string= 'Lista de empleados';

  constructor(private readService:ReadServiceService, private deleteService:DeleteServiceService){

    this.readService.getEmployee().subscribe(respuesta=>{
      this.employee = respuesta;
    });

  }

  deleteEmployee(id:any, indice:any){

    
      this.deleteService.deleteEmployee(id).subscribe((respuesta)=>{

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Empleado eliminado con exito",
          showConfirmButton: false,
          timer: 1500
        });
        this.employee.splice(indice,1);
    
      });

  }

}
