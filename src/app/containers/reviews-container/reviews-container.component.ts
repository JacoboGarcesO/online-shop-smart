import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from '../../core/models/review.model';
import { ReviewsContainerFacade } from './reviews-container.facade';
import { ReviewsComponent } from '../../ui/blocks/reviews/reviews.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reviews-container',
  standalone: true,
  imports: [ReviewsComponent, AsyncPipe],
  templateUrl: './reviews-container.component.html'
})
export class ReviewsContainerComponent implements OnInit, OnDestroy {
  public reviews$: Observable<IReview[]>;

  constructor(private readonly facade: ReviewsContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getReviews();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.reviews$ = this.facade.reviews$();
  }
}
