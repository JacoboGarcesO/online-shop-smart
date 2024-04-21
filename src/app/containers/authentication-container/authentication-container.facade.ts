import { Injectable } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from '../../core/state/app.state';
import { IUserCredentials } from '../../core/models/user.model';
import { Router } from '@angular/router';

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
  //#endregion

  //#region Public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loginWithCredentials(credentials: IUserCredentials): void {
    this.subscriptions.add(
      this.authService.loginWithCredentials(credentials).pipe(
        tap(this.state.user.currentUser.set.bind(this)),
        tap(() => this.router.navigateByUrl('/admin')),
      ).subscribe()
    );
  }

  loginWithGoogle(): void {
    this.subscriptions.add(
      this.authService.loginWithGoogle().pipe(
        tap(this.state.user.currentUser.set.bind(this)),
        tap(() => this.router.navigateByUrl('/')),
      ).subscribe()
    );
  }
  //#endregion
}
