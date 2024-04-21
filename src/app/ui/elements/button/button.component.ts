import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string;
  @Input() type: 'default' | 'form' = 'default';
  @Input() size: number = 20;
  @Input() isDisabled: boolean;
  @Input() isLoading: boolean;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    this.clicked.emit();
  }
}
