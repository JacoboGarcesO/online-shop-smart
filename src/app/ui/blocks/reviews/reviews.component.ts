import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IReview } from '../../../core/models/review.model';
import { ReviewComponent } from './review/review.component';
import { IconComponent } from '../../elements/icon/icon.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewComponent, IconComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @ViewChild('wrapper') carousel: ElementRef;
  @Input() reviews: IReview[];

  moveToRight(): void {
    this.carousel.nativeElement.scrollTo({
      top: 0,
      left: this.carousel.nativeElement.scrollLeft + 300,
      behavior: 'smooth'
    });
    
  }

  moveToLeft(): void {
    this.carousel.nativeElement.scrollTo({
      top: 0,
      left: this.carousel.nativeElement.scrollLeft - 300,
      behavior: 'smooth'
    });
  }
}
