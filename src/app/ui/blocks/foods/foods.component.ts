import { Component, Input } from '@angular/core';
import { FoodComponent } from './food/food.component';
import { IFood } from '../../../core/models/food.model';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  @Input() foods: IFood[];
}
