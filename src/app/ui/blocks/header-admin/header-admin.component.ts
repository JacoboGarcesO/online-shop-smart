import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../core/models/user.model';
import { ProfilePictureComponent } from '../../elements/profile-picture/profile-picture.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [ProfilePictureComponent, IconComponent, RouterLink],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {
  @Input() currentUser: IUser;
  @Output() logOut: EventEmitter<void> = new EventEmitter();

  handleLogOut(): void {
    this.logOut.emit();
  }
}
