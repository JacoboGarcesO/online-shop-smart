import { Observable, Subscription, finalize, tap } from 'rxjs';
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

  //#region Observables
  foods$(): Observable<IFood[]> {
    return this.state.food.foods.$();
  }

  isFormVisible$(): Observable<boolean> {
    return this.state.food.isFormVisible.$();
  }

  isLoadingTable$(): Observable<boolean> {
    return this.state.food.isLoadingTable.$();
  }

  isLoadingAction$(): Observable<boolean> {
    return this.state.food.isLoadingAction.$();
  }

  currentFood$(): Observable<IFood> {
    return this.state.food.currentFood.$();
  }
  //#endregion

  //#region Public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  getFoods(): void {
    this.state.food.isLoadingTable.set(true);

    this.subscriptions.add(
      this.foodService.getAll().pipe(
        tap(this.state.food.foods.set.bind(this)),
        finalize(() => this.state.food.isLoadingTable.set(false))
      ).subscribe()
    );
  }

  deleteFood(): void {
    this.state.food.isLoadingAction.set(true);
    const food = this.state.food.currentFood.snapshot();

    this.subscriptions.add(
      this.foodService.delete(food.id).pipe(
        tap(this.manageDeleteFood.bind(this)),
        tap(() => this.state.food.currentFood.set(null)),
        finalize(() => this.state.food.isLoadingAction.set(false))
      ).subscribe()
    );
  }

  pathFood(food: IFood): void {
    this.state.food.isLoadingAction.set(true);
    console.log(food);
    
    food?.id
      ? this.updateFood(food)
      : this.createFood(food);
  }

  toggleForm(): void {
    const newFormState = !this.state.food.isFormVisible.snapshot();

    if (!newFormState) {
      this.state.food.currentFood.set(null);
    }

    this.state.food.isFormVisible.set(newFormState);
  }

  setCurrentFood(food: IFood): void {
    this.state.food.currentFood.set(food);
  }
  //#endregion

  //#region Private methods
  private createFood(food: IFood): void {
    this.subscriptions.add(
      this.foodService.create(food).pipe(
        tap(this.managePatchFood.bind(this)),
        tap(() => this.state.food.isFormVisible.set(false)),
        finalize(() => this.state.food.isLoadingAction.set(false))
      ).subscribe()
    );
  }

  private updateFood(food: IFood): void {
    this.subscriptions.add(
      this.foodService.update(food).pipe(
        tap(this.managePatchFood.bind(this)),
        tap(() => this.state.food.isFormVisible.set(false)),
        finalize(() => this.state.food.isLoadingAction.set(false))
      ).subscribe()
    );
  }

  private managePatchFood(food: IFood): void {
    const foods = this.state.food.foods.snapshot();
    const foodIndex = foods.findIndex((_food: IFood) => _food.id === food.id);

    foodIndex === - 1
      ? foods.unshift(food)
      : foods[foodIndex] = food;

    this.state.food.foods.set(foods);
  }

  
  private manageDeleteFood(food: IFood): void {
    const foods = this.state.food.foods.snapshot();
    this.state.food.foods.set(foods.filter((_food: IFood) => _food.id !== food.id));
  }
  //#endregion
}