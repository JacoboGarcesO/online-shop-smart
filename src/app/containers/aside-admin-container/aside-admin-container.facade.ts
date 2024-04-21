import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { IMenuItem } from '../../core/models/menu-item.model';
import { ResourcesService } from '../../core/services/resources.service';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AsideAdminContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly state: AppState,
    private readonly resourcesService: ResourcesService
  ) { }

  //#region Observables
  items$(): Observable<IMenuItem[]> {
    return this.state.resources.items.$();
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
      this.resourcesService.getMenuItems().pipe(
        tap(this.state.resources.items.set.bind(this))
      ).subscribe()
    );
  }
  //#endregion
}