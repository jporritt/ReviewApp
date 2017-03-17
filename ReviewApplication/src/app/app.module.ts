import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import {FirebaseReviewService} from './services/firebase-review.service';

import { AppComponent } from './app.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CriteriaComponent } from './components/criteria/criteria.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCAvJXauoHm5Rm7ybvf2H27osxWsrI1Awo",
  authDomain: "review-8c549.firebaseapp.com",
  databaseURL: "https://review-8c549.firebaseio.com",
  storageBucket: "review-8c549.appspot.com",
  messagingSenderId: "806245869764"
};


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProjectsComponent,
    ReviewsComponent,
    CriteriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],exports:[
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
