import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class CartTotalContainerFacade {
  constructor(
    private readonly state: AppState
  ) { }

  //#region Observables
  total$(): Observable<number> {
    return this.state.food.foods.$().pipe(
      map((foods) => foods?.reduce((previous, current) => previous + (current.quantity * current.price * 1.15), 0))
    );
  }

  subTotal$(): Observable<number> {
    return this.state.food.foods.$().pipe(
      map((foods) => foods?.reduce((previous, current) => previous + current.quantity * current.price, 0))
    );
  }

  taxes$(): Observable<number> {
    return this.state.food.foods.$().pipe(
      map((foods) => foods?.reduce((previous, current) => previous + (current.quantity * current.price * 0.15), 0))
    );
  }
  //#endregion
}