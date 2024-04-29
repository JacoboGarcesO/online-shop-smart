import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class WelcomeContainerFacade {
  constructor(
    private readonly state: AppState
  ) { }

  //#region Observables
  currentUser$(): Observable<IUser> {
    return this.state.user.currentUser.$();
  }
  //#endregion
}