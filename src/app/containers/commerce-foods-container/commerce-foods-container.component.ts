import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { IFood, IFoodCart } from '../../core/models/food.model';
import { FoodsComponent } from '../../ui/blocks/foods/foods.component';
import { CommerceFoodsContainerFacade } from './commerce-foods-container.facade';

@Component({
  selector: 'app-commerce-foods-container',
  standalone: true,
  imports: [FoodsComponent, AsyncPipe],
  templateUrl: './commerce-foods-container.component.html'
})
export class CommerceFoodsContainerComponent implements OnInit, OnDestroy {
  public foods$: Observable<IFood[]>;
  public category$: Observable<string>;

  constructor(
    private readonly facade: CommerceFoodsContainerFacade,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const isCart = this.route.snapshot.data['isCart'];
        this.facade.setCategory(params.get('category'), isCart);
      });
    this.initializeSubscriptions();
  }
    
  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  handleModifiedFood(food: IFoodCart): void {
    this.facade.updateFood(food);
  }
    
  private initializeSubscriptions(): void {
    this.foods$ = this.facade.foods$();
    this.category$ = this.facade.category$();
  }
}
