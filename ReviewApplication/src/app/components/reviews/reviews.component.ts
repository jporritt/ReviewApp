import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseReviewService } from '../.././services/firebase-review.service';
import { Project } from '../../classes/project';
import { Employee } from '../../classes/employee';
import { Review } from '../../classes/review';
import '../../utility/utility'
import 'rxjs/add/operator/map';

//declare var $: any

const RATINGS: any = [
    { score: 0, rating: "NA" },
    { score: 1, rating: "Very Bad" },
    { score: 2, rating: "Bad" },
    { score: 3, rating: "Not So Bad" },
    { score: 4, rating: "Pretty Good" },
    { score: 5, rating: "Good" },
    { score: 6, rating: "Better Than Good" },
    { score: 7, rating: "Very Good" },
    { score: 8, rating: "Almost Excellent" },
    { score: 9, rating: "Excellent" },
    { score: 10, rating: "Stupendous" }
]


@Component({
    moduleId: module.id,
    selector: 'reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css']
})
export class ReviewsComponent implements OnInit, AfterViewInit {

    revState: string;
    @Input() projects: Project[];
    project: Project[];
    @Input() emps: Employee[];
    reviews: Review[];
    rev:Review[];
    critComm:string;
    critTW:string;
    critMI:string;
    critRating:any;
    critMITitle:string;
    critTWTitle:string;
    critCOMMTitle:string;



    constructor(private _fbReviewService: FirebaseReviewService) { 
        this.critComm = "COMM";
        this.critTW = "TW";
        this.critMI = "MI";
        this.critCOMMTitle = "Communications";
        this.critTWTitle = "Teamwork";
        this.critMITitle = "Motivation & Initiative";
        this.critRating = RATINGS;
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.changeRevState('');

        //this._fbReviewService.getProjects().subscribe(projects => {
        //    this.projects = projects;
        // });

        //this._fbReviewService.getEmployees().subscribe(emps => {
        //    this.emps = emps;
        //});

        this._fbReviewService.getReviews().subscribe(reviews => {
            this.reviews = reviews;
        });
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
      
    }
    changeRevState(key) {
        this.revState = key;
    }

    getItemByKey(key, items, returnItem) {
        for (var x = 0; x < items.length; x++) {
            if (key == items[x].$key) {
                return (items[x][returnItem]);
            }
        }
    }

    convertRating(score){
        for (var x=0; x<RATINGS.length; x++){
            if (score == RATINGS[x].score){
                return RATINGS[x].rating;
            }
        }
    }

    addReview(form) {
        var created_at = new Date().toString();
        this._fbReviewService.addReview(form.value);
        this.changeRevState('view');
    }

    editReview(rev){
       
        this.changeRevState('edit');        
        this.rev = rev;
    
    }
    onCritChange($event){
        //if ($event.crit == "COMM"){
            this.rev["criteria"][0][$event.crit] = $event.newValue;
            
       // }
    }
}
