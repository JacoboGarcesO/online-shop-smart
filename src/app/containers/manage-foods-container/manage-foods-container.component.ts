import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManageFoodsComponent } from '../../ui/blocks/manage-foods/manage-foods.component';
import { AsyncPipe } from '@angular/common';
import { ManageFoodContainerFacade } from './manage-foods-container.facade';
import { Observable } from 'rxjs';
import { IFood } from '../../core/models/food.model';

@Component({
  selector: 'app-manage-foods-container',
  standalone: true,
  imports: [ManageFoodsComponent, AsyncPipe],
  templateUrl: './manage-foods-container.component.html'
})
export class ManageFoodsContainerComponent implements OnInit, OnDestroy {
  public foods$: Observable<IFood[]>;

  constructor(private readonly facade: ManageFoodContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getFoods();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.foods$ = this.facade.foods$();
  }
}