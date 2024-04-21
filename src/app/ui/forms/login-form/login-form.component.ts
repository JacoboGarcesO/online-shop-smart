import { Component } from '@angular/core';
import { InputComponent } from '../controls/input/input.component';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
