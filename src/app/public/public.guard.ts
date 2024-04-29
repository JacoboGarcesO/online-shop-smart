import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AppState } from '../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard {
  constructor(
    private readonly state: AppState,
    private readonly router: Router
  ) { }

  canActivate: CanActivateFn = () => new Observable((observer: Observer<boolean>) => {
    this.state.user.currentUser.$().subscribe((user) => {
      user ? this.approvedVisit(observer) : this.rejectedVisit(observer);
    });
  });

  private approvedVisit(observer: Observer<boolean>): void {
    observer.next(true);
    observer.complete();
  }

  private rejectedVisit(observer: Observer<boolean>): void {
    this.router.navigate(['/']);
    observer.next(false);
    observer.complete();
  }
}
