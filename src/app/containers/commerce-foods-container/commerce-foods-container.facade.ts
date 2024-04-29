import { Injectable } from '@angular/core';
import { Observable, Subscription, combineLatest, map } from 'rxjs';
import { IFood, IFoodCart } from '../../core/models/food.model';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class CommerceFoodsContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState
  ) { }

  //#region observables
  foods$(): Observable<IFood[]> {
    return combineLatest({
      category: this.state.food.category.$(),
      foods: this.state.food.foods.$()
    }).pipe(
      map(({ category, foods }) => foods
        ?.filter((food: IFood) => {
          if (category === 'all') {
            return true;
          } else {
            return food.category.toLowerCase().includes(category);
          }
        })
        ?.sort((foodA: IFood, foodB: IFood) => foodA.price - foodB.price))
    );
  }

  category$(): Observable<string> {
    return this.state.food.category.$();
  }
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  setCategory(category: string): void {
    this.state.food.category.set(category);
  }

  updateFood(food: IFoodCart): void {
    const foods = this.state.food.foods.snapshot();
    const foodIndex = foods.findIndex((_food: IFood) => _food.id === food.id);
    foods[foodIndex] = { ...foods[foodIndex], quantity: food.quantity };
    this.state.food.foods.set(foods);
  }
  //#endregion
}