import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppState } from '../core/state/app.state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard {
  constructor(
    private readonly state: AppState,
    private readonly router: Router
  ) { }

  canActivate: CanActivateFn = () => new Observable((observer: Observer<boolean>) => {
    this.state.user.currentUser.$().subscribe((user) => {
      user?.email === environment.adminEmail ? this.approvedVisit(observer) : this.rejectedVisit(observer);
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
