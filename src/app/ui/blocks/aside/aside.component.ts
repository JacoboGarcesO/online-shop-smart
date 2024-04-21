import { Component, Input } from '@angular/core';
import { IconComponent } from '../../elements/icon/icon.component';
import { ItemMenuComponent } from '../../elements/item-menu/item-menu.component';
import { IMenuItem } from '../../../core/models/menu-item.model';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [IconComponent, ItemMenuComponent, RouterLink, NgClass],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  @Input() items: IMenuItem[];
  public isVisible: boolean = true;

  handleToggleMenu(): void {
    this.isVisible = !this.isVisible;
  }
}
