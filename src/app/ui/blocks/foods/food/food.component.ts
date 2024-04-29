import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IFood, IFoodCart } from '../../../../core/models/food.model';
import { IconComponent } from '../../../elements/icon/icon.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FoodComponent {
  @Input() food: IFood;
  @Input() isCommerce: boolean = false;
  @Output() modifiedFood: EventEmitter<IFoodCart> = new EventEmitter();

  sub(): void {
    if (this.food.quantity > 0) {
      this.modifiedFood.emit({ id: this.food.id, quantity: this.food.quantity - 1 });
    }
  }

  add(): void {
    if (this.food.quantity < this.food.stock) {
      this.modifiedFood.emit({ id: this.food.id, quantity: this.food.quantity + 1 });
    }
  }
}