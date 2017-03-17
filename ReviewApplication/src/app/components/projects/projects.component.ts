import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseReviewService } from '../.././services/firebase-review.service';
import { Project } from '../../classes/project';
import { Employee } from '../../classes/employee';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
@Component({
    moduleId: module.id,
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css'],
    providers: [FirebaseReviewService]
})
export class ProjectsComponent implements OnInit {
    projState: string;
    @Input() projects: Project[];
    @Input() emps: Employee[];
    project: Project[];
    //emps: Employee[];




    constructor(private _fbReviewService: FirebaseReviewService) { }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.changeProjState('');
        /*
        this._fbReviewService.getProjects().subscribe(projects => {
            this.projects = projects;
        });

        this._fbReviewService.getEmployees().subscribe(emps => {
            this.emps = emps;
        });
        */
    }

    changeProjState(key) {
        this.projState = key;
    }

    getEmpByKey(key) {
        for (var x = 0; x < this.emps.length; x++) {
            if (key == this.emps[x].$key) {
                return (this.emps[x]["empName"]);
            }
        }
    }

    addProject(form) {
        //console.log(form.value);
        var created_at = new Date().toString();
        this._fbReviewService.addProject(form.value);
        this.changeProjState('view');
    }

    updateProject(key, form) {
        this._fbReviewService.updateProject(key, form.value);
        this.changeProjState('view');
    }

    editProject(project) {
        this.changeProjState('edit');        
        this.project = project;
    }
    
}
