import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterLoginComponent } from '../../ui/elements/footer-login/footer-login.component';
import { LoginComponent } from '../../ui/blocks/login/login.component';
import { AuthenticationContainerFacade } from './authentication-container.facade';
import { IUserCredentials } from '../../core/models/user.model';

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [FooterLoginComponent, LoginComponent],
  templateUrl: './authentication-container.component.html'
})
export class AuthenticationContainerComponent implements OnInit, OnDestroy {
  constructor(private readonly facade: AuthenticationContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
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
}
