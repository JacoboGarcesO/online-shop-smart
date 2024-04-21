import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../controls/input/input.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserCredentials } from '../../../core/models/user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input() isLoading: boolean;
  @Output() formSubmitted: EventEmitter<IUserCredentials> = new EventEmitter();

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) { }

  handleSubmitForm(): void {    
    if (!this.loginForm.valid) { return; } 

    this.formSubmitted.emit(this.loginForm.getRawValue());
  }
}
