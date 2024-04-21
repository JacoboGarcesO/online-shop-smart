import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root'
})
export class UserState {
  private currentUser$: BehaviorSubject<IUser> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      currentUser: this.factory.state(this.currentUser$)
    };
  }
}
