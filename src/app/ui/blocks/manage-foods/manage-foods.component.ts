import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IFood } from '../../../core/models/food.model';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { FoodFormComponent } from '../../forms/food-form/food-form.component';
import { TableComponent } from '../table/table.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-manage-foods',
  standalone: true,
  imports: [
    ButtonComponent,
    TableComponent,
    FoodFormComponent,
    IconComponent,
    NgClass,
    ModalComponent
  ],
  templateUrl: './manage-foods.component.html',
  styleUrl: './manage-foods.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ManageFoodsComponent {
  @Output() toggleForm: EventEmitter<void> = new EventEmitter();
  @Output() sendForm: EventEmitter<IFood> = new EventEmitter();
  @Output() setCurrentFood: EventEmitter<IFood> = new EventEmitter();
  @Output() deleteFood: EventEmitter<void> = new EventEmitter();
  @Input() foods: IFood[];
  @Input() isFormVisible: boolean;
  @Input() isLoadingAction: boolean;
  @Input() isLoadingTable: boolean;
  @Input() currentFood: IFood;

  handleToggleForm(): void {
    this.toggleForm.emit();
  }

  handleSendForm(food: IFood): void {
    this.sendForm.emit(food);
  }

  handleDeleteFood(): void {
    this.deleteFood.emit();
  }

  setCurrentProduct(food: IFood): void {
    this.setCurrentFood.emit(food);
  }
}
