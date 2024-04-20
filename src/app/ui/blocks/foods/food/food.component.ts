import { Component, Input } from '@angular/core';
import { IFood } from '../../../../core/models/food.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() food: IFood;
}