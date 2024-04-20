import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { IReview } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ResourcesState {
  private reviews$: BehaviorSubject<IReview[]> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      reviews: this.factory.state(this.reviews$)
    };
  }
}
