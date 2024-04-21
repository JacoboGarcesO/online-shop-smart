import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class HeaderContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly authService: AuthService
  ) { }

  //#region Observables
  currentUser$(): Observable<IUser> {
    return this.state.user.currentUser.$();
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