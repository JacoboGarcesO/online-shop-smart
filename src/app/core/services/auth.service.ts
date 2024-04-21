import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { environment } from '../../../environments/environment';
import { Observable, from, map } from 'rxjs';
import { IUser, IUserCredentials } from '../models/user.model';
import { ApiToUserMapper } from '../mappers/api-to-user.mapper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly app = initializeApp(environment.firebaseConfig);
  private readonly auth = getAuth(this.app);

  constructor(private readonly mapper: ApiToUserMapper) { }

  loginWithCredentials(credentials: IUserCredentials): Observable<IUser> {
    return from(signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)).pipe(
      map((response) => this.mapper.map(response))
    );
  }

  loginWithGoogle(): Observable<IUser> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      map((response) => this.mapper.map(response))
    );
  }

  logOut(): Observable<void> {
    return from(signOut(this.auth));
  }

  getCurrentUser(): Observable<IUser> {
    return from(this.auth.authStateReady()).pipe(
      map(() => this.mapper.map({ user: this.auth.currentUser}))
    );
  }
}
