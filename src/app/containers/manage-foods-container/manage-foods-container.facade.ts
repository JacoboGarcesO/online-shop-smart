import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { Injectable } from '@angular/core';
import { FoodService } from '../../core/services/food.service';
import { IFood } from '../../core/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class ManageFoodContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly foodService: FoodService
  ) { }

  //#region observables
  foods$(): Observable<IFood[]> {
    return this.state.food.foods.$();
  }
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  getFoods(): void {
    this.subscriptions.add(
      this.foodService.getAll().pipe(
        tap(this.state.food.foods.set.bind(this))
      ).subscribe()
    );
  }
  //#endregion
}