import { Component } from "@angular/core";

@Component ({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})

export class EmployeeComponent {
    ClassestoAdd : string = 'ItalicText'
    columnSpan : number = 2;
    firstName: string = 'Nivas';
    lastName: string = 'Donthireddy';
    gender : string = 'Male';
    age: number = 20;
    AddClass : boolean = true;
    isColored : boolean = false;
    isBold: boolean = true;
    fontSize : number = 20;
    addStyles(){
        let styles = {
            'font-weight' : this.isBold ? 'bold' : 'normal',
            'color' : this.isColored ? 'red' : 'brown',
            'font-size' : this.fontSize
        };
        return styles;
    }
}