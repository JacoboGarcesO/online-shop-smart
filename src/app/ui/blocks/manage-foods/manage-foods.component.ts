import { DOCUMENT, NgClass } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, Renderer2, inject } from '@angular/core';
import { IFood } from '../../../core/models/food.model';
import { ButtonComponent } from '../../elements/button/button.component';
import { FoodFormComponent } from '../../forms/food-form/food-form.component';
import { TableComponent } from '../table/table.component';
import { IconComponent } from '../../elements/icon/icon.component';

@Component({
  selector: 'app-manage-foods',
  standalone: true,
  imports: [ButtonComponent, TableComponent, FoodFormComponent, IconComponent, NgClass],
  templateUrl: './manage-foods.component.html',
  styleUrl: './manage-foods.component.css'
})
export class ManageFoodsComponent implements AfterViewInit, OnDestroy {
  @Output() toggleForm: EventEmitter<void> = new EventEmitter();
  @Output() sendForm: EventEmitter<IFood> = new EventEmitter();
  @Input() foods: IFood[];
  @Input() isFormVisible: boolean;
  @Input() isLoadingAction: boolean;
  @Input() isLoadingTable: boolean;
  @Input() currentFood: IFood;
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private scrollEventHandler: () => void;
  private resizeObserver: ResizeObserver;

  ngAfterViewInit(): void {
    this.initializeResizeObserver();
  }

  ngOnDestroy(): void {
    this.scrollEventHandler();
  }

  handleToggleForm(): void {
    this.toggleForm.emit();
  }

  handleSendForm(food: IFood): void {
    this.sendForm.emit(food);
  }

  private initializeResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.target.getBoundingClientRect().width + 40;
        this.renderer.setStyle(this.document.querySelector('.manage-foods'), 'width', 'calc(100dvw - ' + width + 'px');
      }
    });
    this.resizeObserver.observe(this.document.querySelector('.aside'));
  }
}
