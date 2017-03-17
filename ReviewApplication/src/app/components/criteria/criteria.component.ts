import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Review } from '../../classes/review';


@Component({
    moduleId: module.id,
    selector: 'criteria',
    templateUrl: 'criteria.component.html',
    styleUrls: ['criteria.component.scss']
})
export class CriteriaComponent {
    @Input() criteria: string;
    @Input() critName: string;
    @Input() rev: Review[];
    @Input() RATINGS: any;
    @Input() critTitle:string;
    @Output() changeCrit = new EventEmitter();
    critScore: string;


    constructor() { }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.critScore = this.convertRating(this.criteria);
    }

    slideChange(critComp, slider) {
        //console.log(critComp + slider.value);
        //if (critComp == "COMM"){

        this.criteria = slider.value;
        this.changeCrit.emit({ newValue: this.criteria, crit: critComp });
        this.critScore = this.convertRating(this.criteria);
        //}
    }

    convertRating(score) {
        for (var x = 0; x < this.RATINGS.length; x++) {
            if (score == this.RATINGS[x].score) {
                return this.RATINGS[x].rating;
            }
        }
    }
}
