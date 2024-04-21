import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { ItemMenuComponent } from '../../elements/item-menu/item-menu.component';
import { ProfilePictureComponent } from '../../elements/profile-picture/profile-picture.component';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

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
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() currentUser: any;
  public isMenuOpen: boolean = false;
  private router = inject(Router);

  handleToggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/auth');
  }
}
