import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {
  @Input() picture: string;
  @Input() userName: string;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    this.clicked.emit();
  }
}
