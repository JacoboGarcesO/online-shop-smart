import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppState } from './core/state/app.state';
import { AuthService } from './core/services/auth.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscriptions = new Subscription();

    this.subscriptions.add(
      this.authService.getCurrentUser().pipe(
        tap(this.state.user.currentUser.set.bind(this)),
      ).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
