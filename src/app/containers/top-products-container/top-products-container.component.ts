import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodsComponent } from '../../ui/blocks/foods/foods.component';
import { TopProductsContainerFacade } from './top-products-container.facade';
import { Observable } from 'rxjs';
import { IFood } from '../../core/models/food.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-top-products-container',
  standalone: true,
  imports: [FoodsComponent, AsyncPipe],
  templateUrl: './top-products-container.component.html'
})
export class TopProductsContainerComponent implements OnInit, OnDestroy {
  public foods$: Observable<IFood[]>;

  constructor(private readonly facade: TopProductsContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getFoods();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
    this.facade.clearState();
  }

  private initializeSubscriptions(): void {
    this.foods$ = this.facade.foods$();
  }
}
