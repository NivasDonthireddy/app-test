import { Component } from "@angular/core";

@Component ({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})

export class EmployeeComponent {
    firstName: string = 'Nivas';
    lastName: string = 'Donthireddy';
    gender : string = 'Male';
    age: number = 20;
}