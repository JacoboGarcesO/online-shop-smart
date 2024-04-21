import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { IReview } from '../../core/models/review.model';
import { ResourcesService } from '../../core/services/resources.service';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AsideContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly resourcesService: ResourcesService
  ) { }

  //#region Observables
  reviews$(): Observable<IReview[]> {
    return this.state.resources.reviews.$();
  }
  //#endregion

  //#region Public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  getReviews(): void {
    this.subscriptions.add(
      this.resourcesService.getReviews().pipe(
        tap(this.state.resources.reviews.set.bind(this))
      ).subscribe()
    );
  }
  //#endregion
}