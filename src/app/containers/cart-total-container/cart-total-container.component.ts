import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartTotalContainerFacade } from './cart-total-container.facade';
import { CartTotalComponent } from '../../ui/blocks/cart-total/cart-total.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-total-container',
  standalone: true,
  imports: [CartTotalComponent, AsyncPipe],
  templateUrl: './cart-total-container.component.html'
})
export class CartTotalContainerComponent implements OnInit {
  total$: Observable<number>;
  subTotal$: Observable<number>;
  taxes$: Observable<number>;

  constructor(private readonly facade: CartTotalContainerFacade) { }

  ngOnInit(): void {
    this.total$ = this.facade.total$();
    this.subTotal$ = this.facade.subTotal$();
    this.taxes$ = this.facade.taxes$();
  }
}
