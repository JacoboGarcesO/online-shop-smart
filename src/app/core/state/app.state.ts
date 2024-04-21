import { Injectable } from '@angular/core';
import { FoodState } from './food.state';
import { ResourcesState } from './resources.state';
import { UserState } from './user.state';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor(
    private readonly foodState: FoodState,
    private readonly resourcesState: ResourcesState,
    private readonly userState: UserState
  ) { }

  get food() { return this.foodState.store(); }
  get resources() { return this.resourcesState.store(); }
  get user() { return this.userState.store(); }
}
