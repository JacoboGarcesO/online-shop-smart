import { Component, Input } from '@angular/core';
import { IReview } from '../../../core/models/review.model';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @Input() reviews: IReview[];
}
