import { Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from '@angular/core';
import { IUser } from '../../../core/models/user.model';
import { ProfilePictureComponent } from '../../elements/profile-picture/profile-picture.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [ProfilePictureComponent, IconComponent, RouterLink],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderAdminComponent {
  @Input() currentUser: IUser;
  @Input() isCommerce: boolean;
  @Input() foodsCount: number;
  @Output() logOut: EventEmitter<void> = new EventEmitter();
  router: Router = inject(Router);

  handleLogOut(): void {
    this.logOut.emit();
  }

  navigate(): void {
    this.router.navigateByUrl('/commerce/all/pay');
  }
}
