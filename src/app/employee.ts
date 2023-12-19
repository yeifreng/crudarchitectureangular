export class Employee{
    id:null;
    documentNumber: string;
    firstName: string;
    secondName: string;
    lastName: string;
    lastName2: string;
    phone: string;
    email: string;

    constructor(id:null, documentNumber: string, firstName: string, secondName: string, lastName: string, lastName2: string, phone: string, email: string){
        this.id = id;
        this.documentNumber = documentNumber;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.lastName2 = lastName2;
        this.phone = phone;
        this.email = email;
    }
    
}