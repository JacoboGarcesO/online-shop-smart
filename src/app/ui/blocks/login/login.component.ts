import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserCredentials } from '../../../core/models/user.model';
import { GoogleButtonComponent } from '../../elements/google-button/google-button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { LoginFormComponent } from '../../forms/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GoogleButtonComponent, LoginFormComponent, IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() loginError: string;
  @Input() isLoading: boolean;
  @Output() formSubmitted: EventEmitter<IUserCredentials> = new EventEmitter();
  @Output() googleSignInEvent: EventEmitter<void> = new EventEmitter();

  googleSignIn(): void {
    this.googleSignInEvent.emit();
  }

  handleSubmitForm(credentials: IUserCredentials): void {
    this.formSubmitted.emit(credentials);
  }
}
