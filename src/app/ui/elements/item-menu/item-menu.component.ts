import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.css'
})
export class ItemMenuComponent {
  @Input() section: string;
  @Input() text: string;
}
