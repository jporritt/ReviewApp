import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FirebaseReviewService} from './services/firebase-review.service';

//children components
import { EmployeesComponent} from './components/employees/employees.component';
import { ProjectsComponent} from './components/projects/projects.component';

import {Employee} from './classes/employee';
import {Project} from './classes/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FirebaseReviewService]
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Beachside Review';
  employees: Employee[];
  projects: Project[];
  
  temp = "123";

  @ViewChild(EmployeesComponent)
  private empComponent: EmployeesComponent;
  @ViewChild(ProjectsComponent)
  private projectComponent: ProjectsComponent;

  constructor(private _fbReviewService:FirebaseReviewService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._fbReviewService.getEmployees().subscribe(employees=>{
      this.employees = employees;
    });

    this._fbReviewService.getProjects().subscribe(projects=>{
      this.projects = projects;
    });
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.projectComponent.changeProjState('');
    //this.empComponent.changeEmpState('view');
  }
}

/*
export interface Project{
    $key?:string;
    projectName?: string;
    pmId?: string;
    projectDescription?: string;
    created_at:string;
}

export interface Employee{
    $key?:string;
    empName?:string;
    position?:string;
    created_at:string;

}
*/