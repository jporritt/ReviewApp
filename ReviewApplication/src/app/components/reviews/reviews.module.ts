// Angular Imports
import { NgModule } from '@angular/core';
import {CriteriaComponent} from '../criteria/criteria.component';

// This Module's Components
import { ReviewsComponent } from './reviews.component';

@NgModule({
    imports: [
        CriteriaComponent
    ],
    declarations: [
        ReviewsComponent,
    ],
    exports: [
        ReviewsComponent,
    ]
})
export class ReviewsModule {

}
