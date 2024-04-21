import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterLoginComponent } from '../../ui/elements/footer-login/footer-login.component';
import { LoginComponent } from '../../ui/blocks/login/login.component';
import { AuthenticationContainerFacade } from './authentication-container.facade';
import { IUserCredentials } from '../../core/models/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [FooterLoginComponent, LoginComponent, AsyncPipe],
  templateUrl: './authentication-container.component.html'
})
export class AuthenticationContainerComponent implements OnInit, OnDestroy {
  public loginError$: Observable<string>;
  public isLoading$: Observable<boolean>;

  constructor(private readonly facade: AuthenticationContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  loginWithCredentials(credentials: IUserCredentials): void {
    this.facade.loginWithCredentials(credentials);
  }

  loginWithGoogle(): void {
    this.facade.loginWithGoogle();
  }

  private initializeSubscriptions(): void {
    this.loginError$ = this.facade.loginError$();
    this.isLoading$ = this.facade.isLoading$();
  }
}
