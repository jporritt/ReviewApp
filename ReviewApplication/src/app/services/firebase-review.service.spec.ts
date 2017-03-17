/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseReviewService } from './firebase-review.service';

describe('FirebaseReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseReviewService]
    });
  });

  it('should ...', inject([FirebaseReviewService], (service: FirebaseReviewService) => {
    expect(service).toBeTruthy();
  }));
});
