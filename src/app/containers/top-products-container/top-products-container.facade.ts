import { Observable, Subscription, map, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { Injectable } from '@angular/core';
import { FoodService } from '../../core/services/food.service';
import { IFood } from '../../core/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class TopProductsContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly foodService: FoodService
  ) { }

  //#region observables
  foods$(): Observable<IFood[]> {
    return this.state.food.foods.$().pipe(
      map((foods: IFood[]) => foods?.sort((foodA: IFood, foodB: IFood) => foodA.price - foodB.price)?.slice(0, 4)),
    );
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
      this.foodService.getAllWithImage().pipe(
        tap(this.state.food.foods.set.bind(this))
      ).subscribe()
    );
  }
  //#endregion
}