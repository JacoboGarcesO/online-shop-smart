import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Input, OnDestroy, Renderer2, inject } from '@angular/core';
import { IFood } from '../../../core/models/food.model';
import { ButtonComponent } from '../../elements/button/button.component';
import { FoodFormComponent } from '../../forms/food-form/food-form.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-manage-foods',
  standalone: true,
  imports: [ButtonComponent, TableComponent, FoodFormComponent],
  templateUrl: './manage-foods.component.html',
  styleUrl: './manage-foods.component.css'
})
export class ManageFoodsComponent implements AfterViewInit, OnDestroy {
  @Input() foods: IFood[];
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
