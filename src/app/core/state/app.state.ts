import { Injectable } from '@angular/core';
import { FoodState } from './food.state';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor(private readonly foodState: FoodState) { }

  get food() { return this.foodState.store(); }
}
