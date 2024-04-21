import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string;
  @Input() size: number = 20;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    this.clicked.emit();
  }
}
