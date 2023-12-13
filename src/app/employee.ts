export class Employee{
    id: number;
    firstName: string;
    secondName: string;
    lastName: string;
    lastName2: string;
    documentNumber: string;
    phone: string;
    email: string;

    constructor(firstName: string, secondName: string, lastName: string, lastName2: string, documentNumber: string, phone: string, email: string){
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.lastName2 = lastName2;
        this.documentNumber = documentNumber;
        this.phone = phone;
        this.email = email;
    }
    
}