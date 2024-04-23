import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { InputComponent } from '../controls/input/input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFood } from '../../../core/models/food.model';
import { ButtonComponent } from '../../elements/button/button.component';
import { SelectComponent } from '../controls/select/select.component';
import { TextareaComponent } from '../controls/textarea/textarea.component';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    SelectComponent,
    TextareaComponent
  ],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})
export class FoodFormComponent implements OnChanges {
  @Input() currentFood: IFood;
  @Input() isLoading: boolean;
  @Output() formSubmitted: EventEmitter<IFood> = new EventEmitter();

  foodForm = this.formBuilder.group({
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    price: [null, [Validators.required]],
    originalPrice: [null, [Validators.required]],
    stock: [null, [Validators.required]],
    category: [null, [Validators.required]]
  });

  public readonly options: string[] = [
    'Vegetables',
    'Meat',
    'Cereals',
    'Dairy',
    'Fats'
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentFood'].currentValue) {
      this.initializeForm();
    }
  }

  handleSubmitForm(): void {    
    if (!this.foodForm.valid) { return; } 

    this.formSubmitted.emit(this.foodForm.getRawValue());
  }

  
  private initializeForm(): void {
    this.foodForm.patchValue({
      name: this.currentFood?.name as null,
      description: this.currentFood?.description as null,
      price: this.currentFood?.price  as null,
      originalPrice: this.currentFood?.originalPrice  as null,
      stock: this.currentFood?.stock  as null,
      category: this.currentFood?.category  as null
    });
  }
}
