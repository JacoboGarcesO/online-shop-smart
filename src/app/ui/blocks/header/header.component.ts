import { Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { ItemMenuComponent } from '../../elements/item-menu/item-menu.component';
import { ProfilePictureComponent } from '../../elements/profile-picture/profile-picture.component';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IUser } from '../../../core/models/user.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconComponent,
    ButtonComponent,
    ItemMenuComponent,
    ProfilePictureComponent,
    NgClass,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @Input() currentUser: IUser;
  @Output() logOut: EventEmitter<void> = new EventEmitter();
  public isMenuOpen: boolean = false;
  private router = inject(Router);

  get isAdmin(): boolean {
    return this.currentUser?.email === environment.adminEmail;
  }

  handleToggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/auth');
  }

  handleLogOut(): void {
    this.logOut.emit();
  }
}
