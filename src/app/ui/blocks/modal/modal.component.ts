import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent, IconComponent, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @Input() title: string;
  @Input() isConfirm: boolean = true;
  @Output() confirm: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  isVisible = false;

  toggleModal(): void {
    this.isVisible = !this.isVisible;
  }

  handleCancel(): void {
    this.cancel.emit();
    this.toggleModal();
  }

  handleConfirm(): void {
    this.confirm.emit();
    this.toggleModal();
  }
}
