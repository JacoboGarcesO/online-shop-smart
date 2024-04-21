import { Component } from '@angular/core';
import { FooterLoginComponent } from '../../ui/elements/footer-login/footer-login.component';
import { LoginComponent } from '../../ui/blocks/login/login.component';

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [FooterLoginComponent, LoginComponent],
  templateUrl: './authentication-container.component.html'
})
export class AuthenticationContainerComponent { }
