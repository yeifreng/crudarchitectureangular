import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { CreateServiceService } from '../services/createService/create-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private createService:CreateServiceService, private router:Router){
    
  }

    //formulario es el componente padre
    firstName:string;
    secondName:string;
    lastName:string;
    lastName2:string;
    documentNumber:string;
    phoneNumber:string;
    emailAddress:string;


    

    addEmployee(){
      let myEmployee = new Employee(this.firstName, this.secondName, this.lastName, this.lastName2, this.documentNumber, this.phoneNumber, this.emailAddress);
      console.log(myEmployee);
      this.createService.addEmployee(myEmployee).subscribe(respuesta=>{
        this.router.navigate(['lista-empleados']);
      });
      
    }

}
