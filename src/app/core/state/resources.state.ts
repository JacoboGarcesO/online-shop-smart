import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { IReview } from '../models/review.model';
import { IMenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class ResourcesState {
  private reviews$: BehaviorSubject<IReview[]> = new BehaviorSubject(null);
  private items$: BehaviorSubject<IMenuItem[]> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      reviews: this.factory.state(this.reviews$),
      items: this.factory.state(this.items$)
    };
  }
}
