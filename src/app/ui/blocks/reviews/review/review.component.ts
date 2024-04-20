import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IReview } from '../../../../core/models/review.model';
import { IconComponent } from '../../../elements/icon/icon.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ReviewComponent {
  @Input() review: IReview;

  get stars(): string[] {
    return Array(5).fill('star').map((star, index) => index < this.review.rating ? 'star-filled' : star);
  }
}
