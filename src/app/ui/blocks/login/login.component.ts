import { Component } from '@angular/core';
import { GoogleButtonComponent } from '../../elements/google-button/google-button.component';
import { LoginFormComponent } from '../../forms/login-form/login-form.component';
import { IconComponent } from '../../elements/icon/icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GoogleButtonComponent, LoginFormComponent, IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { }
