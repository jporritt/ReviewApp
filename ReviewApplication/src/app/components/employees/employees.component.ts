import { Component, OnInit, Input } from '@angular/core';
import { FirebaseReviewService } from '../.././services/firebase-review.service';
import { Employee } from '../../classes/employee';

@Component({
    moduleId: module.id,
    selector: 'employees',
    templateUrl: 'employees.component.html',
    styleUrls: ['employees.component.css'],
    providers: [FirebaseReviewService]
})
export class EmployeesComponent {
    @Input() emps: Employee[];
    emp: Employee[];
    empName: string;
    position: string;
    empState: string;

    constructor(private _fbReviewService: FirebaseReviewService) { }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        this.changeEmpState('');

       // this._fbReviewService.getEmployees().subscribe(employees => {
        //    this.employees = employees;
       // });
    }


    changeEmpState(key) {
        this.empState = key;
    }

    getEmpState() {
        return this.empState;
    }

    addEmployee(form) {
        var created_at = new Date().toString();
        this._fbReviewService.addEmployee(form.value);
        this.changeEmpState('view');
    }

    updateEmployee(key, form) {
        this._fbReviewService.updateEmployee(key, form.value);
        this.changeEmpState('view');
    }

    editEmployee(emp) {
        this.changeEmpState('edit');        
        this.emp = emp;
    }
}
