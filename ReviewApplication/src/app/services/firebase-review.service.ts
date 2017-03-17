import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Employee } from '../classes/employee';
import { Project } from '../classes/project';
import { Review } from '../classes/review';
import 'rxjs/add/operator/map';

@Injectable()

export class FirebaseReviewService {
    emps: FirebaseListObservable<Employee[]>;
    projects: FirebaseListObservable<Project[]>;
    emp: FirebaseObjectObservable<Employee>;
    reviews: FirebaseListObservable<Review[]>;
    constructor(private _af: AngularFire) { }

    getProjects() {
        this.projects = this._af.database.list('/projects') as FirebaseListObservable<Project[]>;
        return this.projects;
    }

     getReviews() {
        this.reviews = this._af.database.list('/reviews') as FirebaseListObservable<Project[]>;
        return this.reviews;
    }
  
    getEmpByKey(id: string) {
       
        this.emp = this._af.database.object('/employees/' + id);       
       
        return this.emp;

    }

    getItem(id: string) {
        this.emp = this._af.database.object('/employees/' + id);
        this.emp.subscribe(emp => {
            console.log(emp);
            return emp;
        });
    }


    getEmployees(key: string = null) {
        if (key != null) {
            this.emps = this._af.database.list('/employees', {
                //query: {
                //    orderByChild:'$key',
                //    equalTo: key 
                // }
            }) as FirebaseListObservable<Employee[]>;
        } else {
            this.emps = this._af.database.list('/employees') as FirebaseListObservable<Employee[]>;
        }
        return this.emps;
    }

    
    

    addEmployee(newEmployee) {
        return this.emps.push(newEmployee);
    }

    updateEmployee(key, updEmployee) {
        return this.emps.update(key, updEmployee);
    }
    addProject(newProject) {
        return this.projects.push(newProject);
    }

     updateProject(key, updProject) {
        return this.projects.update(key, updProject);
    }

    addReview(newReview) {
        return this.reviews.push(newReview);
    }

     updateReview(key, updReview) {
        return this.reviews.update(key, updReview);
    }

}
/*
export interface Employee{
    $key?:string;
    empName?:string;
    position?:string;
    created_at:string;
}

export interface Project{
    $key?:string;
    projectName?: string;
    pmId?: string;
    projectDescription?: string;
    created_at:string;

}
*/