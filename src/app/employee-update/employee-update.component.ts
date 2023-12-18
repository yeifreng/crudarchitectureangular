import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateserviceService } from '../services/updateService/updateservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {

  title:string = 'Editar empleado';
  id:any;
  documentNumber:string;
  firstName:string;
  secondName:string;
  lastName:string;
  lastName2:string;
  phoneNumber:string;
  emailAddress:string;

  constructor(private router:Router, private activeRoute:ActivatedRoute, private updateService: UpdateserviceService){

    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.updateService.getEmployee(this.id).subscribe(respuesta=>{
      console.log(respuesta);
      this.documentNumber=respuesta['documentNumber'];
      this.firstName=respuesta['firstName'];
      this.secondName=respuesta['secondName'];
      this.lastName=respuesta['lastName'];
      this.lastName2=respuesta['lastName2'];
      this.phoneNumber=respuesta['phone'];
      this.emailAddress=respuesta['email'];
    })

  }
  

  updateEmployee():void{
    let employee = new Employee(this.documentNumber, this.firstName, this.secondName, this.lastName, this.lastName2, this.phoneNumber, this.emailAddress);
    this.updateService.updateEmployee(employee).subscribe(respuesta=>{

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Empleado Actualizado con exito",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['lista-empleados']);
  
    });
    
  }

}
