import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodComponent } from './food/food.component';
import { IFood, IFoodCart } from '../../../core/models/food.model';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  @Input() foods: IFood[];
  @Input() title: string;
  @Input() subtitle: string;
  @Input() isCommerce: boolean = false;
  @Output() modifiedFood: EventEmitter<IFoodCart> = new EventEmitter();

  handleModifiedFood(food: IFoodCart): void {
    this.modifiedFood.emit(food);
  }
}
