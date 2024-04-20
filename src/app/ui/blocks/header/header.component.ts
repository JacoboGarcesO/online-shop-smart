import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { ItemMenuComponent } from '../../elements/item-menu/item-menu.component';
import { ProfilePictureComponent } from '../../elements/profile-picture/profile-picture.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconComponent,
    ButtonComponent,
    ItemMenuComponent,
    ProfilePictureComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() currentUser: any;
  public isMenuOpen: boolean = false;

  handleToggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
