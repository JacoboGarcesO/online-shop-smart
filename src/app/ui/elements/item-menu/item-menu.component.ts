import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.css'
})
export class ItemMenuComponent {
  @Input() section: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() isLink: boolean = false;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    this.clicked.emit();
  }
}
