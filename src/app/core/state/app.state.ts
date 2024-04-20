import { Injectable } from '@angular/core';
import { FoodState } from './food.state';
import { ResourcesState } from './resources.state';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor(
    private readonly foodState: FoodState,
    private readonly resourcesState: ResourcesState
  ) { }

  get food() { return this.foodState.store(); }
  get resources() { return this.resourcesState.store(); }
}
