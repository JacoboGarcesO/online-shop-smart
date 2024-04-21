import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subscription, catchError, finalize, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from '../../core/state/app.state';
import { IUserCredentials } from '../../core/models/user.model';
import { Router } from '@angular/router';
import { errorsEnumToMessages } from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  //#region Observables
  loginError$(): Observable<string> {
    return this.state.user.loginError.$();
  }

  isLoading$(): Observable<boolean> {
    return this.state.user.isLoading.$();
  }
  //#endregion

  //#region Public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loginWithCredentials(credentials: IUserCredentials): void {
    this.state.user.loginError.set(null);
    this.state.user.isLoading.set(true);

    this.subscriptions.add(
      this.authService.loginWithCredentials(credentials).pipe(
        tap(this.state.user.currentUser.set.bind(this)),
        tap(() => this.router.navigateByUrl('/admin')),
        catchError(this.manageLoginErrors.bind(this)),
        finalize(() => this.state.user.isLoading.set(false))
      ).subscribe()
    );
  }

  loginWithGoogle(): void {
    this.state.user.loginError.set(null);

    this.subscriptions.add(
      this.authService.loginWithGoogle().pipe(
        tap(this.state.user.currentUser.set.bind(this)),
        tap(() => this.router.navigateByUrl('/')),
        catchError(this.manageLoginErrors.bind(this))
      ).subscribe()
    );
  }
  //#endregion

  //#region Private methods
  private manageLoginErrors(error: any): Observable<never> {
    const authErrorCode = error.error.code;
    const message = errorsEnumToMessages(authErrorCode);
    this.state.user.loginError.set(message);
    return EMPTY;
  }
  //#endregion
}
