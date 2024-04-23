import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { IFood } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodState {
  private foods$: BehaviorSubject<IFood[]> = new BehaviorSubject(null);
  private currentFood$: BehaviorSubject<IFood> = new BehaviorSubject(null);
  private isFormVisible$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private isLoadingTable$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private isLoadingAction$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      foods: this.factory.state(this.foods$),
      currentFood: this.factory.state(this.currentFood$),
      isFormVisible: this.factory.state(this.isFormVisible$),
      isLoadingTable: this.factory.state(this.isLoadingTable$),
      isLoadingAction: this.factory.state(this.isLoadingAction$)
    };
  }
}
