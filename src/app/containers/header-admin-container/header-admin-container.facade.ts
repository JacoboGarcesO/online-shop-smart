import { Injectable } from '@angular/core';
import { Observable, Subscription, map, tap } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class HeaderAdminContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly authService: AuthService
  ) { }

  //#region Observables
  currentUser$(): Observable<IUser> {
    return this.state.user.currentUser.$();
  }

  foodsCount$(): Observable<number> {
    return this.state.food.foods.$().pipe(
      map((foods) => foods?.reduce((previous, current) => previous + current.quantity, 0))
    );
  }
  //#endregion

  //#region Public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  logOutUser(): void {
    this.subscriptions.add(
      this.authService.logOut().pipe(
        tap(() => this.state.user.currentUser.set(null))
      ).subscribe()
    );
  }
  //#endregion
}